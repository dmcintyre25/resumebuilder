import React from 'react';
import {
    Segment,
    Grid,
    Header,
    Icon
} from 'semantic-ui-react';

const ResumeSteps = () => {
    return (
        <Segment className='homepageSection' vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Stand Out From The Rest
              </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Don't get lost in the numerous applications to the job you want.  Have a professional resume that will make the recruiters pause and consider you.
              </p>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Get The Interview
              </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            You may be the best candidate for the job, but you can't show them that unless you get to the interview.  Our resume designs are tailored to make sure you are they one they call.
              </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
                        <Grid.Column textAlign='center'>
                            <Header as='h2' style={{ fontSize: '2em' }}>
                                Step 1 <Icon name="info" color='blue' />
                            </Header>
                            <p>Upload your resume and/or information.</p>
                            <Header as='h2' style={{ fontSize: '2em' }}>
                                Step 2 <Icon name="file alternate" color='blue' />
                            </Header>
                            <p>Pick a resume template.</p>
                            <Header as='h2' style={{ fontSize: '2em' }}>
                                Step 3 <Icon name="download" color='blue' />
                            </Header>
                            <p>Print or download your professional resume.</p>
                        </Grid.Column>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment >

    );
}

export default ResumeSteps;