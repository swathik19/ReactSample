import React from 'react';

export interface ICardComponentProps {
    header: string;
    amount: number;
    class: string;
}

export default class CardComponent extends React.Component<ICardComponentProps> {
    public render() {
        var classValue = "card mb-4 shadow-sm " + this.props.class;
        return (
            <div className={classValue}>
                <div className="card-body">
                    <h2 className="card-title pricing-card-title">${this.props.amount}<small>/ yr</small></h2>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>{this.props.header}</li>
                    </ul>
                </div>
            </div>
        );
    }
}