import React from 'react';
import CardComponent from './CardComponent';

export default class InformationComponent extends React.Component {
    public render() {
        return (
            <div className="container">
                <div className="card-deck mb-3 text-center">
                    <CardComponent header={"Hard Dollars Saved"} amount={50000} class="text-white bg-dark" />
                    <CardComponent header={"Soft Dollars Saved"} amount={250000} class="bg-light"/>
                    <CardComponent header={"Hard Dollars Saved For Customer"} amount={350000} class="text-white bg-dark"/>
                    <CardComponent header={"Soft Dollars Saved For Cognizant"} amount={250000} class="bg-light"/>
                </div>
            </div>
        );
    }
}