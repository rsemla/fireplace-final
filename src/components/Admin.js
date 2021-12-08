import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ADD_PRODUCT} from "../actions/types";

function Admin(addProduct) {

	const [obj, setObj] = React.useState([{
		productName: "",
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
			[event.target.productName]: event.target.value
		}
		setObj(newInput);
	}

	const handleSubmit = (event) => {
		if (!obj.productName || !obj.price || !obj.stock || !obj.image) {
			event.preventDefault();

		} else {
			addCar()
		}
	}

	return (
		<div>
			<h1>Administration Page. Need to add a car?</h1>

			<input type="text" placeholder={"Car Name..."} onChange={handleChange("productName")}/>
			<input type="text" placeholder={"Price..."} onChange={handleChange("price")}/>
			<input type="text" placeholder={"In Stock..."} onChange={handleChange("stock")}/>
			<input type="text" placeholder={"Image..."} onChange={handleChange("image")}/>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	)
}


export default Admin;