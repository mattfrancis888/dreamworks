import React, { useEffect } from "react";
import Banner from "./Banner";
import MoviesCarousel from "./MoviesCarousel";
import AboutCarousel from "./AboutCarousel";
import trolls from "../img/trolls.jpg";
import "pure-react-carousel/dist/react-carousel.es.css";
import LazyLoad from "react-lazyload";
import anime from "animejs/lib/anime.es.js";
import { InView } from "react-intersection-observer";
import { useInView } from "react-intersection-observer";

const Body: React.FC<{}> = () => {
    //https://stackoverflow.com/questions/59953580/framer-check-if-element-is-into-viewport
    //Note: Refer to react-intersection-observer docs if we have multiple refs in a component

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true,
    });
    useEffect(() => {
        //Tecnically, we don't need Intersection observer; but I use it here just for demonstration purposes
        if (inView) {
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
    }, [inView]);

    return (
        <React.Fragment>
            <Banner />

            <h1 ref={ref} className="bodyMoviesTitle">
                Movies
            </h1>

            <MoviesCarousel />
            <AboutCarousel />
            <div className="thankYouContainer">
                <div className="thankYouTextWrap">
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

// anime({
//     targets: ".streamShowInfoWrap",
//     // Properties
//     translateY: [500, 0],
//     // Property Parameters
//     duration: 8000,
//     easing: "linear",
//     // Animation Parameters

//     opacity: [
//         {
//             value: [0, 1],
//             duration: 3000,
//             easing: "easeOutQuad",
//         },
//     ],
// });
