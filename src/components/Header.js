import React from 'react';
import NavBar from './NavBar';
import { Responsive, Segment } from 'semantic-ui-react';


const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const Header = () => {
    return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
            <Segment
                textAlign='center'
                vertical
                inverted
            >
                <NavBar />
            </Segment>
        </Responsive>
    );
}

export default Header;