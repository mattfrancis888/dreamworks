import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
const Routes: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route path="/" exact component={Body} />
            </Switch>
            <Footer />
        </React.Fragment>
    );
};

export default Routes;
