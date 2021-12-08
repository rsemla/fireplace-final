import React from 'react';
import {useDispatch} from "react-redux";
import {addProduct} from "../actions/addProduct";

function Admin() {

	const [obj, setObj] = React.useState([{
		name: "",
		price: "",
		stock: "",
		image:""
	}])

	const dispatch = useDispatch();

	const addCar = () => {
		dispatch(addProduct(obj))
	}

	const handleChange = (event) => {
		const newInput = {
			...obj,
			[event.target.name]: event.target.value
		}
		setObj(newInput);
	}

	const handleSubmit = (event) => {
		if (!obj.name || !obj.price || !obj.stock || !obj.image) {
			event.preventDefault();

		} else {
			addCar()
		}
	}

	return (
		<div>
			<h1>Administration Page. Need to add a car?</h1>

			<input type="text" placeholder={"Car Name..."} onChange={handleChange("name")}/>
			<input type="text" placeholder={"Price..."} onChange={handleChange("price")}/>
			<input type="text" placeholder={"In Stock..."} onChange={handleChange("stock")}/>
			<input type="text" placeholder={"Image..."} onChange={handleChange("image")}/>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	)
}


export default Admin;