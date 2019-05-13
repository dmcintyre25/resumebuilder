import React from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Segment
} from 'semantic-ui-react';


const ResumeCreate = () => {
    return (
        <Container className='pageContainer'>
            <Segment raised>
                <h2>Resume Create</h2>
            </Segment>
        </Container>


    );
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, null)(ResumeCreate);