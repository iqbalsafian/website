import React, { FunctionComponent, useState } from 'react';
import './HamburgerMenu.scss';

const HamburgerMenu: FunctionComponent = () => {
    const [displayType, setDisplayType] = useState('');

    const changeDisplayType = () => {
        displayType === '' ? setDisplayType('change') : setDisplayType('');
    };

    return (
        <div className={`container ${displayType}`} onClick={changeDisplayType}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
        </div>
    );
};

export default HamburgerMenu;
