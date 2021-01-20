import React from 'react';

export interface ICardComponentProps {
    header: string;
    amount: number;
}

export default class CardComponent extends React.Component<ICardComponentProps> {
    public render() {
        return (
            <div className="card mb-4 shadow-sm">
                <div className="card-body bg-red">
                    <h2 className="card-title pricing-card-title">${this.props.amount}<small className="text-muted">/ yr</small></h2>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>{this.props.header}</li>
                    </ul>
                </div>
            </div>
        );
    }
}