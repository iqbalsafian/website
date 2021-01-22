import { put, takeLatest, all } from 'redux-saga/effects';
import { GET_NEWS, NEWS_RECEIVED } from '../reducers';

function* fetchNews() {
    const json = yield fetch(
        'https://newsapi.org/v1/articles?source=cnn&apiKey=7e192b87c8f6428896bb11460b25e6f5',
    ).then((response) => response.json());

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
