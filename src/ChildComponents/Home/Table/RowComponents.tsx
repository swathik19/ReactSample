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
                <td className="text-info"><a href="#">{this.props.user.id}</a></td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.address.city}</td>
                <td>{this.props.user.website}</td>
                <td>{this.getChart()}</td>
            </tr>
        );
    }

    private getChart() {
        return (
            <div>
                <div className="row">
                    <TableChartComponent id={this.props.user.id} />
                </div>
            </div>
        );
    }
}