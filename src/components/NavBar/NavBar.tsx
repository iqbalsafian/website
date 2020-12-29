import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

const NavBar: FunctionComponent = () => {
    return (
        <nav>
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
        </nav>
    );
};

export default NavBar;
