import React from "react";
import annivMobile from "../img/annivMobile.jpg";
import annivDesktop from "../img/annivDesktop.jpg";
const Banner: React.FC<{}> = () => {
    return (
        <div className="bannerContainer">
            <div className="bannerOverlay"></div>
            <div className="bannerInfoWrap">
                <h1 className="bannerSubTitle">Making Dreams Come True</h1>
                <h1 className="bannerTitle">Dreamworks 25th Anniversary</h1>
            </div>
            <img
                className="streamCreateEditHero"
                srcSet={`${annivMobile} 1350w,
    ${annivDesktop} 3200w`}
                alt="banner picture"
                src={annivDesktop}
            />
        </div>
    );
};

export default Banner;
