import React, { useEffect, useState } from "react";
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
import { MovieType } from "../actions";
import Loading from "./Loading";
import { useHistory } from "react-router-dom";

interface MoviesCarouselProps {
    movies: MovieType[];
}

const MoviesCarousel: React.FC<MoviesCarouselProps> = (props) => {
    const history = useHistory();

    const renderCarousel = (): JSX.Element | JSX.Element[] => {
        if (props.movies.length === 0)
            return (
                <div className="loadingCenter">
                    <Loading />
                </div>
            );
        else {
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
                            <Slide
                                index={0}
                                onClick={() =>
                                    history.push(
                                        `movies/${props.movies[0].movie_name_for_url}`
                                    )
                                }
                            >
                                <LazyLoad>
                                    <div className="movieContainerCarousel movieOne">
                                        <img
                                            src={props.movies[0].poster}
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
                                                            easing:
                                                                "easeOutQuad",
                                                        },
                                                    ],
                                                });
                                            }}
                                            alt="movie poster"
                                        ></img>
                                        <div className="moviePosterTitleFade"></div>
                                        <h1 className="moviePosterTitle">
                                            {props.movies[0].title}
                                        </h1>

                                        <div className="movieOverlay">
                                            <h3>See more</h3>
                                        </div>
                                    </div>
                                </LazyLoad>
                            </Slide>
                            <Slide
                                index={1}
                                onClick={() =>
                                    history.push(
                                        `movies/${props.movies[1].movie_name_for_url}`
                                    )
                                }
                            >
                                <LazyLoad>
                                    <div className="movieContainerCarousel movieTwo">
                                        <img
                                            src={props.movies[1].poster}
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
                                                            easing:
                                                                "easeOutQuad",
                                                        },
                                                    ],
                                                });
                                            }}
                                            alt="movie poster"
                                        ></img>
                                        <div className="moviePosterTitleFade"></div>
                                        <h1 className="moviePosterTitle">
                                            {props.movies[1].title}
                                        </h1>

                                        <div className="movieOverlay">
                                            <h3>See more</h3>
                                        </div>
                                    </div>
                                </LazyLoad>
                            </Slide>
                            <Slide
                                index={2}
                                onClick={() =>
                                    history.push(
                                        `movies/${props.movies[2].movie_name_for_url}`
                                    )
                                }
                            >
                                <LazyLoad>
                                    <div className="movieContainerCarousel movieThree">
                                        <img
                                            src={props.movies[2].poster}
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
                                                            easing:
                                                                "easeOutQuad",
                                                        },
                                                    ],
                                                });
                                            }}
                                            alt="movie poster"
                                        ></img>
                                        <div className="moviePosterTitleFade"></div>
                                        <h1 className="moviePosterTitle">
                                            {props.movies[2].title}
                                        </h1>
                                        <div className="movieOverlay">
                                            <h3>See more</h3>
                                        </div>
                                    </div>
                                </LazyLoad>
                            </Slide>
                            <Slide
                                index={3}
                                onClick={() =>
                                    history.push(
                                        `movies/${props.movies[3].movie_name_for_url}`
                                    )
                                }
                            >
                                <img
                                    src={props.movies[3].poster}
                                    alt="movie poster"
                                ></img>
                                <h1 className="moviePosterTitle">
                                    {props.movies[3].title}
                                </h1>
                                <div className="moviePosterTitleFade"></div>
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
        }
    };

    return <div data-testid="movieCarousel">{renderCarousel()}</div>;
};

export default MoviesCarousel;
