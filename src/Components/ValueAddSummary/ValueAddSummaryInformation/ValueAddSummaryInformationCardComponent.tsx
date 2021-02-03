import React from 'react';
import CountUp from 'react-countup';

export interface IValueAddSummaryInformationCardComponentProps {
    header: string;
    amount: number;
    class: string;
}

export default class ValueAddSummaryInformationCardComponent extends React.Component<IValueAddSummaryInformationCardComponentProps> {
    public render() {
        var classValue = "card mb-6 shadow-sm " + this.props.class;
        return (
            <div className={classValue}>
                <div className="card-body">
                    <h3 className="card-title pricing-card-title">
                    <CountUp
                            end={this.props.amount}
                            duration={2.5}
                            prefix="$ "
                        />
                    </h3>
                    {/* <small>/ yr</small> */}
                    <ul className="list-unstyled mt-2 mb-3">
                        <li>{this.props.header}</li>
                    </ul>
                </div>
            </div>
        );
    }
}