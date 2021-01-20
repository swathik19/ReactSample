import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

export interface ITableChartComponentProps {
    id: string;
}

export default class TableChartComponent extends React.Component<ITableChartComponentProps> {

    public render() {
        return (
            <HighchartsReact
                options={this.getChartDetails()}
                highcharts={Highcharts}
                id={this.props.id}
            />
        );
    }

    public getChartDetails() {

        return {
            chart: {
                type: 'bar',
                height: 40,
                length: 100
            },
            title: false,
            xAxis: {
                visible: false
            },
            yAxis: {
                visible: false
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                showInLegend: false,
                data: [50]
            }, {
                showInLegend: false,
                data: [20]
            }, {
                showInLegend: false,
                data: [30]
            }],
            credits: {
                enabled: false
            }
        };
    }
}