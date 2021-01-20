import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutComponent from "../ChildComponents/About/AboutComponent";
import HomeComponent from "../ChildComponents/Home/HomeComponent";

export default class Router extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <HomeComponent />
                    </Route>
                    <Route exact path="/home">
                        <HomeComponent />
                    </Route>
                    <Route exact path="/About">
                        <AboutComponent />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
};


