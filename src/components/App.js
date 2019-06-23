import React from 'react';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import FeaturePage from './FeaturePage';
import PricingPage from './PricingPage';
import ResumeCreate from './resume/ResumeCreate';
import ResumeList from './resume/ResumeList';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './HomePage.css';

import { connect } from 'react-redux';


const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route {...rest} render={(props) => (
        rest.isSignedIn === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)

class App extends React.Component {

    componentDidMount() {
        console.log("HIHI");
    }

    componentDidUpdate() {
        console.log("UPDATE!!");
        console.log(this.props.isSignedIn);
    }

    render() {
        return (

            <BrowserRouter>
                <Header />
                <main>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/features" component={FeaturePage} />
                    <Route path="/pricing" component={PricingPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <PrivateRoute path="/dashboard" exact component={Dashboard} isSignedIn={this.props.isSignedIn} />
                    <PrivateRoute path="/resumes" exact component={ResumeList} isSignedIn={this.props.isSignedIn} />
                    <PrivateRoute path="/resumes/create" exact component={ResumeCreate} isSignedIn={this.props.isSignedIn} />
                </main>
                <Footer />

            </BrowserRouter>
        );
    }
}

//export default App;

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(App);