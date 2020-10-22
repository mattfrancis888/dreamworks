import React, { useState, useEffect } from "react";
import annivMobile from "../img/annivMobile.jpg";
import annivDesktop from "../img/annivDesktop.jpg";
import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import trollVid from "../videos/trollVid.mp4";
import { connect } from "react-redux";
import { StoreState } from "../reducers";
import { MovieType, fetchMovies } from "../actions";
import { useHistory } from "react-router-dom";

interface BannerProps {
    fetchMovies(): void;
    movies: MovieType[];
}

const Banner: React.FC<BannerProps> = (props) => {
    const [slide1IsClicked, setSlide1DotIsClicked] = useState(true);
    const [slide2IsClicked, setSlide2DotIsClicked] = useState(false);
    const [slide3IsClicked, setSlide3DotIsClicked] = useState(false);

    const history = useHistory();

    useEffect(() => {
        props.fetchMovies();
    }, []);

    const renderCarousel = (): JSX.Element | JSX.Element[] => {
        if (props.movies.length === 0) return <div></div>;
        else
            return (
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={45}
                    totalSlides={4}
                    visibleSlides={1}
                    infinite={true}
                    className="bannerContainer"
                >
                    <Slider>
                        <Slide index={0}>
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
                                            `movies/${props.movies[0].movie_name_for_url}`
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
                        <Slide index={1}>
                            <div className="bannerOverlay"></div>
                            <div className="bannerInfoWrap">
                                <h1 className="bannerSubTitle">
                                    Available Now
                                </h1>
                                <h1 className="bannerTitle">
                                    {props.movies[1].title}
                                </h1>
                                <button
                                    className="bannerOfficialSiteButton"
                                    onClick={() =>
                                        history.push(
                                            `movies/${props.movies[1].movie_name_for_url}`
                                        )
                                    }
                                >
                                    Official Site
                                </button>
                            </div>
                            <video
                                className="bannerVideo"
                                autoPlay
                                preload="false"
                                loop
                                muted
                                playsInline
                                src={props.movies[1].banner_video}
                            ></video>
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
                            }}
                        >
                            <h3>{props.movies[1].title}</h3>
                        </Dot>
                    </div>
                </CarouselProvider>
            );
    };

    return <React.Fragment>{renderCarousel()}</React.Fragment>;
};
const mapStateToProps = (state: StoreState) => {
    return {
        movies: state.movies,
    };
};
export default connect(mapStateToProps, { fetchMovies })(Banner);
