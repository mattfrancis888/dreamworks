import { ActionTypes, FetchMoviesAction, MovieType } from "../actions";

export default (state: MovieType[] = [], action: FetchMoviesAction) => {
    switch (action.type) {
        case ActionTypes.FETCH_MOVIES:
            return action.payload;
        default:
            return state;
    }
};
