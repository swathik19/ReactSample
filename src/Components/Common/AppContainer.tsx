import React from "react";
import ValueAddSummaryPageComponent from "../valueAddSummary/valueAddSummaryPageComponent";
import NavSidebar from "./navSidebar";
import ValueAddListTableComponent from "../valueAddList/teamwiseSummaryTable/valueAddListTableComponent";

export interface IAppContainerState {
    canRenderHome: boolean;
}

export interface IAppContainerProps {
    getDetails: () => void;
    details?: any;
}

export default class AppContainer extends React.Component<IAppContainerProps, IAppContainerState> {
    constructor(props: IAppContainerProps) {
        super(props);
        this.state = { canRenderHome: true }
    }

    componentDidMount() {
        this.props.getDetails();
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
                                <ValueAddSummaryPageComponent details={this.props.details} /> :
                                <ValueAddListTableComponent details={this.props.details} />}
                        </section>
                    </main>
                </div>
            </div>
        );
    }
}