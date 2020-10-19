import { ActionTypes } from "./types";
import movies from "./axiosConfig";
import axios from "axios";
import { Dispatch } from "redux";

export interface MovieType {
    id: number;
    title: string;
    poster: string;
    movie_name_for_url: string;
}

export interface MovieInfoType {
    id: number;
    banner_video: string;
    banner_image: string;
    logo: string;
    about_image_mobile: string;
    about_image_desktop: string;
    trailer: string;
    about: string;
    movie_name_for_url: string;
}

export interface FetchMoviesAction {
    type: ActionTypes.FETCH_MOVIES;
    payload: MovieType[];
}

export interface FetchMovieInfoAction {
    type: ActionTypes.FETCH_MOVIE_INFO;
    payload: MovieInfoType[];
}

export const fetchMovies = () => async (dispatch: Dispatch) => {
    const response = await movies.get<MovieType[]>("/movies");
    dispatch<FetchMoviesAction>({
        type: ActionTypes.FETCH_MOVIES,
        payload: response.data,
    });
};

export const fetchMovieInfo = (movieName: string) => async (
    dispatch: Dispatch
) => {
    console.log("data");
    const response = await movies.get<MovieInfoType[]>(`/movies/${movieName}`);

    dispatch<FetchMovieInfoAction>({
        type: ActionTypes.FETCH_MOVIE_INFO,
        payload: response.data,
    });
};
