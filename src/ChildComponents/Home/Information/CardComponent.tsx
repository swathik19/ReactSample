import React from 'react';

export interface ICardComponentProps {
    header: string;
    amount: number;
    class: string;
}

export default class CardComponent extends React.Component<ICardComponentProps> {
    public render() {
        var classValue = "card mb-6 shadow-sm " + this.props.class;
        return (
            <div className={classValue}>
                <div className="card-body">
                    <h3 className="card-title pricing-card-title">${this.props.amount}</h3>
                    {/* <small>/ yr</small> */}
                    <ul className="list-unstyled mt-2 mb-3">
                        <li>{this.props.header}</li>
                    </ul>
                </div>
            </div>
        );
    }
}