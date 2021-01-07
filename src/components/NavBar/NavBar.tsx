import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar: FunctionComponent = () => {
    return (
        <div>
            <div className="header container">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h1>Iqbal&apos;s Chronicle</h1>
                    </div>
                    <div className="col-sm-2">
                        <div className="dates">
                            <span>since 1983</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar">
                <aside>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-me">About Me</NavLink>
                        </li>
                        <li>
                            <NavLink to="/job-history">Job History</NavLink>
                        </li>
                        <li>
                            <NavLink to="/works">Works</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default NavBar;
