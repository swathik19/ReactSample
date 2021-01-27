import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

export interface ITeamwiseSummaryTableChartComponentProps {
    id: string;
}

export default class TeamwiseSummaryTableChartComponent extends React.Component<ITeamwiseSummaryTableChartComponentProps> {

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
                width: 50,
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
                data: [5]
            }, {
                showInLegend: false,
                data: [2]
            }, {
                showInLegend: false,
                data: [3]
            }],
            credits: {
                enabled: false
            }
        };
    }
}