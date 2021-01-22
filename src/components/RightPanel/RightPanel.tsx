import React, { FunctionComponent, useEffect } from 'react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
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
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNews());
        console.log('all news', news);
    }, []);

    return (
        <div>
            <h3 className="title">
                <span className="icon-rss" />
                &#8287; Flash News
            </h3>
            {news?.map((theNews: theNews) => {
                return (
                    <article key={theNews.title}>
                        <div>
                            <h4>{theNews.title}</h4>
                            <img className="imgStyle" src={theNews.urlToImage} alt="" />
                            <h4>{theNews.description}</h4>
                            <a href={theNews.url} target="_blank" rel="noreferrer">
                                READ MORE
                            </a>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default RightPanel;
