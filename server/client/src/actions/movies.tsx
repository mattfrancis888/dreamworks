import { ActionTypes } from "./types";
import movies from "./axiosConfig";
import axios from "axios";
import { Dispatch } from "redux";

export interface Movie {
    id: number;
    title: string;
    poster: string;
    movie_info_id: number;
}

export interface FetchMoviesAction {
    type: ActionTypes.FETCH_MOVIES;
    payload: Movie[];
}

export const fetchMovies = () => async (dispatch: Dispatch) => {
    const response = await movies.get<Movie[]>("/movies");
    dispatch<FetchMoviesAction>({
        type: ActionTypes.FETCH_MOVIES,
        payload: response.data,
    });
};
