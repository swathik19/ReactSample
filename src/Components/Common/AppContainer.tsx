import axios from "axios";
import React from "react";
import ValueAddSummaryPageComponent from "../ValueAddSummary/ValueAddSummaryPageComponent";
import NavSidebar from "./NavSidebar";
import * as data from '../../stub/data.json';
import TeamWiseSummaryChartComponent from "../ValueAddSummary/TeamWiseSummaryChart/TeamWiseSummaryChartComponent";
import ValueAddListTableComponent from "../ValueAddList/TeamwiseSummaryTable/ValueAddListTableComponent";

export interface IAppContainerState {
    canRenderHome: boolean;
    details: any;
}

export default class AppContainer extends React.Component<any, IAppContainerState> {
    constructor(props: any) {
        super(props);
        this.state = { canRenderHome: true, details: null }
    }

    componentDidMount() {
        if (process.env.NODE_ENV === "development") {
            let value = data.value;
            this.setState({ details: value });
        }
        else {
            axios.get("https://cognizantonline.sharepoint.com/sites/TestWeb/_api/lists/getbytitle('ValueAddsList')/items", {
                headers: {
                    "Content-Type": "application/json"
                },
            })
                .then(res => {
                    const value = res.data.value;
                    this.setState({ details: value });
                })
        }
    }


    public render() {
        return (
            <div>
                <NavSidebar onNavClick={(value: boolean) => {
                    this.setState({
                        canRenderHome: value
                    })
                }} />
                <br />
                <div>
                    <main>
                        <section>
                            {this.state.canRenderHome ?
                                <ValueAddSummaryPageComponent details={this.state.details} /> :
                                <ValueAddListTableComponent details={this.state.details} />}
                        </section>
                    </main>
                </div>
            </div>
        );
    }
}