import { ADD_TODO, DELETE_TODO } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      let key = state.length;
      return [ { key: key, item: action.payload }, ...state];

    case DELETE_TODO:
      return state.filter(todo => todo !== action.payload);

    default:
      return state;
  }

}
