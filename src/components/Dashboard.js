import React from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Segment
} from 'semantic-ui-react';
import { signIn, signOut } from '../actions';

class Dashboard extends React.Component {

    render() {
        return (
            <Container className='pageContainer'>
                <Segment raised>
                    <h2>Dashboard</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut semper metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam nunc libero, scelerisque et laoreet ac, viverra sit amet nisi. Integer mollis elementum urna, quis cursus metus pulvinar aliquam. Etiam fringilla arcu dui, sit amet semper massa volutpat eget. Duis leo nisi, ultricies vel convallis id, interdum vel nisi. Donec dapibus, metus non pretium lacinia, augue ante varius mauris, vitae luctus nulla nulla in risus. Pellentesque condimentum elit ligula, in ultricies sapien pretium in. Sed volutpat turpis eu leo tempor commodo. Maecenas auctor mauris non ultricies eleifend.

Proin porttitor enim at mauris porttitor efficitur eu non orci. Praesent blandit tempor velit, sed rutrum urna sollicitudin bibendum. Curabitur hendrerit sollicitudin magna a pulvinar. Nullam tincidunt dignissim quam, rhoncus fermentum odio dapibus vel. Mauris vestibulum vehicula neque vel viverra. Cras luctus finibus elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque consectetur leo lorem, in viverra leo cursus a. Nam sed varius neque. Curabitur scelerisque rutrum nisl, quis malesuada velit malesuada nec. Donec luctus quam erat. Etiam at euismod elit. Nam lacinia nisi sit amet commodo convallis.

Donec cursus arcu vel erat elementum lacinia. Mauris maximus ultricies auctor. Sed congue posuere lorem. In hac habitasse platea dictumst. Nam nec mauris nec velit suscipit auctor quis at neque. Aenean ac ultricies libero. Aliquam molestie dapibus sagittis. Vestibulum a libero a leo elementum blandit eu interdum lacus. Integer quis dolor blandit ex dignissim placerat ac sed turpis.

Sed gravida augue ac nunc sodales sollicitudin. Morbi vehicula, arcu ut tempus congue, arcu sem euismod tortor, vel efficitur justo dui tincidunt mauris. Ut dolor mi, molestie et purus et, lobortis hendrerit purus. Nulla at nisl et metus eleifend rutrum. Mauris sit amet euismod ligula. Proin varius eros a turpis tempus consequat. Aliquam ornare nulla quam, vel hendrerit nibh maximus eu. Vestibulum placerat lacinia felis tincidunt vulputate. Duis id neque ac lectus dignissim fermentum. Aenean auctor semper ullamcorper. Proin auctor condimentum nulla, id iaculis arcu vulputate at. Aenean mattis consequat turpis. Nam placerat tempor odio, at gravida metus tincidunt non. Donec in lacinia lorem, id venenatis lacus. Cras viverra est ut dolor tempus, a lacinia nisl elementum. In dictum nisl vitae velit dapibus, non interdum odio laoreet.
                        </p>
                </Segment>
            </Container>


        );
    }

}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(Dashboard);