import React from "react";
import Banner from "./Banner";
import MoviesCarousel from "./MoviesCarousel";
import AboutCarousel from "./AboutCarousel";
import trolls from "../img/trolls.jpg";
import "pure-react-carousel/dist/react-carousel.es.css";

const Body: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <Banner />
            <h1 className="bodyMoviesTitle">Movies</h1>
            <MoviesCarousel />
            <AboutCarousel />
            <div className="thankYouContainer">
                <div className="thankYouTextWrap">
                    <div>
                        <h1>Thanks for checking us out!</h1>
                        <p>Keep your eyes open for more news</p>
                    </div>
                </div>
                <div className="thankYouImageWrap">
                    <img src={trolls}></img>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Body;
