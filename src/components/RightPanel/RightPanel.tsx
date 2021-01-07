import React, { FunctionComponent } from 'react';
import './RightPanel.scss';

const RightPanel: FunctionComponent = () => {
    return (
        <div>
            <h3 className="title">
                <span className="icon-rss" />
                &#8287; Flash News
            </h3>
        </div>
    );
};

export default RightPanel;
