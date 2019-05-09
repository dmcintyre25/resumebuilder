import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import HomePageLayout from './HomePageLayout';
import Footer from './Footer';


const App = () => {
    return (
        <Container fluid>
            <HomePageLayout />
        </Container>

    );
}

export default App;