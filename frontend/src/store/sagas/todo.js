import {
    put,
    call,
  } from 'redux-saga/effects';  
  import { 
    post,
    get,
  } from '../../apiComm';
  import {
    todosResource,
  } from '../../constants';
  import { 
    gettingTodos,
    gotTodos,
    noGotTodos,
    addingTodo,
    addedTodo,
    noAddedTodo,
  } from '../actions/todo';

export function* requestGetTodosByAssigneeId(action) {
    yield put(gettingTodos());
    try {
      const response = yield call(
        () => get(
          `${todosResource}/assignee/${action.id}`
        )
      );
     
      yield put(gotTodos(response.data));
    } catch (err) {
      yield put(noGotTodos());
    }
  }
    
export function* requestAddTodo(action) {
    yield put(addingTodo());
    try {
      const response = yield call(
        () => post(
          todosResource, 
          {
              ...action.todo,
              assignee: action.assignee, 
          }
        )
      );
  
      yield put(addedTodo(response.data));
    } catch (err) {
      yield put(noAddedTodo());
    }
  }