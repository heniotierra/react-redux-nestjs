import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import PageTitle from '../commons/PageTitle';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import i18n from '../commons/i18n';
import { withTranslation } from 'react-i18next';
import AlertDialog from '../commons/AlertDialog';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as todoActions from '../store/actions/todo';

const mapDispatchToProps = (dispatch) => bindActionCreators(todoActions, dispatch);

const mapStateToProps = (state) => ({ 
  todos: state.todo.todos, 
  isLoading: state.todo.isLoading,
  successAlertOpen: state.todo.successAlertOpen,
  failAlertOpen: state.todo.failAlertOpen,
  persons: state.person.persons
});

const styles = theme => ({
  container: {
    height: '75%',
    minHeight: '75%'
  },
  button: {
    height: '35px'
  },
  list: {
    maxHeight: '25vw',
    minHeight: '25vw',
    height: '25vw',
    overflowY: 'scroll'
  }
});

class Todo {
  name = '';
  description = '';
  startDate = '';
}

class Todos extends React.PureComponent {

  state = {
    newTodo: new Todo()
  }

  constructor(props){
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
  }

  addTodo(){
    const personId = parseInt(this.props.match.params.id);
    const assignee = this.props.persons.filter((person) => parseInt(person.id)===personId)[0];
    this.props.addTodo(this.state.newTodo, assignee);
  }

  closeAlert(){
    this.props.closeAlert();
  }

  componentDidMount(){
    const personId = parseInt(this.props.match.params.id);
    this.props.getTodosByAssigneeId(personId);
  }

  render(){
    const { classes, t } = this.props;
    return (
      <React.Fragment>
        <Grid container 
          justify="center">
          <PageTitle text={t("to-dos")} />
        </Grid>
        <Grid container 
          justify="center">
          <Grid container 
            justify="center">
            <form>
              <TextField
                label={t("name")}
                id="margin-none"
                className={classes.textField}
                value={this.state.newTodo.name}
                onChange={(e) => this.setState({ 
                  newTodo: Object.assign({}, this.state.newTodo, { name: e.target.value }) 
                })}
                type="text"
                color="primary" />
              <TextField
                label={t("description")}
                id="margin-none"
                className={classes.textField}
                value={this.state.newTodo.description}
                onChange={(e) => this.setState({ 
                  newTodo: Object.assign({}, this.state.newTodo, { description: e.target.value }) 
                })}
                type="text"
                color="primary" />
              <TextField
                label={" "}
                id="margin-none"
                className={classes.textField}
                value={this.state.newTodo.date}
                onChange={(e) => this.setState({ 
                  newTodo: Object.assign({}, this.state.newTodo, { startDate: e.target.value }) 
                })}
                type="date"
                color="primary" />
              &nbsp;
              <Button 
                variant="contained" 
                color="primary" 
                className={classes.button} 
                disabled={this.props.isLoading}
                onClick={() => this.addTodo()}>
                {t("add-todo")}
              </Button>
            </form>
          </Grid>
          <Grid container 
            justify="center">
             <div className={classes.list}>
              <List>
              {this.props.todos.map((todo) => {
                return (
                  <ListItem>
                    {t("name")}: {todo.name};&nbsp;
                    {t("description")}: {todo.description};&nbsp;
                    {t("start-date")}: {todo.startDate}
                  </ListItem>
                );
              })}
              </List>
            </div>
          </Grid>
        </Grid>
        <AlertDialog 
          title=''
          open={this.props.successAlertOpen}
          description={t("added-todo")}
          onClose={this.closeAlert}
          closeLabel={t("close")} />
        <AlertDialog 
          title=''
          open={this.props.failAlertOpen}
          description={t("no-added-todo")}
          onClose={this.closeAlert}
          closeLabel={t("close")} />
      </React.Fragment>
    );
  }
  
}

Todos.propTypes = {
  classes: PropTypes.object
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    withTranslation()(
      withStyles(styles)(Todos)
    )
  )
);
