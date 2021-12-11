import React, {Fragment} from 'react'
import { connect } from 'react-redux';
import { productQuantity, removeFromCart } from "../actions/productQuantity";
import car1 from '../images/image1.jpg'
import car2 from '../images/image2.jpg'
import car3 from '../images/image3.jpg'
import car4 from '../images/image4.jpg'
import car5 from '../images/image5.jpg'
import car6 from '../images/image6.jpg'
import car7 from '../images/image7.jpg'
import car8 from '../images/image8.jpg'
import car9 from '../images/image9.jpg'

function Cart({cartProps, productQuantity, removeFromCart}){

	let productsInCart = [];

	Object.keys(cartProps.cartProducts).forEach( function(item) {

		if(cartProps.cartProducts[item].inCart){
			productsInCart.push(cartProps.cartProducts[item])
		}
	})


	const productImages = (product) => {
		if(product.tagName === 'car1'){
			return car1
		}else if(product.tagName === 'car2'){
			return car2
		}else if(product.tagName === 'car3'){
			return car3
		}else if(product.tagName === 'car4'){
			return car4
		}else if(product.tagName === 'car5'){
			return car5
		}else if(product.tagName === 'car6'){
			return car6
		}else if(product.tagName === 'car7'){
			return car7
		}else if(product.tagName === 'car8'){
			return car8
		}else if(product.tagName === 'car9'){
			return car9
		}
	}
	productsInCart = productsInCart.map( (product, idx) =>{

		return(
			<Fragment key={idx}>
				<div className="product"><img src={productImages(product)} alt={productImages(product)} />
					<span className="sm-hide">{product.name}</span>
				</div>
				<div className="price sm-hide">${product.price}</div>

				<div className="quantity">

					<span>{product.quantity} Stock:{product.stock}</span>
					<div>
					<button onClick={()=> productQuantity('increase', product.tagName)}>Increase</button>
					<button onClick={()=> productQuantity('decrease', product.tagName)}>Decrease</button>
					<button onClick={() => removeFromCart(product.tagName)}>Remove</button>
					</div>
				</div>
				<div className="total">${product.quantity * product.price}</div>
				<button onClick={() => removeFromCart(product.tagName)}>Purchase</button>
			</Fragment>
		)
	})

	return (
		<div className="container-products">
			<div className="product-header">
				<h5 className="product-title">PRODUCT</h5>
				<h5 className="price sm-hide">PRICE</h5>
				<h5 className="quantity">QUANTITY</h5>
				<h5 className="total">TOTAL</h5>
			</div>
			<div className="products">
				{ productsInCart }
			</div>
			<div className="cartTotalContainer">
				<h4 className="cartTotalTitle">Cart Total</h4>
				<h4 className="cartTotal"> {cartProps.cartTotalCost} </h4>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	cartProps: state.cartState
})

export default connect(mapStateToProps, { productQuantity, removeFromCart })(Cart);