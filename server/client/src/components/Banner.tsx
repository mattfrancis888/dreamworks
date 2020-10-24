import React, { useState, useEffect } from "react";
import annivMobile from "../img/annivMobile.jpg";
import annivDesktop from "../img/annivDesktop.jpg";
import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import { useHistory } from "react-router-dom";
import useWindowDimensions from "./windowDimensions";
import { MED_SCREEN_SIZE } from "../constants";
import anime from "animejs/lib/anime.es.js";
import { MovieType } from "../actions";

interface BannerProps {
    movies: MovieType[];
}

const Banner: React.FC<BannerProps> = (props) => {
    const [slide1IsClicked, setSlide1DotIsClicked] = useState(true);
    const [slide2IsClicked, setSlide2DotIsClicked] = useState(false);
    const [slide3IsClicked, setSlide3DotIsClicked] = useState(false);
    const [slide4IsClicked, setSlide4DotIsClicked] = useState(false);
    const [slide5IsClicked, setSlide5DotIsClicked] = useState(false);
    const { width } = useWindowDimensions();
    const history = useHistory();

    const renderBannerVideoOrImg = (movieIndex: number): JSX.Element => {
        if (width > MED_SCREEN_SIZE) {
            return (
                <video
                    className="bannerVideo"
                    autoPlay
                    preload="false"
                    loop
                    muted
                    playsInline
                    src={props.movies[movieIndex].banner_video}
                ></video>
            );
        } else {
            return (
                <img
                    className="movieInfoBannerImageMobile"
                    src={props.movies[movieIndex].banner_image}
                    onLoad={() => {
                        anime({
                            targets: ".movieInfoBannerImageMobile",

                            opacity: [
                                {
                                    value: [0, 1],
                                    duration: 2000,
                                    easing: "easeOutQuad",
                                },
                            ],
                        });
                    }}
                    alt="movie scene"
                />
            );
        }
    };

    const renderMoviePreviewSlides = (): JSX.Element[] => {
        return props.movies.slice(0, 4).map((movie, index) => {
            return (
                <Slide index={index} key={movie.title}>
                    <div className="bannerOverlay"></div>
                    <div className="bannerInfoWrap">
                        <h1 className="bannerSubTitle">Available Now</h1>

                        <h1 className="bannerTitle">{movie.title}</h1>
                        <button
                            className="bannerOfficialSiteButton"
                            onClick={() =>
                                history.push(
                                    `movies/${movie.movie_name_for_url}`
                                )
                            }
                        >
                            Official Site
                        </button>
                    </div>
                    {renderBannerVideoOrImg(index)}
                </Slide>
            );
        });
    };

    const renderCarousel = (): JSX.Element | JSX.Element[] => {
        if (props.movies.length === 0) return <div></div>;
        else
            return (
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={45}
                    totalSlides={5}
                    visibleSlides={1}
                    infinite={true}
                    className="bannerContainer"
                >
                    <Slider>
                        {renderMoviePreviewSlides()}
                        <Slide index={4}>
                            <div className="bannerOverlay"></div>
                            <div className="bannerInfoWrap">
                                <h1 className="bannerSubTitle">
                                    Making Dreams Come True
                                </h1>
                                <h1 className="bannerTitle">
                                    Dreamworks 25th Anniversary
                                </h1>
                                <button
                                    className="bannerOfficialSiteButton"
                                    onClick={() =>
                                        history.push(
                                            `movies/${props.movies[4].movie_name_for_url}`
                                        )
                                    }
                                >
                                    Official Site
                                </button>
                            </div>
                            <img
                                className="streamCreateEditHero"
                                srcSet={`${annivMobile} 1350w,
    ${annivDesktop} 3200w`}
                                alt="banner"
                                src={annivDesktop}
                            />
                        </Slide>
                    </Slider>
                    <div className="bannerDotsWrap">
                        <Dot
                            className={
                                slide1IsClicked
                                    ? "clickedBannerDot"
                                    : "unclickedBannerDot"
                            }
                            slide={0}
                            onClick={() => {
                                setSlide1DotIsClicked(true);
                                setSlide2DotIsClicked(false);
                                setSlide3DotIsClicked(false);
                                setSlide4DotIsClicked(false);
                                setSlide5DotIsClicked(false);
                            }}
                        >
                            <h3>{props.movies[0].title}</h3>
                        </Dot>
                        <Dot
                            className={
                                slide2IsClicked
                                    ? "clickedBannerDot"
                                    : "unclickedBannerDot"
                            }
                            slide={1}
                            onClick={() => {
                                setSlide1DotIsClicked(false);
                                setSlide2DotIsClicked(true);
                                setSlide3DotIsClicked(false);
                                setSlide4DotIsClicked(false);
                                setSlide5DotIsClicked(false);
                            }}
                        >
                            <h3>{props.movies[1].title}</h3>
                        </Dot>
                        <Dot
                            className={
                                slide3IsClicked
                                    ? "clickedBannerDot"
                                    : "unclickedBannerDot"
                            }
                            slide={2}
                            onClick={() => {
                                setSlide1DotIsClicked(false);
                                setSlide2DotIsClicked(false);
                                setSlide3DotIsClicked(true);
                                setSlide4DotIsClicked(false);
                                setSlide5DotIsClicked(false);
                            }}
                        >
                            <h3>{props.movies[2].title}</h3>
                        </Dot>
                        <Dot
                            className={
                                slide4IsClicked
                                    ? "clickedBannerDot"
                                    : "unclickedBannerDot"
                            }
                            slide={3}
                            onClick={() => {
                                setSlide1DotIsClicked(false);
                                setSlide2DotIsClicked(false);
                                setSlide3DotIsClicked(false);
                                setSlide4DotIsClicked(true);
                                setSlide5DotIsClicked(false);
                            }}
                        >
                            <h3>{props.movies[3].title}</h3>
                        </Dot>
                        <Dot
                            className={
                                slide5IsClicked
                                    ? "clickedBannerDot"
                                    : "unclickedBannerDot"
                            }
                            slide={4}
                            onClick={() => {
                                setSlide1DotIsClicked(false);
                                setSlide2DotIsClicked(false);
                                setSlide3DotIsClicked(false);
                                setSlide4DotIsClicked(false);
                                setSlide5DotIsClicked(true);
                            }}
                        >
                            <h3>Dreamworks Anniversary</h3>
                        </Dot>
                    </div>
                </CarouselProvider>
            );
    };

    return <div data-testid="homeBannerCarousel">{renderCarousel()}</div>;
};
export default Banner;
