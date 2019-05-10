import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import NavBar from './NavBar';
import Banner from './Banner';
import HomePageContent from './HomePageContent';
import HomePageLayout from './HomePageLayout';
import Footer from './Footer';


const App = () => {
    return (
        <Container fluid>
            <Segment
                textAlign='center'
                className='heading'
                vertical
            >
                <NavBar />
                <Banner />
                <HomePageContent />
                <Footer />
            </Segment>
        </Container>
    );
}

export default App;