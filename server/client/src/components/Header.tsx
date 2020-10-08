import React from "react";
import { Link } from "react-router-dom";
import dreamworks from "../img/dreamworks.png";

const Header: React.FC<{}> = () => {
    //const history = useHistory();
    return (
        <nav>
            <Link to="/">
                <img className="logo" alt="dreamworks logo" src={dreamworks} />
            </Link>
        </nav>
    );
};

export default Header;
