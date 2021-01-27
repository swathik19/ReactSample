import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

export default class ChartComponent extends React.Component {
    public render() {
        return (
            <div className="container">
                <HighchartsReact
                    options={this.getChartDetails()}
                    highcharts={Highcharts}
                />
            </div>
        );
    }

    public getChartDetails() {
        return {

            chart: {
                type: 'column'
            },

            title: {
                text: 'Forecasted Benefits'
            },

            xAxis: {
                categories: ['Cognizant Revenue', 'Customer Revenue', 'Cognizant Savings (Hard)', 'Customer Savings (Hard)', 'Cognizant Savings (Soft)', 'Customer Savings (Soft)']
            },

            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Benefits in Dollars'
                }
            },

            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },

            series: [{
                name: 'QA',
                data: [25000, 5000, 20000, 75000, 5000, 4300],
                stack: 'QA'
            }, {
                name: 'CDE',
                data: [30000, 8000, 21000, 35000, 5000, 4300],
                stack: 'CDE'
            }, {
                name: 'BA',
                data: [10000, 15000, 22000, 15000, 5000, 4300],
                stack: 'BA'
            }],
            renderTo:"mediamix#{akid.to_s}",
            credits: {
                enabled: false
            }
        };
    }
}