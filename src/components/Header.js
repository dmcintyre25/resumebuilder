import React from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { Responsive, Segment } from 'semantic-ui-react';
import { signIn, signOut } from '../actions';


const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class Header extends React.Component {

    renderHeader() {
        if (this.props.isSignedIn) {
            return (
                <Segment
                    textAlign='center'
                    vertical
                // className='dashboardNav'
                >
                    <NavBar />
                </Segment>
            )
        } else {
            return (
                <Segment
                    textAlign='center'
                    vertical
                    inverted
                >
                    <NavBar />
                </Segment>
            )
        }
    }

    render() {
        return (
            <header>
                <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                    {this.renderHeader()}
                </Responsive>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn, auth: state.auth };
}

export default connect(mapStateToProps, { signIn, signOut })(Header);