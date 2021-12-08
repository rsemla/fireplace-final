import { ADD_PRODUCT } from './types';

export const addProduct = (productName, price, stock, image) => {
    return(dispatch) => {

        dispatch({
            type: ADD_PRODUCT,
            productName: productName,
            price: price,
            stock: stock,
            image: image

        })
    }
}
