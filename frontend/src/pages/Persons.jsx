import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PageTitle from '../commons/PageTitle';
import i18n from '../commons/i18n';
import { withTranslation } from 'react-i18next';
import AlertDialog from '../commons/AlertDialog';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as personActions from '../actions/person';

const mapDispatchToProps = (dispatch) => bindActionCreators(personActions, dispatch);

const mapStateToProps = (state) => ({ 
  persons: state.person.persons, 
  isLoading: state.person.isLoading,
  successAlertOpen: state.person.successAlertOpen,
  failAlertOpen: state.person.failAlertOpen
});

const styles = (theme) => ({
  container: {
    height: '75%',
    minHeight: '75%'
  },
  list: {
    maxHeight: '25vw',
    minHeight: '25vw',
    height: '25vw',
    overflowY: 'scroll'
  }
});

export class Person {
  name = '';
}

class Persons extends React.Component {

  state = {
    newPerson: new Person()
  }

  constructor(props){
    super(props);
    this.addPerson = this.addPerson.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
    this.gotoTodos = this.gotoTodos.bind(this);
  }

  addPerson(e){
    this.props.addPerson(this.state.newPerson);
    e.preventDefault();
  }

  closeAlert(){
    this.props.closeAlert();
  }

  componentDidMount(){
    this.props.getPersons();
  }

  gotoTodos(personId){
    this.props.history.push(`/todos/${personId}`);
  }

  render(){
    const { classes, t } = this.props;
    return (
      <React.Fragment>
        <Grid container 
          justify="center">
          <PageTitle text={t("persons")} />
        </Grid>
        <Grid container 
          justify="center"
          className={classes.scrolledContentWrapper}>
          <Grid container 
            justify="center"
            className={classes.inputGrid}>
            <form onSubmit={(e) => this.addPerson(e)}>
              <TextField
                label={t("name")}
                id="person-name"
                value={this.state.newPerson.name}
                onChange={(e) => this.setState({ 
                  newPerson: Object.assign({}, this.state.newPerson, { name: e.target.value }) 
                })}
                type="text"
                color="primary" 
                required />
              &nbsp;
              <Button variant="contained" color="primary" className={classes.button} type="submit" disabled={this.props.isLoading}>
                {t("add-person")}
              </Button>
            </form>
          </Grid>
          <Grid container 
            justify="center">
            <div className={classes.list}>
              <List>
              {this.props.persons.map((person) => {
                return (
                  <ListItem>
                    {person.name} <Button onClick={() => this.gotoTodos(person.id)}>{t('to-dos')}</Button>
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
          description={t("added-person")}
          onClose={this.closeAlert}
          closeLabel={t("close")} />
        <AlertDialog 
          title=''
          open={this.props.failAlertOpen}
          description={t("no-added-person")}
          onClose={this.closeAlert}
          closeLabel={t("close")} />
      </React.Fragment>
    );
  }
  
}

Persons.propTypes = {
  classes: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withStyles(styles)(Persons)));