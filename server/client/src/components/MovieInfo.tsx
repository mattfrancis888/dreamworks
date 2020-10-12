import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import trollsMovieInfoMobile from "../img/trollsMovieInfoMobile.jpg";
import trollsMovieInfoTitle from "../img/trollsMovieInfoTitle.png";
import trollVid from "../videos/trollVid.mp4";
import anime from "animejs/lib/anime.es.js";

const MovieInfo: React.FC<{}> = () => {
    //const history = useHistory();

    //Note: Make sure it's the same as the viewports defined in scss/utilities/_variables
    //We could also use this for media queries:
    //https://www.npmjs.com/package/react-responsive
    const medium_screen_size = 768;

    const [isDesktop, setDesktop] = useState(
        window.innerWidth > medium_screen_size
    );

    const updateMedia = () => {
        setDesktop(window.innerWidth > medium_screen_size);
        if (isDesktop) {
        }
    };

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
                    alt="troll movie trailer"
                    src={trollVid}
                ></video>
            );
        } else {
            return (
                <img className="trollsBannerImg" src={trollsMovieInfoMobile} />
            );
        }
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);

        //unmount lifecycle
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div>
            <div className="movieInfoBanner">
                <div className="movieInfoBannerOverlay">
                    {renderBannerVideoOrImg()}
                </div>

                <img
                    className="trollsMovieTitle"
                    src={trollsMovieInfoTitle}
                    onLoad={() => {
                        anime({
                            targets: ".trollsMovieTitle",

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
            </div>
        </div>
    );
};

export default MovieInfo;
