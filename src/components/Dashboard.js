import React from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Segment
} from 'semantic-ui-react';
import { signIn, signOut } from '../actions';

const Dashboard = () => {
    return (
        <Container className='pageContainer'>
            <Segment raised>
                <h2>Dashboard</h2>

            </Segment>
        </Container>


    );
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(Dashboard);