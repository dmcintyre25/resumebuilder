import React from 'react';
import { connect } from 'react-redux';
//import { Redirect } from 'react-router-dom';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {


    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '756987404347-a3i1shq28f8s79pf0cepn587gdsf52h7.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth);
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();

    };

    onSignOutClick = () => {
        this.auth.signOut();
    };



    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            // return <Redirect to='/dashboard' />;
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui green google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn, auth: state.auth };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);