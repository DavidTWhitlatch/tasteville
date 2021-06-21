import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function FoodEdit(props) {
	const [formData, setFormData] = useState({
		name: '',
	});
	const { name } = formData;
	const { foods, handleUpdate } = props;
	const { id } = useParams();

	useEffect(() => {
		const prefillFormData = () => {
			const singleFood = foods.find((food) => food.id === Number(id));
			setFormData({
				name: singleFood.name,
			});
		};
		if (foods.length) {
			prefillFormData();
		}
	}, [foods]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleUpdate(id, formData);
			}}
		>
			<h3>Edit Food</h3>
			<label>
				Name:
				<input type='text' name='name' value={name} onChange={handleChange} />
			</label>
			<button>Submit</button>
		</form>
	);
}
