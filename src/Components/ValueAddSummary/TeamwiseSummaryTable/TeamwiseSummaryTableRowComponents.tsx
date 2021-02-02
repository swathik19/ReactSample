import React from 'react';
import TeamwiseSummaryTableChartComponent from './TeamwiseSummaryTableChartComponent';

interface ITeamwiseSummaryTableRowComponentProps {
    detail: any;
}

export default class TeamwiseSummaryTableRowComponent extends React.Component<ITeamwiseSummaryTableRowComponentProps, any> {

    public render() {
        return (
            <tr>
                <td className="text-info">{this.props.detail.teamName}</td>
                <td>TBD</td>
                <td>${this.props.detail.cognizantRevenue}</td>
                <td>${this.props.detail.customerRevenue}</td>
                <td>${this.props.detail.cognizantSavingsInHardDollar}</td>
                <td>${this.props.detail.customerSavingsInHardDollar}</td>
                <td>${this.props.detail.cognizantSavingsInSoftDollar}</td>
                <td>${this.props.detail.customerSavingsInSoftDollar}</td>
                <td>TBD</td>
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