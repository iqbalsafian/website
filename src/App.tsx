import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar';
import RightPanel from './components/RightPanel';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <div className="container pt10">
                    <div className="row">
                        <div className="col-sm-9 main-content">
                            <Switch>
                                <Route path="/about-me">
                                    <AboutMe />
                                </Route>
                                <Route path="/">
                                    <Home />
                                </Route>
                            </Switch>
                        </div>
                        <div className="col-sm-3">
                            <RightPanel />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
