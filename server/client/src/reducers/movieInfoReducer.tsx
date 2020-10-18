import { ActionTypes, FetchMovieInfoAction, MovieInfoType } from "../actions";

export default (state: MovieInfoType[] = [], action: FetchMovieInfoAction) => {
    switch (action.type) {
        case ActionTypes.FETCH_MOVIE_INFO:
            return action.payload;
        default:
            return state;
    }
};
