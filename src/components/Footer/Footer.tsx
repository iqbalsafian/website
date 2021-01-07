import React, { FunctionComponent } from 'react';
import './Footer.scss';

const Footer: FunctionComponent = () => {
    return (
        <div className="footer-container">
            <ul>
                <li>Home</li>
                <li>Back</li>
            </ul>
            <div className="text-center">
                Copyleft <span className="copy-left">&copy;</span> 2021 Iqbal Safian
            </div>
        </div>
    );
};

export default Footer;
