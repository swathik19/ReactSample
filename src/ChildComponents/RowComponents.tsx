import React from 'react';
import ChartComponent from './ChartComponent';

interface IRowComponentProps {
    user: any;
    id: number;
}

export default class RowComponent extends React.Component<IRowComponentProps, any> {

    public render() {
        return (
            <tr id={this.props.user.id}>
                <th scope="row">{this.props.user.id}</th>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.address.city}</td>
                <td>{this.props.user.website}</td>
                <td>ChartComponent</td>
            </tr>
        );
    }
}