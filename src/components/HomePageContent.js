import React from 'react';
import {
    Segment,
    Grid,
    Header,
    Button,
    Image
} from 'semantic-ui-react';
import resume from '../media/resume.png';

const HomePageContent = () => {
    return (
        <Segment inverted style={{ padding: '8em 0em' }} vertical>
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
                        <Image bordered rounded size='medium' src={resume} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button size='huge'>Check Out Our Resume Templates</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

export default HomePageContent;