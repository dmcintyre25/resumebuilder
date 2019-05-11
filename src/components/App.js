import React from 'react';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';
import LoginPage from './LoginPage';
import FeaturePage from './FeaturePage';
import PricingPage from './PricingPage';
import Dashboard from './Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import './HomePage.css';



const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={HomePage} />
                    <Route path="/features" component={FeaturePage} />
                    <Route path="/pricing" component={PricingPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Footer />
                </div>
            </BrowserRouter>
        </div>

    );
}

export default App;