import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneFood, addFlavor } from '../services/foods';

export default function FoodDetail(props) {
	const [foodItem, setFoodItem] = useState(null);
	const [flavorId, setFlavorId] = useState('');
	const { flavors } = props;
	const { id } = useParams();

	useEffect(() => {
		const fetchFoodItem = async () => {
			const foodData = await getOneFood(id);
			setFoodItem(foodData);
		};
		fetchFoodItem();
	}, [id]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const foodItem = await addFlavor(id, flavorId);
		setFoodItem(foodItem);
	};

	// this is the handleChange for the select drop down
	// since this form only has one value, we do not need a variable name for the key
	const handleChange = (e) => {
		const { value } = e.target;
		setFlavorId(value);
	};

	return (
		<div>
			<h3>{foodItem?.name}</h3>
			{foodItem?.flavors.map((flavor) => (
				<p key={flavor.id}>{flavor.name}</p>
			))}
			{/* below is our for for the flavor drop down */}
			<form onSubmit={handleSubmit}>
				<select defaultValue='default' onChange={handleChange}>
					{/* we can set a default value to tell people to select a flavor*/}
					{/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
					{/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
					<option disabled value='default'>
						-- Select a flavor --
					</option>
					{/* now we loop over all flavors and return an <option> tag for each */}
					{flavors.map((flavor) => (
						// we track the flavor's id as the "value" which will get added to state onChange
						// the flavor's name goes between the open and close tag which is what the user sees
						<option value={flavor.id} key={flavor.id}>
							{flavor.name}
						</option>
					))}
				</select>
				<button>add</button>
			</form>
		</div>
	);
}
