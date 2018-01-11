import { COMPLETE_TODO, UNCOMPLETE_TODO } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case COMPLETE_TODO:
      return state.concat(action.payload);

    case UNCOMPLETE_TODO:
      return state.filter(todo => todo !== action.payload);

    default:
      return state;
  }

}
