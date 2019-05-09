import React from 'react';
import { Menu } from 'semantic-ui-react';

class NavBar extends React.Component {

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;
        return (
            <Menu>
                <Menu.Item
                    name='resume'
                    active={activeItem === 'resume'}
                    onClick={this.handleItemClick}
                >
                    Resume Builder
                </Menu.Item>

                <Menu.Item name='features' active={activeItem === 'features'} onClick={this.handleItemClick}>
                    Features
                </Menu.Item>

                <Menu.Item
                    name='pricing'
                    active={activeItem === 'pricing'}
                    onClick={this.handleItemClick}
                >
                    Pricing
                </Menu.Item>
                <Menu.Item
                    name='login'
                    active={activeItem === 'login'}
                    onClick={this.handleItemClick}
                >
                    Login
                </Menu.Item>
            </Menu>
        );
    }
}

export default NavBar;