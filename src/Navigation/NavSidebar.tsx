import React from "react";

export default class NavSidebar extends React.Component {

    public render() {
        return (
            <React.Fragment>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand">Logo</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                                <a className="nav-link" href="/about">About</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}
