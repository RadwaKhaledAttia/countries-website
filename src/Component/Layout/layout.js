import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';


class Layout extends Component {

    render() {
        let user = localStorage.getItem('user')
        return (
            user ?
                <Redirect from="/" to="/countries" />
                : <Redirect from="/" to="/login" />
        )
    }
}

export default Layout;
