import React from 'react';
import { Link } from 'react-router-dom';
import {
    Grid,
    Header,
    Button,
    Icon,
    Image,
    Segment
} from 'semantic-ui-react';
import person2 from '../media/person2.png';

const Banner = () => {
    return (
        <Segment
            textAlign='center'
            className='heading'
            vertical
            inverted
        >
            <Grid centered>
                <Grid.Column width={8}>
                    <Header
                        as='h1'
                        content='Resume Builder'
                        inverted
                        className='homeHeading'
                    />
                    <Header
                        as='h2'
                        content='Make yourself shine with a professional resume.'
                        inverted
                        className='homeSubheading'
                    />
                    <Button size='huge'>
                        <Link to="/register">Get Started</Link>
                        <Icon name='right arrow' />
                    </Button>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image bordered rounded size='large' src={person2} />
                </Grid.Column>
            </Grid>
        </Segment>
    );
}

export default Banner;