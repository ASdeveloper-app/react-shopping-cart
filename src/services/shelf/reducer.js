import { FETCH_PRODUCTS } from './actionTypes';

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return Object.assign({}, state, { products: action.payload })
    default:
      return state;
  }
}
