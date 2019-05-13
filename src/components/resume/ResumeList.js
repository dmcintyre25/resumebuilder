import React from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Segment
} from 'semantic-ui-react';


const ResumeList = () => {
    return (
        <Container className='pageContainer'>
            <Segment raised>
                <h2>Resume List</h2>
            </Segment>
        </Container>


    );
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, null)(ResumeList);