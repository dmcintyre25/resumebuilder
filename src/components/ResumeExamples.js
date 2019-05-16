import React from 'react';
import {
    Segment,
    Grid,
    Image,
    Header
} from 'semantic-ui-react';
import resume from '../media/resume.png';

const ResumeExamples = () => {
    return (
        <Segment className='homepageSection' vertical centered>
            <Grid container stackable centered verticalAlign='middle' columns={4}>
                <Grid.Row centered>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                        See our Resume Templates
              </Header>
                </Grid.Row>
                <Grid.Column>
                    <Image bordered rounded size='large' src={resume} />
                </Grid.Column>
                <Grid.Column>
                    <Image bordered rounded size='large' src={resume} />
                </Grid.Column>
                <Grid.Column>
                    <Image bordered rounded size='large' src={resume} />
                </Grid.Column>
                <Grid.Column>
                    <Image bordered rounded size='large' src={resume} />
                </Grid.Column>


                <Grid.Column>
                    <Image bordered rounded size='large' src={resume} />
                </Grid.Column>
                <Grid.Column>
                    <Image bordered rounded size='large' src={resume} />
                </Grid.Column>
                <Grid.Column>
                    <Image bordered rounded size='large' src={resume} />
                </Grid.Column>
                <Grid.Column>
                    <Image bordered rounded size='large' src={resume} />
                </Grid.Column>

            </Grid>
        </Segment >
    );
}

export default ResumeExamples;