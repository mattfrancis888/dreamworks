import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import { Movie } from "../actions";

export interface StoreState {
    movies: Movie[];
}
export default combineReducers<StoreState>({
    movies: moviesReducer,
});
