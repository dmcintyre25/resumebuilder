import React from 'react';
import {
    Container,
    Segment,
    Form,
    Button,
    Grid,
    Header
} from 'semantic-ui-react';
import GoogleAuth from './GoogleAuth';

const RegisterPage = () => {
    return (
        <Container
            className='pageContainer loginContainer'
        >
            <Segment raised>
                <Header as='h2' textAlign='center'>
                    Register
                </Header>

                <Grid centered>
                    <Grid.Column width={5}>
                        <GoogleAuth />
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Form>
                            <Form.Field>
                                <label>E-Mail</label>
                                <input></input>
                            </Form.Field>

                            <Button type="submit">Login</Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Container>


    );
}

export default RegisterPage;