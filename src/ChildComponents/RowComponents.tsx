import React from 'react';
import TableChartComponent from './TableChartComponent';

interface IRowComponentProps {
    user: any;
    id: number;
}

export default class RowComponent extends React.Component<IRowComponentProps, any> {

    public render() {
        return (
            <tr id={this.props.user.id}>
                <td className="col-md-2">{this.props.user.id}</td>
                <td className="col-md-2">{this.props.user.name}</td>
                <td className="col-md-2">{this.props.user.address.city}</td>
                <td className="col-md-2">{this.props.user.website}</td>
                <td className="col-md-2">{this.getChart()}</td>
            </tr>
        );
    }

    private getChart() {
        return (
            <div className="col-md-2">
                <div className="row" >
                <TableChartComponent id={this.props.user.id} />
                </div></div>
        );
    }
}