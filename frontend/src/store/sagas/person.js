import { 
    put,
    call,
  } from 'redux-saga/effects';  
  import { 
    post,
    get,
  } from '../../apiComm';
  import {
    personsResource,
  } from '../../constants';
  import { 
    gettingPersons,
    gotPersons,
    noGotPersons,
    addingPerson,
    addedPerson,
    noAddedPerson,
  } from '../actions/person';

export function* requestGetPersons() {
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
    
export function* requestAddPerson(action) {
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