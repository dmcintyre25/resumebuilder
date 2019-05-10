import React from 'react';
import { Segment, Responsive } from 'semantic-ui-react';
import NavBar from './NavBar';
import Banner from './Banner';
import HomePageContent from './HomePageContent';
import Footer from './Footer';

const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const App = () => {
    return (

        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
            <Segment
                textAlign='center'
                className='heading'
                vertical
                inverted
            >
                <NavBar />
                <Banner />
            </Segment>
            <HomePageContent />
            <Footer />

        </Responsive>


    );
}

export default App;