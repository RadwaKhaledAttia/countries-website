import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Data from './countryData'

class Country extends Component {

    render() {
        return (
            <Container fixed>
                <Card className="UserHeader">
                    <h4> Country AD </h4>
                </Card>
                <Card className="UserInfo">
                    <Data data={this.props.location.state.country} />
                </Card>
            </Container>
        );
    }
}

export default Country;