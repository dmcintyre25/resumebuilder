import PropTypes from 'prop-types'
import React, { Component } from 'react';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react';
import GoogleAuth from './GoogleAuth';
import './HomePage.css';
import person from '../media/person.png';
import person2 from '../media/person2.png';
import resume from '../media/resume.png';
import resume2 from '../media/resume2.png';

const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const HomepageHeading = ({ mobile }) => (
    <Grid>
        <Grid.Column width={8}>
            <Header
                as='h1'
                content='Resume Builder'
                inverted
                className={mobile ? 'homeHeading-m' : 'homeHeading'}
            />
            <Header
                as='h2'
                content='Make yourself shine with a professional resume.'
                inverted
                className={mobile ? 'homeSubheading-m' : 'homeSubheading'}
            />
            <Button primary size='huge'>
                Get Started
            <Icon name='right arrow' />
            </Button>
        </Grid.Column>
        <Grid.Column width={5}>
            <Image bordered rounded size='large' src={person2} />
        </Grid.Column>
    </Grid>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        textAlign='center'
                        className='heading'
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Menu.Item as='a' active>
                                    Home
                                </Menu.Item>
                                <Menu.Item as='a'>Features</Menu.Item>
                                <Menu.Item as='a'>Pricing</Menu.Item>
                                <Menu.Item position='right'>

                                    <Button as='a' inverted={!fixed}>
                                        Log in
                    </Button>
                                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                                        Sign Up
                    </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                        <HomepageHeading />
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}


const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}



const HomepageLayout = () => (
    <ResponsiveContainer>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Stand Out From The Rest
              </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Don't get lost in the numerous applications to the job you want.  Have a professional resume that will make the recruiters pause and consider you.
              </p>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Get The Interview
              </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            You may be the best candidate for the job, but you can't show them that unless you get to the interview.  Our resume designs are tailored to make sure you are they one they call.
              </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
                        <Image bordered rounded size='medium' src={resume} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button size='huge'>Check Out Our Resume Templates</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            "What a Company"
              </Header>
                        <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                    </Grid.Column>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            "I shouldn't have gone with their competitor."
              </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            <i aria-hidden="true" class="teal users circular inverted icon"></i>
                            <b>Nan</b> Chief Fun Officer Acme Toys
              </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Breaking The Grid, Grabs Your Attention
          </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Instead of focusing on content creation and hard work, we have learned how to master the
                    art of doing nothing by providing massive amounts of whitespace and generic content that
                    can seem massive, monolithic and worth your attention.
          </p>
                <Button as='a' size='large'>
                    Read More
          </Button>
                <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                >
                    <a href='#'>Case Studies</a>
                </Divider>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Did We Tell You About Our Bananas?
          </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
                    it's really true. It took years of gene splicing and combinatory DNA research, but our
                    bananas can really dance.
          </p>
                <Button as='a' size='large'>
                    I'm Still Quite Interested
          </Button>
            </Container>
        </Segment>
        <Segment
            inverted
            vertical
            className='footer'>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='About' />
                            <List link inverted>
                                <List.Item as='a'>Sitemap</List.Item>
                                <List.Item as='a'>Contact Us</List.Item>
                                <List.Item as='a'>Religious Ceremonies</List.Item>
                                <List.Item as='a'>Gazebo Plans</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Services' />
                            <List link inverted>
                                <List.Item as='a'>Banana Pre-Order</List.Item>
                                <List.Item as='a'>DNA FAQ</List.Item>
                                <List.Item as='a'>How To Access</List.Item>
                                <List.Item as='a'>Favorite X-Men</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' inverted>
                                Footer Header
                </Header>
                            <p>
                                Extra space for a call to action inside the footer that could help re-engage users.
                </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </ResponsiveContainer>
)


export default HomepageLayout;