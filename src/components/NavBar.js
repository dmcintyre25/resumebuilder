import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
    Menu,
    Button,
    Icon
} from 'semantic-ui-react';
import { signIn, signOut } from '../actions';



class NavBar extends React.Component {

    state = { name: '' }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '756987404347-a3i1shq28f8s79pf0cepn587gdsf52h7.apps.googleusercontent.com',
                scope: 'profile email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }


    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
            this.setState({ name: this.auth.currentUser.get().getBasicProfile().getName() });
        } else {
            this.props.signOut();
            this.props.history.push("/");
        }
    };

    onSignOutClick = () => {
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
                            Welcome {this.state.name}
                        </Menu.Item>
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
    return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
}

export default connect(mapStateToProps, { signIn, signOut })(withRouter(NavBar));