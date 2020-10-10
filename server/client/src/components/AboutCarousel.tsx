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
//const [dotIsClicked, setDotIsClicked] = useState(true);
const AboutCarousel: React.FC<{}> = () => {
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={40}
            totalSlides={3}
            className="aboutCarousel"
            visibleSlides={1}
        >
            <div className="aboutTitleAndDotsWrap">
                <h1 className="aboutCarouselTitle">About Dreamworks</h1>
                <div className="aboutCarouselDotsWrap">
                    <Dot className="aboutCarouselDot" slide={0}>
                        <h3>Campus</h3>
                    </Dot>
                    <Dot className="aboutCarouselDot" slide={1}>
                        <h3>Movies</h3>
                    </Dot>
                    <Dot className="aboutCarouselDot" slide={2}>
                        <h3>Tech</h3>
                    </Dot>
                </div>
            </div>

            <Slider>
                <Slide index={0}>
                    <div className="aboutCarouselSlide">
                        <div className="aboutCarouselImageContainer">
                            <div className="aboutCarouselOverlay"></div>
                            <h1 className="aboutCarouselOverlayText">
                                award-winning television
                            </h1>
                            <img src={trollsMovie}></img>
                        </div>
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
