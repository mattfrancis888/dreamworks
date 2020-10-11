import React, { useEffect, useState } from "react";
import trollsMovie from "../img/trollsMovie.jpg";
import theCroodsMovie from "../img/theCroodsMovie.jpg";
import abominableMovie from "../img/abominableMovie.jpg";

import {
    CarouselProvider,
    Slider,
    Slide,
    DotGroup,
    Dot,
} from "pure-react-carousel";
import LazyLoad from "react-lazyload";
import anime from "animejs/lib/anime.es.js";
import { useInView } from "react-intersection-observer";

const AboutCarousel: React.FC<{}> = () => {
    const [campusDotIsClicked, setCampusDotIsClicked] = useState(true);
    const [moviesDotIsClicked, setMoviesDotIsClicked] = useState(false);
    const [techDotIsClicked, setTechDotIsClicked] = useState(false);

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true,
    });
    useEffect(() => {
        if (inView) {
            anime({
                targets: ".aboutCarouselTitle",
                translateY: [50, 0],
                duration: 700,
                easing: "easeOutQuad",
                opacity: [
                    {
                        value: [0, 1],
                        duration: 2000,
                        easing: "easeOutQuad",
                    },
                ],
            });
        }
    }, [inView]);

    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={155}
            totalSlides={3}
            className="aboutCarousel"
            visibleSlides={1}
        >
            <div className="aboutTitleAndDotsWrap">
                <h1 className="aboutCarouselTitle" ref={ref}>
                    About Dreamworks
                </h1>
                <div className="aboutCarouselDotsWrap">
                    <Dot
                        className={
                            campusDotIsClicked
                                ? "aboutCarouselDotClicked"
                                : "aboutCarouselDot"
                        }
                        slide={0}
                        onClick={() => {
                            setCampusDotIsClicked(true);
                            setMoviesDotIsClicked(false);
                            setTechDotIsClicked(false);
                        }}
                    >
                        <h3>Campus</h3>
                    </Dot>
                    <Dot
                        className={
                            moviesDotIsClicked
                                ? "aboutCarouselDotClicked"
                                : "aboutCarouselDot"
                        }
                        slide={1}
                        onClick={() => {
                            setCampusDotIsClicked(false);
                            setMoviesDotIsClicked(true);
                            setTechDotIsClicked(false);
                        }}
                    >
                        <h3>Movies</h3>
                    </Dot>
                    <Dot
                        className={
                            techDotIsClicked
                                ? "aboutCarouselDotClicked"
                                : "aboutCarouselDot"
                        }
                        slide={2}
                        onClick={() => {
                            setCampusDotIsClicked(false);
                            setMoviesDotIsClicked(false);
                            setTechDotIsClicked(true);
                        }}
                    >
                        <h3>Tech</h3>
                    </Dot>
                </div>
            </div>

            <Slider>
                <Slide index={0}>
                    <div className="aboutCarouselSlide">
                        <LazyLoad>
                            <div className="aboutCarouselImageContainer">
                                <h1 className="aboutCarouselOverlayText">
                                    award-winning television
                                </h1>

                                <div className="aboutCarouselOverlay"></div>
                                <img
                                    src={trollsMovie}
                                    onLoad={() => {
                                        anime({
                                            targets:
                                                ".aboutCarouselImageContainer",
                                            translateY: [30, 0],
                                            duration: 300,
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
                            </div>
                        </LazyLoad>
                        <p className="aboutCarouselDescription">
                            In 2013, the DWA Television division was launched
                            into being with a groundbreaking deal for hundreds
                            of hours of kids and family programming.
                        </p>
                    </div>
                </Slide>
                <Slide index={1}>
                    <div className="aboutCarouselSlide">
                        <div className="aboutCarouselImageContainer">
                            <div className="aboutCarouselOverlay"></div>
                            <h1 className="aboutCarouselOverlayText">
                                award-winning television
                            </h1>
                            <img src={theCroodsMovie}></img>
                        </div>
                        <p className="aboutCarouselDescription">
                            In 2013, the DWA Television division was launched
                            into being with a groundbreaking deal for hundreds
                            of hours of kids and family programming.
                        </p>
                    </div>
                </Slide>
                <Slide index={2}>
                    <div className="aboutCarouselSlide">
                        <div className="aboutCarouselImageContainer">
                            <div className="aboutCarouselOverlay"></div>
                            <h1 className="aboutCarouselOverlayText">
                                award-winning television
                            </h1>
                            <img src={abominableMovie}></img>
                        </div>
                        <p className="aboutCarouselDescription">
                            In 2013, the DWA Television division was launched
                            into being with a groundbreaking deal for hundreds
                            of hours of kids and family programming.
                        </p>
                    </div>
                </Slide>
            </Slider>
        </CarouselProvider>
    );
};
export default AboutCarousel;
