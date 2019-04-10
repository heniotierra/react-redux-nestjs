import { post, get } from '../apiComm';

const apiResourse = 'persons';

export const addingPerson = () => {
  return {
    type: 'ADDING_PERSON'
  }
}

export const addedPerson = (person) => {
  return {
    type: 'ADDED_PERSON',
    person
  }
}

export const noAddedPerson = () => {
  return {
    type: 'NO_ADDED_PERSON'
  }
}

export const closeAlert = () => {
  return {
    type: 'CLOSE_ALERT'
  }
}

export const gettingPersons = () => {
  return {
    type: 'GETTING_PERSONS'
  }
}

export const gotPersons = (persons) => {
  return {
    type: 'GOT_PERSONS',
    persons
  }
}

export const noGotPersons = () => {
  return {
    type: 'NO_GOT_PERSONS'
  }
}

export const getPersons = () => async (dispatch) => {
  dispatch(gettingPersons());
  const persons = await get(apiResourse);
  if (persons) 
    dispatch(gotPersons(persons));
  else 
    dispatch(noGotPersons());
}

export const addPerson = (newPerson) => async (dispatch) => {
  dispatch(addingPerson());
  const person = await post(apiResourse, newPerson);
  if (person) 
    dispatch(addedPerson(person));
  else 
    dispatch(noAddedPerson());
}
