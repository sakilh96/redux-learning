import { ADD_TO_CART } from "../constant";
import { REMOVE_CART } from "../constant";

export const cartHandler = (data) =>{
    // console.log('action',data);
    return {
        type: ADD_TO_CART,
        data: data
    }
}


export const removeCart = (data) =>{
    console.log('data removeCart ',data);
    return {
        type: REMOVE_CART,
       
    }
}
