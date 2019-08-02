export const addTodo = (todo, assignee) => {
  return {
    type: 'ADD_TODO',
    todo,
    assignee,
  }
}

export const getTodosByAssigneeId = (id) => {
  return {
    type: 'GET_TODOS_BY_ASSIGNEE_ID',
    id,
  }
}

export const addingTodo = () => {
  return {
    type: 'ADDING_TODO',
  }
}

export const addedTodo = (todo) => {
  return {
    type: 'ADDED_TODO',
    todo,
  }
}

export const noAddedTodo = () => {
  return {
    type: 'NO_ADDED_TODO',
  }
}

export const closeAlert = () => {
  return {
    type: 'CLOSE_ALERT',
  }
}

export const gettingTodos = () => {
  return {
    type: 'GETTING_TODOS',
  }
}

export const gotTodos = (todos) => {
  return {
    type: 'GOT_TODOS',
    todos,
  }
}

export const noGotTodos = () => {
  return {
    type: 'NO_GOT_TODOS',
  }
}
