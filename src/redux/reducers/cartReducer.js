import { ADD_PRODUCT_CART, GET_NUMBERS_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_FROM_CART} from '../../actions/types';

const initialState = {
	cartNumbers: 0,
	cartTotalCost: 0,
	stockNumbers: 0,
	cartProducts: {
		car1: {
			name: "Car 1",
			tagName: 'car1',
			price: 180000,
			quantity: 0,
			stock: 20,
			inCart: false
		},
		car2: {
			name: "Car 2",
			tagName: 'car2',
			price: 2000000,
			quantity: 0,
			stock: 10,
			inCart: false
		},
		car3: {
			name: "Car 3",
			tagName: 'car3',
			price: 150000,
			quantity: 0,
			stock: 25,
			inCart: false
		},
		car4: {
			name: "Car 4",
			tagName: 'car4',
			price: 200000,
			quantity: 0,
			stock: 12,
			inCart: false
		},
		car5: {
			name: "Car 5",
			tagName: 'car5',
			price: 500000,
			quantity: 0,
			stock: 12,
			inCart: false
		},
		car6: {
			name: "Car 6",
			tagName: 'car6',
			price: 600000,
			quantity: 0,
			stock: 8,
			inCart: false
		},
		car7: {
			name: "Car 7",
			tagName: 'car7',
			price: 250000,
			quantity: 0,
			stock: 5,
			inCart: false
		},
		car8: {
			name: "Car 8",
			tagName: 'car8',
			price: 270000,
			quantity: 0,
			stock: 18,
			inCart: false
		},
		car9: {
			name: "Car 9",
			tagName: 'car9',
			price: 275000,
			quantity: 0,
			stock: 16,
			inCart: false
		}
	}

}

export default (state = initialState, action) => {
	let productSelected = ""
	switch(action.type) {
		case ADD_PRODUCT_CART:
			productSelected = { ...state.cartProducts[action.payload]}
			if(productSelected.stock >0){
			productSelected.quantity += 1;
			productSelected.stock -= 1;
			productSelected.inCart = true;

			return {
				...state,
				cartNumbers: state.cartNumbers + 1,
				stockNumbers: productSelected.stock,
				cartTotalCost: state.cartTotalCost + state.cartProducts[action.payload].price,
				cartProducts: {
					...state.cartProducts,
					[action.payload]: productSelected
				}
			}
			}
break
		case GET_NUMBERS_CART:
			return {
				...state
			}
		case INCREASE_QUANTITY:
			productSelected = { ...state.cartProducts[action.payload]}
			if(productSelected.stock >0) {
				productSelected.quantity += 1;
				productSelected.stock -= 1;

				return {
					...state,
					cartNumbers: state.cartNumbers + 1,
					stockNumbers: productSelected.stock,
					cartTotalCost: state.cartTotalCost + state.cartProducts[action.payload].price,
					cartProducts: {
						...state.cartProducts,
						[action.payload]: productSelected
					}
				}
			}
			break
		case DECREASE_QUANTITY:
			productSelected = { ...state.cartProducts[action.payload]}
			let newCartCost = 0;
			let newCartNumbers = 0;
			if(productSelected.quantity === 0){
				productSelected.quantity = 0;
				newCartCost = state.cartTotalCost;
				newCartNumbers = state.cartNumbers;
			}else{
				productSelected.quantity -= 1;
				productSelected.stock += 1;
				newCartCost = state.cartTotalCost - state.cartProducts[action.payload].price;
				newCartNumbers = state.cartNumbers - 1;
			}
			
			return {
				...state,
				cartNumbers: newCartNumbers,
				stockNumbers: productSelected.stock,
				cartTotalCost: newCartCost,
				cartProducts: {
					...state.cartProducts,
					[action.payload]: productSelected
				}
			}
		case REMOVE_FROM_CART:
			productSelected = { ...state.cartProducts[action.payload]}
			let quantityTracker = productSelected.quantity;
			productSelected.quantity = 0;
			productSelected.inCart = false;

			return{
				...state,
				cartNumbers: state.cartNumbers - quantityTracker,
				stockNumbers: initialState.stock,
				cartTotalCost: state.cartTotalCost - (quantityTracker * productSelected.price),
				cartProducts: {
					...state.cartProducts,
					[action.payload]: productSelected
				}				
			}
		default:
			return state;

	}

}













