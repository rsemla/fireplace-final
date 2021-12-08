import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { addCart } from "../actions/addAction";
import { getNumbers } from '../actions/getAction';
import { productQuantity, removeFromCart } from "../actions/productQuantity";
import Cart from "./Cart";
import car1 from '../images/image1.jpg'
import car2 from '../images/image2.jpg'
import car3 from '../images/image3.jpg'
import car4 from '../images/image4.jpg'
import car5 from '../images/image5.jpg'
import car6 from '../images/image6.jpg'
import car7 from '../images/image7.jpg'
import car8 from '../images/image8.jpg'
import car9 from '../images/image9.jpg'
import cartReducer from "../reducers/cartReducer";

const imageStyle = {
	width: '300px',
	height: '250px'
}

const Home = (props, product, cartProducts) => {
	return (

		<div className="container">
			<div className="image">
				<img src={car1} alt="Car 1" style={imageStyle}/>
				<h3>Ferrari SF90 Stradale</h3>
				<h3>$180,000</h3>
				<h3>Stock: ({props.cartProps.stockNumbers})</h3>
				<a onClick={() => props.addCart('car1')} className="addToCart cart1" href="#">Add to Cart</a>
			</div>
			<div className="image">
				<img src={car2} alt="Car 2" style={imageStyle}/>
				<h3>Ferrari LaFerrari</h3>
				<h3>$2,000,000</h3>
				<h3>Stock: ({props.cartProps.stockNumbers})</h3>
				<a onClick={() => props.addCart('car2')} className="addToCart cart2" href="#">Add to Cart</a>
			</div>
			<div className="image">
				<img src={car3} alt="Car 3" style={imageStyle}/>
				<h3>Ferrari Roma</h3>
				<h3>$150,000</h3>
				<h3>Stock: ({props.cartProps.stockNumbers})</h3>
				<a onClick={() => props.addCart('car3')} className="addToCart cart3" href="#">Add to Cart</a>
			</div>
			<div className="image">
				<img src={car4} alt="Car 4" style={imageStyle}/>
				<h3>Ferrari 488</h3>
				<h3>$200,000</h3>
				<h3>Stock: ({props.cartProps.stockNumbers})</h3>
				<a onClick={() => props.addCart('car4')} className="addToCart cart4" href="#">Add to Cart</a>
			</div>
			<div className="image">
				<img src={car5} alt="Car 5" style={imageStyle}/>
				<h3>Ferrari 488 GT3 #61</h3>
				<h3>$500,000</h3>
				<h3>Stock: ({props.cartProps.stockNumbers})</h3>
				<a onClick={() => props.addCart('car5')} className="addToCart cart5" href="#">Add to Cart</a>
			</div>
			<div className="image">
				<img src={car6} alt="Car 6" style={imageStyle}/>
				<h3>Ferrari 488 GT2 #2</h3>
				<h3>$600,000</h3>
				<h3>Stock: ({props.cartProps.stockNumbers})</h3>
				<a onClick={() => props.addCart('car6')} className="addToCart cart6" href="#">Add to Cart</a>
			</div>
			<div className="image">
				<img src={car7} alt="Car 7" style={imageStyle}/>
				<h3>Ferrari 488 GTB</h3>
				<h3>$250,000</h3>
				<h3>Stock: ({props.cartProps.stockNumbers})</h3>
				<a onClick={() => props.addCart('car7')} className="addToCart cart7" href="#">Add to Cart</a>
			</div>
			<div className="image">
				<img src={car8} alt="Car 8" style={imageStyle}/>
				<h3>Ferrari 488 Special Edition Yellow</h3>
				<h3>$270,000</h3>
				<h3>Stock: ({props.cartProps.stockNumbers})</h3>
				<a onClick={() => props.addCart('car8')} className="addToCart cart8" href="#">Add to Cart</a>
			</div>
			<div className="image">
				<img src={car9} alt="Car 9" style={imageStyle}/>
				<h3>Ferrari Special Edition Blue</h3>
				<h3>$275,000</h3>
				<h3>Stock: ({props.cartProps.stockNumbers})</h3>
				<a onClick={() => props.addCart('car9')} className="addToCart cart9" href="#">Add to Cart</a>
			</div>


		</div>


	)
}


const mapStateToProps = state => ({
	cartProps: state.cartState
})

export default connect(mapStateToProps,  {addCart, getNumbers, productQuantity, removeFromCart})(Home);
