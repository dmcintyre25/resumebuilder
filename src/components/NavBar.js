import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Menu,
    Button,
    Icon
} from 'semantic-ui-react';
import { signIn, signOut } from '../actions';



class NavBar extends React.Component {

    state = {}

    onSignOutClick = () => {
        this.props.signOut();
        this.auth.signOut();
    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    renderMenu() {
        const { activeItem } = this.state
        if (this.props.isSignedIn === null ||
            this.props.isSignedIn === false) {
            return (
                <Menu
                    inverted
                    pointing
                    size='large'
                >
                    <Menu.Item>
                        <Icon name="briefcase" className="resumeIcon" />
                    </Menu.Item>
                    <Menu.Item
                        as={Link} to='/'
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick} />
                    <Menu.Item
                        as={Link} to='/features'
                        name='features'
                        active={activeItem === 'features'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        as={Link} to='/pricing'
                        name='pricing'
                        active={activeItem === 'pricing'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item
                            as={Link} to='/login'
                        >
                            <Button color='grey'>Login</Button>
                        </Menu.Item>
                        <Menu.Item
                            as={Link} to='/login'
                        >
                            <Button color='blue'>Sign Up</Button>
                        </Menu.Item>

                    </Menu.Menu>
                </Menu>
            );
        } else if (this.props.isSignedIn) {
            return (
                <Menu
                    pointing
                    size='large'

                >
                    <Menu.Item>
                        <Icon name="briefcase" className="resumeIcon" />
                    </Menu.Item>
                    <Menu.Item
                        as={Link} to='/dashboard'
                        name='dashboard'
                        active={activeItem === 'dashboard'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        as={Link} to='/resumes'
                        name='resumes'
                        active={activeItem === 'resumes'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        as={Link} to='/resumes/create'
                        name='create'
                        active={activeItem === 'create'}
                        onClick={this.handleItemClick}
                    >
                        <Icon name="plus" />
                        Create
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button color='red' onClick={this.onSignOutClick} className="ui red google button">Logout</Button>
                        </Menu.Item>

                    </Menu.Menu>
                </Menu>
            );
        }
    }

    render() {
        //const { activeItem } = this.state
        return (
            <div>{this.renderMenu()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn, auth: state.auth };
}

export default connect(mapStateToProps, { signIn, signOut })(NavBar);