export const GET_NEWS = 'GET_NEWS';
export const NEWS_RECEIVED = 'NEWS_RECEIVED';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const reducer = (state = {}, action: { type: string; json: Array<unknown> }) => {
    switch (action.type) {
        case GET_NEWS:
            return { ...state, loading: true };
        case NEWS_RECEIVED:
            console.log(state);
            return { ...state, news: action.json, loading: false };
        default:
            return state;
    }
};

export default reducer;
