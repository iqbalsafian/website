import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import JobHistory from './components/JobHistory';
import NavBar from './components/NavBar';
import RightPanel from './components/RightPanel';
import Footer from './components/Footer';
import './App.scss';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <HelmetProvider>
                <div className="App">
                    <NavBar />
                    <div className="pt10">
                        <div className="row">
                            <div className="col-sm-12 col-md-9 col-lg-9 main-content">
                                <Switch>
                                    <Route path="/about-me">
                                        <AboutMe />
                                    </Route>
                                    <Route path="/job-history">
                                        <JobHistory />
                                    </Route>
                                    <Route path="/">
                                        <Home />
                                    </Route>
                                </Switch>
                            </div>
                            <div className="col-sm-hidden col-md-3 col-lg-3">
                                <RightPanel />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </HelmetProvider>
        </BrowserRouter>
    );
};

export default App;
