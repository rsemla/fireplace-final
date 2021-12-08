import { ADD_PRODUCT } from './types';

export const addProduct = (name) => {
    return(dispatch) => {

        dispatch({
            type: ADD_PRODUCT,
            payload: name
        })
    }
}
