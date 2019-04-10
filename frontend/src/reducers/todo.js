const initialState = {
    todos: [],
    isLoading: false,
    successAlertOpen: false,
    failAlertOpen: false
  };
    
  const todo = (state = initialState, action) => {
      switch(action.type){
          case 'GOT_TODOS':
              return Object.assign({}, state, {
                todos: [...action.todos]
              });
          case 'NO_GOT_TODOS':
              return Object.assign({}, state, {
                todos: []
              });
          case 'ADDING_TODO':
              return Object.assign({}, state, {
                  isLoading: true
              });
          case 'NO_ADDED_TODO':
              return Object.assign({}, state, {
                  isLoading: false,
                  failAlertOpen: true
              });
          case 'ADDED_TODO':
              return Object.assign({}, state, {
                  isLoading: false,
                  successAlertOpen: true,
                  todos: [...state.todos, action.todo]
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
  
  export default todo;