import React from "react";
import Banner from "./Banner";
import MoviesCarousel from "./MoviesCarousel";
import AboutCarousel from "./AboutCarousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Body: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <Banner />
            <h1 className="bodyMoviesTitle">Movies</h1>
            <MoviesCarousel />
            <AboutCarousel />
        </React.Fragment>
    );
};

export default Body;
