import React, { FunctionComponent, useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { getNews } from '../../redux/actions';
import './RightPanel.scss';

interface theNews {
    title: string;
    urlToImage: string;
    description: string;
    url: string;
}

const RightPanel: FunctionComponent = () => {
    const news = useSelector((state: RootStateOrAny) => state.news);
    const allState = useSelector((state: RootStateOrAny) => state);

    useEffect(() => {
        getNews();
        console.log(allState);
    }, []);

    return (
        <div>
            <h3 className="title">
                <span className="icon-rss" />
                &#8287; Flash News
            </h3>
            {news?.map((theNews: theNews) => {
                <article>
                    <div>
                        <h1>{theNews.title}</h1>
                        <img className="imgStyle" src={theNews.urlToImage} alt="" />
                        <h4>{theNews.description}</h4>
                        <a href={theNews.url} target="_blank" rel="noreferrer">
                            READ MORE
                        </a>
                    </div>
                </article>;
            })}
        </div>
    );
};

export default RightPanel;
