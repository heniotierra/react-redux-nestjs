import { 
  takeLatest,
  all,
} from 'redux-saga/effects';
import {
  requestGetPersons,
  requestAddPerson
} from './person';  
import {
  requestGetTodosByAssigneeId,
  requestAddTodo
} from './todo';

export default function* root() {
  yield all([
    takeLatest('GET_PERSONS', requestGetPersons),
    takeLatest('ADD_PERSON', requestAddPerson),
    takeLatest('GET_TODOS_BY_ASSIGNEE_ID', requestGetTodosByAssigneeId),
    takeLatest('ADD_TODO', requestAddTodo),
  ]);
}