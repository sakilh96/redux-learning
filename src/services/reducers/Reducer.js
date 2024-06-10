import { ADD_TO_CART } from "../constant";
import { REMOVE_CART } from "../constant";


const initialState = {
   cardData: []
}

const cardItems = (state = initialState, action) => {
      switch(action.type){
        case ADD_TO_CART:
            console.log('reducer',state);
            return {
                ...state,
                cardData: [...state.cardData, action.data] 
            }
        case REMOVE_CART:
               state.cardData.pop();
            return {
                ...state,
                cardData: state.cardData
            }
        default:
            return state;
      }
}

export default cardItems;