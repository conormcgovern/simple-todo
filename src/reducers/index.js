import { combineReducers } from 'redux';
import TodoReducer from './reducer_todo';
import CompletedTodosReducer from './reducer_completed_todos';

const rootReducer = combineReducers({
  todos: TodoReducer,
  completed: CompletedTodosReducer
});

export default rootReducer;
