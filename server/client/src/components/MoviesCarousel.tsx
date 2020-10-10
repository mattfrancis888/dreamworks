import React from "react";
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

const MoviesCarousel: React.FC<{}> = () => {
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={155}
            totalSlides={4}
            className="moviesCarouselWrap"
            visibleSlides={3}
            infinite={true}
        >
            <div className="sliderAndButtonWrap">
                <Slider>
                    <Slide index={0}>
                        <img src={trollsMovie}></img>
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
    );
};
export default MoviesCarousel;
