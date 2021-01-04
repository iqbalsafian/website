import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

const Home: FunctionComponent = () => {
    return (
        <div>
            <Helmet>
                <title>Iqbal&apos;s Chronicle - Home</title>
                <meta name="description" content="Iqbal's Chronicle - the homepage" />
            </Helmet>
            <h1>Home</h1>
            <div className="name">Iqbal Safian</div>
            <div>Full-Stack Software Engineer/Developer/Researcher</div>
            <div>With 15 years ( + sleep + eat + wasting time ) of experience developing applications</div>
        </div>
    );
};

export default Home;
