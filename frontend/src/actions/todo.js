import { post, get } from '../apiComm';

const apiResourse = 'todos';

export const addingTodo = () => {
  return {
    type: 'ADDING_TODO'
  }
}

export const addedTodo = (todo) => {
  return {
    type: 'ADDED_TODO',
    todo
  }
}

export const noAddedTodo = () => {
  return {
    type: 'NO_ADDED_TODO'
  }
}

export const closeAlert = () => {
  return {
    type: 'CLOSE_ALERT'
  }
}

export const gettingTodos = () => {
  return {
    type: 'GETTING_TODOS'
  }
}

export const gotTodos = (todos) => {
  return {
    type: 'GOT_TODOS',
    todos
  }
}

export const noGotTodos = () => {
  return {
    type: 'NO_GOT_TODOS'
  }
}

export const getTodosByAssigneeId = (assigneeId) => async (dispatch) => {
  dispatch(gettingTodos());
  const todos = await get(`${apiResourse}/assignee/${assigneeId}`);
  if (todos) 
    dispatch(gotTodos(todos));
  else 
    dispatch(noGotTodos());
}

export const addTodo = (newTodo, assignee) => async (dispatch) => {
  dispatch(addingTodo());
  const todo = await post(apiResourse, {...newTodo, assignee});
  if (todo) 
    dispatch(addedTodo(todo));
  else 
    dispatch(noAddedTodo());
}