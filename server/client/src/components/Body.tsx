import React from "react";
import Banner from "./Banner";
import trollsMovie from "../img/trollsMovie.jpg";
import theCroodsMovie from "../img/theCroodsMovie.jpg";
import abominableMovie from "../img/abominableMovie.jpg";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { IconContext } from "react-icons";

const Body: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <Banner />
            <h1 className="bodyMoviesTitle">Movies</h1>

            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={155}
                totalSlides={4}
                className="moviesCarouselWrap"
                visibleSlides={3}
                infinite={true}
            >
                <div className="sliderAndButtonWrap">
                    <Slider className="carouselSlide">
                        <Slide index={0}>
                            <div>
                                <img src={trollsMovie}></img>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <img src={theCroodsMovie}></img>
                        </Slide>
                        <Slide index={2}>
                            <img src={abominableMovie}></img>
                        </Slide>
                        <Slide index={3}>
                            <img src={theCroodsMovie}></img>
                        </Slide>
                    </Slider>
                    <ButtonBack className="moviesBackButton">
                        <RiArrowLeftSLine />
                    </ButtonBack>
                    <ButtonNext className="moviesNextButton">
                        <RiArrowRightSLine />
                    </ButtonNext>
                </div>
            </CarouselProvider>
        </React.Fragment>
    );
};

export default Body;
