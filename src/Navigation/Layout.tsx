import React from "react";
import NavSidebar from "./NavSidebar";

export default class Layout extends React.Component {

    public render() {
        return (
            <div>
                <NavSidebar />
                <div>
                    <main>
                        <section>
                            <div>{this.props.children}</div>
                        </section>
                    </main>
                </div>
            </div>
        );
    }
}
