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
                text: 'Total fruit consumption, grouped by gender'
            },

            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },

            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Number of fruits'
                }
            },

            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },

            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2],
                stack: 'male'
            }, {
                name: 'Joe',
                data: [3, 4, 4, 2, 5],
                stack: 'male'
            }, {
                name: 'Jane',
                data: [2, 5, 6, 2, 1],
                stack: 'female'
            }, {
                name: 'Janet',
                data: [3, 0, 4, 4, 3],
                stack: 'female'
            }],
            renderTo:"mediamix#{akid.to_s}",
            credits: {
                enabled: false
            }
        };
    }
}