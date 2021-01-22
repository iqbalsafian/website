import { put, takeLatest, all } from 'redux-saga/effects';
import { GET_NEWS, NEWS_RECEIVED } from '../reducers';
import { newsKey } from '../../apiKeys';

function* fetchNews() {
    const json = yield fetch(`https://newsapi.org/v1/articles?source=cnn&apiKey=${newsKey}`).then((response) =>
        response.json(),
    );

    yield put({
        type: NEWS_RECEIVED,
        json: json.articles,
    });
}

function* actionWeather() {
    yield takeLatest(GET_NEWS, fetchNews);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* rootSaga() {
    yield all([actionWeather()]);
}
