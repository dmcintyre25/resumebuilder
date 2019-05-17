import React from 'react';
import {
    Segment,
    Container,
    Grid,
    Header,
    List
} from 'semantic-ui-react';

const Footer = () => {


    return (
        <footer>
            <Segment
                inverted
                vertical
                className='footer'>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='About' />
                                <List link inverted>
                                    <List.Item as='a'>Sitemap</List.Item>
                                    <List.Item as='a'>Who We Are</List.Item>
                                    <List.Item as='a'>Contact Us</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Services' />
                                <List link inverted>
                                    <List.Item as='a'>ResumeBuilder FAQ</List.Item>
                                    <List.Item as='a'>Examples</List.Item>
                                    <List.Item as='a'>Features</List.Item>
                                    <List.Item as='a'>Pricing</List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </footer>
    );

}

export default Footer;