import api from './api-config';

export const getAllFoods = async () => {
	const resp = await api.get('/foods');
	return resp.data;
};

export const getOneFood = async (id) => {
	const resp = await api.get(`/foods/${id}`);
	return resp.data;
};

export const postFood = async (foodData) => {
	const resp = await api.post('/foods', { food: foodData });
	return resp.data;
};

export const putFood = async (id, foodData) => {
	const resp = await api.put(`/foods/${id}`, { food: foodData });
	return resp.data;
};

export const deleteFood = async (id) => {
	const resp = await api.delete(`/foods/${id}`);
	return resp;
};

export const addFlavor = async (foodId, flavorId) => {
	const resp = await api.put(`/flavors/${flavorId}/foods/${foodId}`);
	return resp.data;
};
