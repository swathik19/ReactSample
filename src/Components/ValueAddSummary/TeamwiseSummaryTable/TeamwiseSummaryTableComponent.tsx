import React from 'react';
import TeamwiseSummaryTableRowComponent from './TeamwiseSummaryTableRowComponents';

interface ITeamwiseSummaryTableComponentProps {
  details: [];
}

export default class TeamwiseSummaryTableComponent extends React.Component<ITeamwiseSummaryTableComponentProps> {

  public render() {
    return (
      <div className="container">
        <div className="font-weight-bold border"> Details Table </div>
        {this.getTable()}
      </div>
    );
  }

  private getTable(): JSX.Element {
    return (
      <div>
        <table className="table table-striped table-borderless border">
          <thead>
            <tr>
              <th scope="col">Team</th>
              <th scope="col">Primary_POC</th>
              <th scope="col">Workflow</th>
              <th scope="col">Status</th>
              <th scope="col">OpportunitySource_Category</th>
            </tr>
          </thead>
          <tbody>
            {this.getRows()}
          </tbody>
        </table>
      </div>
    );
  }

  private getRows() {
    var rows = this.props.details.map((user, i) => {
      return <TeamwiseSummaryTableRowComponent key={i} detail={user} />
    });
    return rows;
  }
}