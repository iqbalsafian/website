import React, { FunctionComponent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import './NavBar.scss';

const NavBar: FunctionComponent = () => {
    const [utcDate, setUtcDate] = useState({});

    useEffect(() => {
        async function getUtcDate() {
            const result = await axios('http://worldclockapi.com/api/json/utc/now');
            setUtcDate(result);
            setUtcDate('2021-01-07T08:16Z');
        }

        getUtcDate();
    }, []);

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
                            <span className="block">{moment(utcDate).format('MMMM Do YYYY')}</span>
                            <span className="block">since 1983</span>
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
