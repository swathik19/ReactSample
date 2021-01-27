import React from 'react';
import ValueAddSummaryInformationComponent from '../ValueAddSummary/ValueAddSummaryInformation/ValueAddSummaryInformationComponent';
import TeamwiseSummaryTableComponent from '../ValueAddSummary/TeamwiseSummaryTable/TeamwiseSummaryTableComponent';

interface IHomeComponentProps {
  details: any;
}

export default class HomeComponent extends React.Component<IHomeComponentProps> {

  public render() {
    if (this.props.details) {
      return (
          <div>
            <div className="container">
              <ValueAddSummaryInformationComponent details={this.props.details} />
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
