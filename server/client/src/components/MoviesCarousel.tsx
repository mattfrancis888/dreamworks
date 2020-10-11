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
import LazyLoad from "react-lazyload";
import anime from "animejs/lib/anime.es.js";

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
                        <LazyLoad>
                            <img
                                src={trollsMovie}
                                className="moviePicOne"
                                onLoad={() => {
                                    anime({
                                        targets: ".moviePicOne",
                                        translateY: [30, 0],
                                        duration: 700,
                                        easing: "linear",
                                        opacity: [
                                            {
                                                value: [0, 1],
                                                duration: 3000,
                                                easing: "easeOutQuad",
                                            },
                                        ],
                                    });
                                }}
                            ></img>
                        </LazyLoad>
                    </Slide>
                    <Slide index={1}>
                        <LazyLoad>
                            <img
                                className="moviePicTwo"
                                src={theCroodsMovie}
                                onLoad={() => {
                                    anime({
                                        targets: ".moviePicTwo",
                                        translateY: [30, 0],
                                        duration: 700,
                                        easing: "linear",
                                        opacity: [
                                            {
                                                value: [0, 1],
                                                duration: 3000,
                                                easing: "easeOutQuad",
                                            },
                                        ],
                                    });
                                }}
                            ></img>
                        </LazyLoad>
                    </Slide>
                    <Slide index={2}>
                        <LazyLoad>
                            <img
                                className="moviePicThree"
                                src={abominableMovie}
                                onLoad={() => {
                                    anime({
                                        targets: ".moviePicThree",
                                        translateY: [30, 0],
                                        duration: 700,
                                        easing: "linear",
                                        opacity: [
                                            {
                                                value: [0, 1],
                                                duration: 3000,
                                                easing: "easeOutQuad",
                                            },
                                        ],
                                    });
                                }}
                            ></img>
                        </LazyLoad>
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