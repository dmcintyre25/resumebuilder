import React from 'react';
import { Segment, Responsive } from 'semantic-ui-react';
import Banner from './Banner';
import HomePageContent from './HomePageContent';

const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const HomePage = () => {
    return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
            <Segment
                textAlign='center'
                vertical
                inverted
            >
                <Banner />
            </Segment>
            <HomePageContent />

        </Responsive>
    );
}

export default HomePage;