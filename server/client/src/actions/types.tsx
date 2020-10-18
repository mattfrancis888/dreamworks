import { FetchMoviesAction, FetchMovieInfoAction } from "../actions";
export enum ActionTypes {
    FETCH_MOVIES,
    FETCH_MOVIE_INFO,
}

export type Actions = FetchMoviesAction | FetchMovieInfoAction;
