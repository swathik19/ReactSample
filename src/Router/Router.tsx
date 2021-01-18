import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ChartComponent from "../ChildComponents/ChartComponent";
import HomeComponent from "../ChildComponents/HomeComponent";

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
                    <Route exact path="/chart">
                        <ChartComponent />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
};


