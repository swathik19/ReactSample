import React from 'react';
import CardComponent from './CardComponent';

export default class InformationComponent extends React.Component {
    public render() {
        return (
            <div className="container">
                <div className="card-deck mb-3 text-center">
                    <CardComponent header={"Forecasted Benefit - Cognizant Revenue"} amount={50000} class="text-white bg-dark" />
                    <CardComponent header={"Forecasted Benefit - Customer Revenue"} amount={250000} class="bg-light"/>
                    <CardComponent header={"Forecasted Benefit - Cognizant Savings (Hard Dollar)"} amount={350000} class="text-white bg-dark"/>
                    <CardComponent header={"Forecasted Benefit - Customer Savings (Hard Dollar)"} amount={250000} class="bg-light"/>
                    <CardComponent header={"Forecasted Benefit - Cognizant Savings (Soft Dollar)"} amount={40000} class="text-white bg-dark"/>
                    <CardComponent header={"Forecasted Benefit - Customer Savings (Soft Dollar)"} amount={10000} class="bg-light"/>
                </div>
            </div>
        );
    }
}