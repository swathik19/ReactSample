import React from 'react';

interface IValueAddListTableRowComponentProps {
    detail: any;
}

export default class ValueAddListTableRowComponent extends React.Component<IValueAddListTableRowComponentProps, any> {

    public render() {
        return (
            <tr>
                <td>{this.props.detail.Team}</td>
                <td>{this.props.detail.Primary_POC}</td>
                <td>{this.props.detail.ProposedDate}</td>
                <td>{this.props.detail.OpportunityTitle}</td>
                <td>{this.props.detail.IdeaTitle}</td>
                <td>{this.props.detail.ClientPortfolio}</td>
                <td>{this.props.detail.Status}</td>
                <td><a href="">Edit</a>  <a href="">Delete</a></td>
            </tr>
        );
    }
}