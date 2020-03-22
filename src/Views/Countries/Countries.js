import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import UserInfo from './userInfo'
import AllCountries from './AllCountries'
import './countries.css'

class Countries extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <Container fixed>
               <Card className="UserHeader">
                    <h4> Users Page </h4>
               </Card>
               <Card className="UserInfo"> <UserInfo user={this.props.user} /> </Card>
               <AllCountries />
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.login.user,
    }
}


export default (connect(mapStateToProps, null)(Countries));