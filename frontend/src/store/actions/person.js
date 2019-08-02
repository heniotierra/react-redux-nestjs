export const addPerson = (person) => {
  return {
    type: 'ADD_PERSON',
    person,
  }
}

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

export const getPersons = () => {
  return {
    type: 'GET_PERSONS'
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
