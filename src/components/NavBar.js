import React from 'react';
import {
    Menu,
    Input,
    Button
} from 'semantic-ui-react';



class NavBar extends React.Component {

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <Menu inverted>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item
                    name='Features'
                    active={activeItem === 'features'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='pricing'
                    active={activeItem === 'pricing'}
                    onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Button color='grey'>Login</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button color='blue'>Sign Up</Button>
                    </Menu.Item>

                </Menu.Menu>
            </Menu>
        );
    }
}

export default NavBar;