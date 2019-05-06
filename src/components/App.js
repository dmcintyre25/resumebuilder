import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import HomePage from './HomePage';
import Footer from './Footer';


const App = () => {
    return (
        <Container fluid>
            <NavBar />
            <HomePage />
            <Footer />
        </Container>

    );
}

export default App;