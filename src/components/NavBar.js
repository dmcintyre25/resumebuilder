import React from 'react';
import { Link } from 'react-router-dom';
import {
    Menu,
    Button,
    Icon
} from 'semantic-ui-react';



class NavBar extends React.Component {

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    renderMenu() {
        const { activeItem } = this.state
        if (this.props.isSignedIn === null) {
            console.log('NULL!!');
            return null;
        } else if (this.props.isSignedIn) {
            console.log('SIGNED IN');
            return (
                <Menu
                    inverted
                    pointing
                    size='large'
                >
                    <Menu.Item>
                        <Icon name="briefcase" />
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
                    <Menu.Item
                        as={Link} to='/dashboard'
                        name='dashboard'
                        active={activeItem === 'dashboard'}
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
        } else {
            console.log('SIGNED OUT');
            return (
                <Menu
                    inverted
                    pointing
                    size='large'
                >
                    <Menu.Item>
                        <Icon name="briefcase" />
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
                    <Menu.Item
                        as={Link} to='/dashboard'
                        name='dashboard'
                        active={activeItem === 'dashboard'}
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
        }
    }

    render() {
        const { activeItem } = this.state
        return (
            <div>{this.renderMenu()}</div>
        );
    }
}

export default NavBar;