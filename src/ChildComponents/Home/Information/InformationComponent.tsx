import React from 'react';
import CardComponent from './CardComponent';

interface IInformationComponentProps {
    details: [];
}

export default class InformationComponent extends React.Component<IInformationComponentProps> {
    public render() {
        return (
            <div className="container">
                <div className="card-deck mb-3 text-center">
                    {this.getCardSectionDetails('Forecasted Benefit - Cognizant Revenue', 'ForecastedBenefit_CognizantReven', 'text-white bg-dark')}
                    {this.getCardSectionDetails('Forecasted Benefit - Customer Revenue', 'ForecastedBenefit_CustomerRevenu', 'bg-light')}
                    {this.getCardSectionDetails('Forecasted Benefit - Cognizant Savings (Hard Dollar)', 'ForecastedBenefit_CognizantCostS', 'text-white bg-dark')}
                    {this.getCardSectionDetails('Forecasted Benefit - Customer Savings (Hard Dollar)', 'ForecastedBenefit_CustomerCostSa', 'bg-light')}
                    {this.getCardSectionDetails('Forecasted Benefit - Cognizant Savings (Soft Dollar)', 'ForecastedBenefit_CognizantCostS0', 'text-white bg-dark')}
                    {this.getCardSectionDetails('Forecasted Benefit - Customer Savings (Soft Dollar)', 'ForecastedBenefit_CustomerCostSa0', 'bg-light')}
                </div>
            </div>
        );
    }

    private getCardSectionDetails(cardTitle: string, cardFieldValue: string, className: string) {
        var benefitValue = this.props.details.reduce((sum, item) => sum + item[cardFieldValue], 0);
        return <CardComponent header={cardTitle} amount={benefitValue} class={className} />
    }
}