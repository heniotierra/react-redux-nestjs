import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './commons/history';
import MainWrapper from './containers/MainWrapper';

import Persons from './pages/Persons';
import Todos from './pages/Todos';

import store from './store/store';
import { Provider } from 'react-redux';

class App extends React.Component {

  render(){
    return (
      <Provider store={store}>    
        <MainWrapper>
          <Router history={history}>
            <Switch>
              <Route path="/" exact component={Persons}/>
              <Route path="/persons" component={Persons}/>
              <Route path="/todos/:id" component={Todos}/>
            </Switch>
          </Router>
        </MainWrapper>
      </Provider>
    );
  }
  
}

export default App;