import React from "react";

export default class NavSidebar extends React.Component {

    public render() {
        return (
            <React.Fragment>
                <div>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="#">Logo</a>
                            </div>
                            <div className="collapse navbar-collapse" id="myNavbar">
                                <ul className="nav navbar-nav">
                                    <li><a href="/home">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}
