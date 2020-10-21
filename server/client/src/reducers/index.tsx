import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import { MovieType, MovieInfoType } from "../actions";
import movieInfoReducer from "./movieInfoReducer";

export interface StoreState {
    movies: MovieType[];
    movieInfo: MovieInfoType[];
}
export default combineReducers<StoreState>({
    movies: moviesReducer,
    movieInfo: movieInfoReducer,
});
