import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
    Container,
    Segment
} from 'semantic-ui-react';
import { signIn, signOut } from '../actions';

class Dashboard extends React.Component {

    render() {
        if (this.props.isSignedIn === null ||
            this.props.isSignedIn === false) {
            return <Redirect to='/' />;
        } else {
            return (
                <Container className='pageContainer'>
                    <Segment raised>
                        <h2>Dashboard</h2>
                    </Segment>
                </Container>


            );
        }
    }

}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(Dashboard);