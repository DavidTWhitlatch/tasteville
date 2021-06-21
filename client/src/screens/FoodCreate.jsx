import { useState } from 'react';

export default function FoodCreate(props) {
	const [formData, setFormData] = useState({
		name: '',
	});
	const { name } = formData;
	const { handleCreate } = props;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	// const handelChange = (e) => {
	//   const { value } = e.target;
	//   setFormData({ name: value })
	// }

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleCreate(formData);
			}}
		>
			<h3>Create Food</h3>
			<label>
				Name:
				<input type='text' name='name' value={name} onChange={handleChange} />
			</label>
			<button>Submit</button>
		</form>
	);
}
