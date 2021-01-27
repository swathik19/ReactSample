import React from 'react';
import TeamwiseSummaryTableChartComponent from './TeamwiseSummaryTableChartComponent';

interface ITeamwiseSummaryTableRowComponentProps {
    detail: any;
}

export default class TeamwiseSummaryTableRowComponent extends React.Component<ITeamwiseSummaryTableRowComponentProps, any> {

    public render() {
        return (
            <tr>
                <td className="text-info">{this.props.detail.Team}</td>
                <td>{this.props.detail.Primary_POC}</td>
                <td>{this.props.detail.Workflow}</td>
                <td>{this.props.detail.Status}</td>
                <td>{this.props.detail.OpportunitySource_Category}</td>
            </tr>
        );
    }

    private getChart() {
        return (
            <div>
                <div className="row">
                    <TeamwiseSummaryTableChartComponent id={this.props.detail.id} />
                </div>
            </div>
        );
    }
}