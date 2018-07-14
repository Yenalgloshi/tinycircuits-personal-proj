// INITIAL STATE
let initialState = {
  cart:''
}

// CONST VARIABLES
const ADD_TO_CART = 'ADD_TO_CART';

// REDUCER FUNCTION
export default function reducer(state = initialState, action){
  switch(action.type) {
    case ADD_TO_CART:
      return Object.assign({}, state, action.payload)
    
    case RESET_STORE:
      return initialState;

    default: 
      return state;  
  }
}

// ACTION BUILDERS/CREATORS
export function addToCart(cartItem){
  //  the return of an action creator is the action in the reducer
  return {
    type: ADD_PROPERTY_INFO, 
    payload: item
  }
}