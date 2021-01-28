import React from 'react';
import ValueAddSummaryInformationComponent from './ValueAddSummaryInformation/ValueAddSummaryInformationComponent';
import TeamwiseSummaryTableComponent from './TeamwiseSummaryTable/TeamwiseSummaryTableComponent';
import TeamWiseSummaryChartComponent from './TeamWiseSummaryChart/TeamWiseSummaryChartComponent';

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
              <TeamwiseSummaryTableComponent details={this.props.details} />
              <TeamWiseSummaryChartComponent details={this.props.details} />
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
