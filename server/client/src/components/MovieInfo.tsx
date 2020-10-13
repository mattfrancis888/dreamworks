import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import trollsMovieInfoMobile from "../img/trollsMovieInfoMobile.jpg";
import trollsMovieInfoTitle from "../img/trollsMovieInfoTitle.png";
import trollVid from "../videos/trollVid.mp4";
import anime from "animejs/lib/anime.es.js";
import trollsAboutMobile from "../img/trollsAboutMobile.jpg";
import trollAboutDesktop from "../img/trollsAboutDesktop.jpg";
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

    const renderAbout = () => {
        if (isDesktop) {
            return (
                <React.Fragment>
                    <div className="movieInfoAboutTextWrap">
                        <h1 className="aboutMovieTitle">About</h1>
                        <p className="aboutMovieDesc">
                            Anna Kendrick and Justin Timberlake return in an
                            all-star sequel to DreamWorks Animation’s 2016
                            musical hit: Trolls World Tour. In an adventure that
                            will take them well beyond what they’ve known
                            before, Poppy (Kendrick) and Branch (Timberlake)
                            discover that they are but one of six different
                            Troll tribes scattered over six different lands and
                            devoted to six different kinds of music: Funk,
                            Country, Techno, Classical, Pop and Rock. Their
                            world is about to get a lot bigger and a whole lot
                            louder. A member of hard-rock royalty, Queen Barb
                            (Rachel Bloom), aided by her father King Thrash
                            (Ozzy Osbourne), wants to destroy all other kinds of
                            music to let rock reign supreme. With the fate of
                            the world at stake, Poppy and Branch, along with
                            their friends — Biggie (James Corden), Chenille
                            (Caroline Hjelt), Satin (Aino Jawo), Cooper (Ron
                            Funches) and Guy Diamond (Kunal Nayyar) — set out to
                            visit all the other lands to unify the Trolls in
                            harmony against Barb, who’s looking to upstage them
                            all. A member of hard-rock royalty, Queen Barb
                            (Rachel Bloom), aided by her father King Thrash
                            (Ozzy Osbourne), wants to destroy all other kinds of
                            music to let rock reign supreme. With the fate of
                            the world at stake, Poppy and Branch, along with
                            their friends — Biggie (James Corden), Chenille
                            (Caroline Hjelt), Satin (Aino Jawo), Cooper (Ron
                            Funches) and Guy Diamond (Kunal Nayyar) — set out to
                            visit all the other lands to unify the Trolls in
                            harmony against Barb, who’s looking to upstage them
                            all. A member of hard-rock royalty, Queen Barb
                            (Rachel Bloom), aided by her father King Thrash
                            (Ozzy Osbourne), wants to destroy all other kinds of
                            music to let rock reign supreme. With the fate of
                            the world at stake, Poppy and Branch, along with
                            their friends — Biggie (James Corden), Chenille
                            (Caroline Hjelt), Satin (Aino Jawo), Cooper (Ron
                            Funches) and Guy Diamond (Kunal Nayyar) — set out to
                            visit all the other lands to unify the Trolls in
                            harmony against Barb, who’s looking to upstage them
                            all.
                        </p>
                    </div>
                    <div className="movieInfoAboutImage">
                        <img src={trollAboutDesktop}></img>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <h1 className="aboutMovieTitle">About</h1>
                    <div className="movieInfoAboutImage">
                        <img src={trollsAboutMobile}></img>
                    </div>

                    <p className="aboutMovieDesc">
                        Anna Kendrick and Justin Timberlake return in an
                        all-star sequel to DreamWorks Animation’s 2016 musical
                        hit: Trolls World Tour. In an adventure that will take
                        them well beyond what they’ve known before, Poppy
                        (Kendrick) and Branch (Timberlake) discover that they
                        are but one of six different Troll tribes scattered over
                        six different lands and devoted to six different kinds
                        of music: Funk, Country, Techno, Classical, Pop and
                        Rock. Their world is about to get a lot bigger and a
                        whole lot louder.
                    </p>
                </React.Fragment>
            );
        }
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);

        //unmount lifecycle
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div className="movieInfoContainer">
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
            <div className="movieInfoAbout">{renderAbout()}</div>
        </div>
    );
};

export default MovieInfo;
