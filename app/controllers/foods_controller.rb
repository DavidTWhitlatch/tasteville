class FoodsController < ApplicationController
  before_action :set_food, only: [:show, :update, :destroy, :add_flavor]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /foods
  def index
    @foods = Food.all

    render json: @foods
  end

  # GET /foods/1
  def show
    render json: @food, include: :flavors
  end

  # POST /foods
  def create
    @food = Food.new(food_params)
    @food.user = @current_user

    if @food.save
      render json: @food, status: :created
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /foods/1
  def update
    if @food.update(food_params)
      render json: @food
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end

  # DELETE /foods/1
  def destroy
    @food.destroy
  end

  # PUT /flavors/1/foods/1
  def add_flavor
    @flavor = Flavor.find(params[:flavor_id])
    # @food = Food.find(params[:id])

    @flavor.foods << @food
    # @flavor.foods.push(@food)
    # ==== OR ====
    # @food.flavors << @flavor
    render json: @food, include: :flavors
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_food
      @food = Food.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def food_params
      params.require(:food).permit(:name)
    end
end
