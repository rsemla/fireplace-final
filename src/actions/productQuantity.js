import { INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_FROM_CART } from './types';

export const productQuantity = (action, name) => {
	return (dispatch) => {

		dispatch({
			type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
			payload: name
		})
	}
}

export const removeFromCart = (name) => {
	return (dispatch) => {

		dispatch({
			type: REMOVE_FROM_CART,
			payload: name
		})
	}

}
