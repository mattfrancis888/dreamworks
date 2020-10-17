import { ActionTypes, FetchMoviesAction, Movie } from "../actions";

export default (state: Movie[] = [], action: FetchMoviesAction) => {
    switch (action.type) {
        case ActionTypes.FETCH_MOVIES:
            return action.payload;
        default:
            return state;
    }
};
