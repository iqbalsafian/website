import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import './Home.scss';

const Home: FunctionComponent = () => {
    return (
        <div>
            <Helmet>
                <title>Iqbal&apos;s Chronicle - Home</title>
                <meta name="description" content="Iqbal's Chronicle - the homepage" />
            </Helmet>
            <h2>A full-stack software engineer is looking for a career, not only for a job change</h2>
            <div className="multi-column">
                <p>
                    New year celebration brings new idea to this man, Iqbal who is looking for job change. He recently
                    quit his job to get back on developing business and corporate application which has been his passion
                    for the past 14 years in the industry.
                </p>
                <p>
                    &quot;I have worked for various of fields and domains in differentc companies but my passion has
                    always been developing applications with latest technologies&quot;, said Iqbal.
                </p>
                <p>
                    He began his career in ICT industry back in December 2004, 3 days before the deadliest Tsunami ever
                    recorded in history that hit 3 ASEAN countries other than India.
                </p>
                <p>
                    The first company that he worked for was among the first companies that managed to obtain MSC
                    (Multi-media Super Corridor) status from the governement of Malaysia. The company called VirtualLink
                    Solutions (M) Pte Ltd that partnered with various governement agencies and lot of private sectors.
                </p>
                <p>
                    In the company, who was tasked to create Fixed Asset Management System that was based on both web
                    and handheld device for Windows CE. It was using .Net framework coupled with Adobe ColdFusion (aka)
                    Macromedia ColdFusion and was enhanced with the help of plain vanilla JavaScript.
                </p>
                <p>
                    &quot;There was no Front-End, Back-End as well as Full-Stack terms at the time as we were all just
                    use software developer or software engineer for our title. We were all all-rounders and sometimes we
                    did dev-ops stuff too.
                </p>
                <p>
                    &quot;Also I first learned about mobile development technologies starting from 2005 and it was a bit
                    challenging because everything has to be compressed not only because of to fit the small screen
                    size, but also mobile data was really expensive at the time, 5MB of data would definitely cost you
                    for about USD1, plus all design had to comply with class-10 requirements.&quot;, according to him.
                </p>
            </div>
        </div>
    );
};

export default Home;
