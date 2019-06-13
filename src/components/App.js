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


const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route {...rest} render={(props) => (
        this.props.isSignedIn === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)

const App = () => {
    return (

        <BrowserRouter>
            <Header />
            <main>
                <Route path="/" exact component={HomePage} />
                <Route path="/features" component={FeaturePage} />
                <Route path="/pricing" component={PricingPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/resumes" exact component={ResumeList} />
                <PrivateRoute path="/resumes/create" exact component={ResumeCreate} />
            </main>
            <Footer />

        </BrowserRouter>


    );
}

export default App;