export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const UNCOMPLETE_TODO = 'UNCOMPLETE_TODO';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  };
}

export function deleteTodo(todo) {
  return {
    type: DELETE_TODO,
    payload: todo
  };
}

export function completeTodo(todo) {
  return {
    type: COMPLETE_TODO,
    payload: todo
  };
}

export function uncompleteTodo(todo) {
  return {
    type: UNCOMPLETE_TODO,
    payload: todo
  };
}
