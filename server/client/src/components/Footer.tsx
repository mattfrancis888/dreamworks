import React from "react";
import { Link } from "react-router-dom";
import dreamworksFooter from "../img/dreamworksFooter.png";

const Footer: React.FC<{}> = () => {
    return (
        <footer>
            <Link to="/">
                <img
                    className="footerLogo"
                    alt="dreamworks footer logo"
                    src={dreamworksFooter}
                />
            </Link>
        </footer>
    );
};

export default Footer;
