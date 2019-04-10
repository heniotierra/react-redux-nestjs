const initialState = {
  persons: [],
  isLoading: false,
  successAlertOpen: false,
  failAlertOpen: false
};
  
const person = (state = initialState, action) => {
    switch(action.type){
        case 'GOT_PERSONS':
            return Object.assign({}, state, {
                persons: action.persons
            });
        case 'NO_GOT_PERSONS':
            return Object.assign({}, state, {
                persons: []
            });
        case 'ADDING_PERSON':
            return Object.assign({}, state, {
                isLoading: true
            });
        case 'NO_ADDED_PERSON':
            return Object.assign({}, state, {
                isLoading: false,
                failAlertOpen: true
            });
        case 'ADDED_PERSON':
            return Object.assign({}, state, {
                isLoading: false,
                successAlertOpen: true,
                persons: [...state.persons, action.person]
            });
        case 'CLOSE_ALERT':
            return Object.assign({}, state, {
                successAlertOpen: false,
                failAlertOpen: false
            });
        default:
            return state;
    }
};

export default person;