import React from "react";
import logo from './valueadds_logo.png';

export interface INavSidebarProps {
    onNavClick: (value: boolean) => void;
}

export default class NavSidebar extends React.Component<INavSidebarProps> {

    public render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-white bg-dark">
                    {/* <div className="navbar-brand text-white">Logo</div> */}
                    <img src={logo} height="50px" width="50px" />
                    <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <div className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => { this.props.onNavClick(true) }}>Home <span className="sr-only">(current)</span></div>
                            <div className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => { this.props.onNavClick(false) }}>ValueAddList</div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
