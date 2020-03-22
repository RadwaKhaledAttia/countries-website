import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from './Views/LoginPage/Login'
import Layout from './Component/Layout/layout'
import Countries from './Views/Countries/Countries'
import Country from './Views/CountryDetails/details'
import { LoginRequest } from './Redux/Action/LoginAction'
import './App.css';

class App extends Component {
  componentWillMount() {
    let user = localStorage.getItem('user')
    if (user) this.props.LoginRequest(JSON.parse(user))
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" name="Login Page" component={Login} />
          <Route path="/countries" name="countries" component={Countries} />
          <Route path="/country/:name" name="country details" component={Country} />
          <Route path="/" name="Layout" component={Layout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
      LoginRequest
  }
  , dispatch
)

export default (connect(null, mapDispatchToProps))(App);
