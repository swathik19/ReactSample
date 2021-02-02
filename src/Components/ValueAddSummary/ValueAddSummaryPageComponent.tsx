import React from 'react';
import ValueAddSummaryInformationComponent from './valueAddSummaryInformation/valueAddSummaryInformationComponent';
import TeamwiseSummaryTableComponent from './teamwiseSummaryTable/teamwiseSummaryTableComponent';
import TeamWiseSummaryChartComponent from './teamwiseSummaryChart/teamwiseSummaryChartComponent';

interface IValueAddSummaryPageComponentProps {
  details: any;
}

export default class ValueAddSummaryPageComponent extends React.Component<IValueAddSummaryPageComponentProps> {

  public render() {
    if (this.props.details) {
      return (
          <div>
            <div className="container">
              <ValueAddSummaryInformationComponent details={this.props.details} />
              <TeamWiseSummaryChartComponent details={this.props.details} />
              <TeamwiseSummaryTableComponent details={this.props.details} />
            </div>
          </div>
      );
    }
    return (
      <div>
        <div className="container">
        </div>
      </div>
  );
  }
}
