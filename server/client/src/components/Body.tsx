import React from "react";
import Banner from "./Banner";
import trollsMovie from "../img/trollsMovie.jpg";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
const Body: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <Banner />
            <h1 className="bodyMoviesTitle">Movies</h1>

            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={50}
                totalSlides={3}
                className="moviesCarouselWrap"
            >
                <div className="sliderAndButtonWrap">
                    <Slider>
                        <Slide index={0}>
                            <div className="carouselSlide">
                                <img src={trollsMovie}></img>
                                <img src={trollsMovie}></img>
                                <img src={trollsMovie}></img>
                            </div>
                        </Slide>
                        <Slide index={1}>I am the second Slide.</Slide>
                        <Slide index={2}>I am the third Slide.</Slide>
                    </Slider>
                    <ButtonBack className="moviesBackButton">Back</ButtonBack>
                    <ButtonNext className="moviesNextButton">Next</ButtonNext>
                </div>
            </CarouselProvider>
        </React.Fragment>
    );
};

export default Body;
