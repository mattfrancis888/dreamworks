import React, { useEffect, useState } from "react";
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
            naturalSlideHeight={150}
            totalSlides={4}
            className="moviesCarouselWrap"
            visibleSlides={3}
            infinite={true}
        >
            <div className="sliderAndButtonWrap">
                <Slider>
                    <Slide index={0}>
                        <LazyLoad>
                            <div className="movieContainerCarousel movieOne">
                                <img
                                    src={trollsMovie}
                                    onLoad={() => {
                                        anime({
                                            targets: ".movieOne",
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
                                <div className="movieOverlay">
                                    <h3>See more</h3>
                                </div>
                            </div>
                        </LazyLoad>
                    </Slide>
                    <Slide index={1}>
                        <LazyLoad>
                            <div className="movieContainerCarousel movieTwo">
                                <img
                                    src={theCroodsMovie}
                                    onLoad={() => {
                                        anime({
                                            targets: ".movieTwo",
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
                                <div className="movieOverlay">
                                    <h3>See more</h3>
                                </div>
                            </div>
                        </LazyLoad>
                    </Slide>
                    <Slide index={2}>
                        <LazyLoad>
                            <div className="movieContainerCarousel movieThree">
                                <img
                                    src={abominableMovie}
                                    onLoad={() => {
                                        anime({
                                            targets: ".movieThree",
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
                                <div className="movieOverlay">
                                    <h3>See more</h3>
                                </div>
                            </div>
                        </LazyLoad>
                    </Slide>
                    <Slide index={3}>
                        <img src={theCroodsMovie}></img>
                        <div className="movieOverlay">
                            <h3>See more</h3>
                        </div>
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
