import React from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { Responsive, Segment } from 'semantic-ui-react';


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
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                {this.renderHeader()}
            </Responsive>
        );
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, null)(Header);