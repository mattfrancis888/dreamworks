import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";
import { MovieInfoType, fetchMovieInfo } from "../actions";
import { connect } from "react-redux";
import { StoreState } from "../reducers";
import Loading from "./Loading";

interface MovieInfoRouteParam {
    movieName: string;
}

interface MovieInfoProps extends RouteComponentProps<MovieInfoRouteParam> {
    fetchMovieInfo(movieName: string): void;
    movieInfo: MovieInfoType[];
}

const MovieInfo: React.FC<MovieInfoProps> = (props) => {
    useEffect(() => {
        props.fetchMovieInfo(props.match.params.movieName);
    }, []);

    //Note: Make sure it's the same as the viewports defined in scss/utilities/_variables
    //We could also use this for media queries:
    //https://www.npmjs.com/package/react-responsive

    const medium_screen_size = 768;

    const [isDesktop, setDesktop] = useState(
        window.innerWidth > medium_screen_size
    );

    const updateMedia = () => {
        setDesktop(window.innerWidth > medium_screen_size);
    };

    const [readMore, setReadMore] = useState(false);

    const renderBannerVideoOrImg = () => {
        if (isDesktop) {
            return (
                <video
                    className="movieInfoBannerVideo"
                    autoPlay
                    preload="false"
                    loop
                    muted
                    playsInline
                    src={props.movieInfo[0].banner_video}
                ></video>
            );
        } else {
            return (
                <img
                    className="movieInfoBannerImageMobile"
                    src={props.movieInfo[0].banner_image}
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
                />
            );
        }
    };

    const renderAbout = () => {
        //Note: white-space: pre-line is used in aboutMovieDesc class so that line breaks (/n) can be recognized by React
        //https://stackoverflow.com/questions/35351706/how-to-render-a-multi-line-text-string-in-react
        if (isDesktop) {
            return (
                <React.Fragment>
                    <div className="movieInfoAboutTextWrap">
                        <h1 className="aboutMovieTitle">About</h1>
                        <p className="aboutMovieDesc">
                            {props.movieInfo[0].about}
                        </p>
                    </div>
                    <div className="movieInfoAboutImageContainer">
                        <img
                            className="movieInfoAboutImageDesktop"
                            src={props.movieInfo[0].about_image_desktop}
                            onLoad={() => {
                                anime({
                                    targets: ".movieInfoAboutImageDesktop",

                                    opacity: [
                                        {
                                            value: [0, 1],
                                            duration: 300,
                                            easing: "easeOutQuad",
                                        },
                                    ],
                                });
                            }}
                        ></img>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <h1 className="aboutMovieTitle">About</h1>
                    <div className="movieInfoAboutImageContainer">
                        <img
                            className="movieInfoAboutImageMobile"
                            src={props.movieInfo[0].about_image_mobile}
                            onLoad={() => {
                                anime({
                                    targets: ".movieInfoAboutImageMobile",

                                    opacity: [
                                        {
                                            value: [0, 1],
                                            duration: 300,
                                            easing: "easeOutQuad",
                                        },
                                    ],
                                });
                            }}
                        ></img>
                    </div>
                    <div className={readMore ? "" : "aboutMovieMobileDescWrap"}>
                        <p className="aboutMovieDesc">
                            {props.movieInfo[0].about}
                        </p>
                        <div className="readMoreFade"></div>
                    </div>
                    <button
                        onClick={() => setReadMore(true)}
                        className={
                            readMore
                                ? "aboutMovieReadMoreButtonHide"
                                : "aboutMovieReadMoreButton"
                        }
                    >
                        Read more
                    </button>
                </React.Fragment>
            );
        }
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);

        //unmount lifecycle
        return () => window.removeEventListener("resize", updateMedia);
    });
    const renderContent = (): any => {
        if (props.movieInfo.length === 0) {
            return (
                <div className="loadingCenter loadingFillViewport">
                    <Loading />
                </div>
            );
        } else {
            return (
                <div className="movieInfoContainer">
                    <div className="movieInfoBanner">
                        <div className="movieInfoBannerOverlay">
                            {renderBannerVideoOrImg()}
                        </div>

                        <img
                            className="movieInfoLogo"
                            src={props.movieInfo[0].logo}
                            onLoad={() => {
                                anime({
                                    targets: ".movieInfoLogo",

                                    opacity: [
                                        {
                                            value: [0, 1],
                                            duration: 500,
                                            easing: "easeOutQuad",
                                        },
                                    ],
                                });
                            }}
                        />
                    </div>
                    <div className="movieInfoAbout">{renderAbout()}</div>
                    <iframe
                        className="movieTrailer"
                        src={props.movieInfo[0].trailer}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            );
        }
    };
    return <React.Fragment>{renderContent()}</React.Fragment>;
};
const mapStateToProps = (state: StoreState) => {
    return {
        movieInfo: state.movieInfo,
    };
};
export default connect(mapStateToProps, { fetchMovieInfo })(MovieInfo);
