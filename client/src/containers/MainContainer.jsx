// Packages
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

// Custom Components
import Flavors from '../screens/Flavors';
import Foods from '../screens/Foods';
import FoodCreate from '../screens/FoodCreate';
import FoodDetail from '../screens/FoodDetail';
import FoodEdit from '../screens/FoodEdit';

// Services
import { getAllFlavors } from '../services/flavors';
import { deleteFood, getAllFoods, postFood, putFood } from '../services/foods';

export default function MainContainer() {
	const [flavors, setFlavors] = useState([]);
	const [foods, setFoods] = useState([]);
	const history = useHistory();

	useEffect(() => {
		const fetchFlavors = async () => {
			const flavorList = await getAllFlavors();
			setFlavors(flavorList);
		};
		fetchFlavors();
	}, []);

	useEffect(() => {
		const fetchFoods = async () => {
			const foodList = await getAllFoods();
			setFoods(foodList);
		};
		fetchFoods();
	}, []);

	const handleCreate = async (formData) => {
		const foodItem = await postFood(formData);
		setFoods((prevState) => [...prevState, foodItem]);
		history.push('/foods');
	};

	const handleUpdate = async (id, formData) => {
		const foodItem = await putFood(id, formData);
		setFoods((prevState) =>
			prevState.map((food) => {
				return food.id === Number(id) ? foodItem : food;
			})
		);
		history.push('/foods');
	};
	const handleDelete = async (id) => {
		await deleteFood(id);
		setFoods((prevState) => prevState.filter((food) => food.id !== id));
	};

	return (
		<div>
			<Switch>
				<Route path='/foods/:id/edit'>
					<FoodEdit foods={foods} handleUpdate={handleUpdate} />
				</Route>
				<Route path='/foods/:id'>
					<FoodDetail flavors={flavors} />
				</Route>
				<Route path='/foods/new'>
					<FoodCreate handleCreate={handleCreate} />
				</Route>
				<Route path='/foods'>
					<Foods foods={foods} handleDelete={handleDelete} />
				</Route>
				<Route path='/flavors'>
					<Flavors flavors={flavors} />
				</Route>
			</Switch>
		</div>
	);
}
