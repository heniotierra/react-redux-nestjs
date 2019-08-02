import { 
  takeLatest,
  put,
  all,
  call
} from 'redux-saga/effects';  
import { 
  post,
  get
} from '../apiComm';
import {
  todosResource,
  personsResource
} from '../constants';
import { 
  gettingTodos,
  gotTodos,
  noGotTodos,
  addingTodo,
  addedTodo,
  noAddedTodo
} from './actions/todo';
import { 
  gettingPersons,
  gotPersons,
  noGotPersons,
  addingPerson,
  addedPerson,
  noAddedPerson
} from './actions/person';

function* requestGetTodosByAssigneeId(action) {
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
  
function* requestAddTodo(action) {
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
  
function* requestGetPersons() {
  yield put(gettingPersons());
  try {
    const response = yield call(
      () => get(
        personsResource
      )
    );

    yield put(gotPersons(response.data));
  } catch (err) {
    yield put(noGotPersons());
  }
}
  
function* requestAddPerson(action) {
  yield put(addingPerson());
  try {
    const response = yield call(
      () => post(
        personsResource,
        action.person
      )
    );

    yield put(addedPerson(response.data));
  } catch (err) {
    yield put(noAddedPerson());
  }
}

export default function* root() {
  yield all([
    takeLatest('GET_TODOS_BY_ASSIGNEE_ID', requestGetTodosByAssigneeId),
    takeLatest('ADD_TODO', requestAddTodo),
    takeLatest('GET_PERSONS', requestGetPersons),
    takeLatest('ADD_PERSON', requestAddPerson),
  ]);
}