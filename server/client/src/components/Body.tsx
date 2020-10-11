import React from "react";
import Banner from "./Banner";
import MoviesCarousel from "./MoviesCarousel";
import AboutCarousel from "./AboutCarousel";
import trolls from "../img/trolls.jpg";
import "pure-react-carousel/dist/react-carousel.es.css";
import LazyLoad from "react-lazyload";
import anime from "animejs/lib/anime.es.js";

const Body: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <Banner />
            <h1 className="bodyMoviesTitle">Movies</h1>
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
