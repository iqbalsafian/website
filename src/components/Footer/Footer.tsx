import React, { FunctionComponent } from 'react';
import Icon from '../Icon';
import './Footer.scss';

const Footer: FunctionComponent = () => {
    return (
        <div className="footer-container">
            <ul>
                <li>Home</li>
                <li>Back</li>
                <li>Contact</li>
            </ul>
            <ul>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li>
                    <div>
                        <span className="icon-phone inverse" /> +60123692156
                    </div>
                    <div>
                        <span className="icon-mail inverse" /> iqbal.safian@gmail.com
                    </div>
                    <div>
                        <Icon iconType="globe" className="inverse" /> https://iqbal.one
                    </div>
                    <div>
                        <Icon iconType="skype" /> iqbal.one
                    </div>
                    <div>
                        <Icon iconType="github" /> github.com/iqbalsafian
                    </div>
                    <div>
                        <Icon iconType="linkedin" /> linkedin.com/in/iqbalsafian
                    </div>
                </li>
            </ul>
            <div className="text-center">
                Copyleft <span className="copy-left">&copy;</span> 2021 Iqbal Safian
            </div>
        </div>
    );
};

export default Footer;
