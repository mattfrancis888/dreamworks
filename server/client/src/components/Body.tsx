import React, { useEffect } from "react";
import Banner from "./Banner";
import MoviesCarousel from "./MoviesCarousel";
import AboutCarousel from "./AboutCarousel";
import trolls from "../img/trolls.jpg";
import "pure-react-carousel/dist/react-carousel.es.css";
import LazyLoad from "react-lazyload";
import anime from "animejs/lib/anime.es.js";
import { useInView } from "react-intersection-observer";

const Body: React.FC<{}> = () => {
    //https://stackoverflow.com/questions/59953580/framer-check-if-element-is-into-viewport

    // const { ref, inView, entry } = useInView({
    //     /* Optional options */
    //     threshold: 0,
    //     triggerOnce: true,
    // });

    const bodyMoviesTitleRef = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    const thankYouTitleRef = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    useEffect(() => {
        //Tecnically, we don't need Intersection observer; but I use it here just for demonstration purposes
        if (bodyMoviesTitleRef.inView) {
            anime({
                targets: ".bodyMoviesTitle",
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
        if (thankYouTitleRef.inView) {
            anime({
                targets: ".thankYouTextWrap",
                translateY: [100, 0],
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
    }, [bodyMoviesTitleRef.inView, thankYouTitleRef.inView]);

    return (
        <React.Fragment>
            <Banner />

            <h1 ref={bodyMoviesTitleRef.ref} className="bodyMoviesTitle">
                Movies
            </h1>

            <MoviesCarousel />
            <AboutCarousel />
            <div className="thankYouContainer">
                <div className="thankYouTextWrap" ref={thankYouTitleRef.ref}>
                    <div>
                        <h1>Thanks for checking us out!</h1>
                        <p>Keep your eyes open for more news</p>
                    </div>
                </div>

                <div className="thankYouImageWrap">
                    <LazyLoad
                        width={100}
                        height={100}
                        debounce={false}
                        offsetVertical={500}
                    >
                        <img
                            className="thankYouImage"
                            src={trolls}
                            onLoad={() => {
                                anime({
                                    targets: ".thankYouImage",
                                    // Properties
                                    // Animation Parameters

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
                </div>
            </div>
        </React.Fragment>
    );
};

export default Body;
