import React, { FunctionComponent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import './NavBar.scss';

interface IUtcDate {
    currentDateTime: string;
}

interface IRandomQuote {
    quoteText: string;
}

const NavBar: FunctionComponent = () => {
    const [utcDate, setUtcDate] = useState<IUtcDate | null>(null);
    const [randomQuote, setRandomQuote] = useState<IRandomQuote | null>(null);

    useEffect(() => {
        const getUtcDate = async (): Promise<void> => {
            return await axios.get<IUtcDate>('http://worldclockapi.com/api/json/utc/now').then((response) => {
                setUtcDate(response?.data);
            });
        };
        getUtcDate();
    }, []);

    useEffect(() => {
        const getRandomQuote = async (): Promise<void> => {
            return await axios
                .get<IRandomQuote>('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
                .then((response) => {
                    setRandomQuote(response?.data);
                    console.log(response?.data);
                })
                .catch((err) => console.log(err));
        };
        getRandomQuote();
    }, []);

    return (
        <div>
            <div className="header container">
                <div className="row">
                    <div className="col-sm-2">
                        <div className="quote">
                            {randomQuote?.quoteText}
                            <span className="block">a</span>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <h1>Iqbal&apos;s Chronicle</h1>
                    </div>
                    <div className="col-sm-2">
                        <div className="dates">
                            <span className="block">{moment(utcDate?.currentDateTime).format('MMMM Do YYYY')}</span>
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
