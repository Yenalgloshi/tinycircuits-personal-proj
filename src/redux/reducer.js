// INITIAL STATE
let initialState = {
  cart:[]
}

// CONST VARIABLES
const ADD_TO_CART = 'ADD_TO_CART';
const DEL_FROM_CART = 'DEL_FROM_CART';
const SET_TO_CART = 'SET_TO_CART';

// REDUCER FUNCTION
export default function reducer(state = initialState, action){
  switch(action.type) {
    case ADD_TO_CART:
      let currentCart = [...state.cart, action.payload]
      return Object.assign({}, state, {cart: currentCart})

    case SET_TO_CART: 
      return Object.assign({}, state, {cart: action.payload})
    
    case DEL_FROM_CART:
      return initialState;

    default: 
      return state;  
  }
}

// ACTION BUILDERS/CREATORS
export function addToCart(item){
  //  the return of an action creator is the action in the reducer
  return {
    type: ADD_TO_CART, 
    payload: item
  }
}

export function setToCart(cart){
  return{
    type: SET_TO_CART,
    payload: cart
  }
}

export function delFromCart(item){
  //  the return of an action creator is the action in the reducer
  return {
    type: DEL_FROM_CART, 
    payload: item
  }
}