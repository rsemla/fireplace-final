import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

const initState = {
	name:"Ferrari",
	tags:[]

}
const rootReducer = (state = initState, action) => {

	if (action.type === 'ADD_PRODUCT') {
		let newArray = state.tags;
		newArray.push(action.name);

		return {
			...state,
			tags: newArray
		}
	}
	return state;
}



export default combineReducers({
	cartState: cartReducer, rootReducer
})




