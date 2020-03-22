import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import { LoginRequest } from '../../Redux/Action/LoginAction'
import LoginForm from './LoginForm'
import './Login.css'

class Login extends Component {


    getLogin = (data) => {
        this.props.LoginRequest(data)
    }

    render() {
        if (this.props.loginSuccess) {
            return (
                <Redirect to="/countries" />
            )
        }
        return (
            <Container fixed>
                <Card className="CardLogin">
                    <LoginForm
                        getLogin={this.getLogin}
                    />
                </Card>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        loginSuccess: state.login.loginSuccess,
    }
}
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        LoginRequest
    }
    , dispatch
)
export default (connect(mapStateToProps, mapDispatchToProps)(Login));