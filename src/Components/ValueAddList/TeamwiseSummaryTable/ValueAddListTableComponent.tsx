import React from 'react';
import ValueAddListTableRowComponent from './valueAddListTableRowComponents';

interface IValueAddListTableComponentProps {
  details: [];
}

export default class ValueAddListTableComponent extends React.Component<IValueAddListTableComponentProps> {

  public render() {
    return (
      <div className="container">
        <h2>Value-Adds List</h2>
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
              <th scope="col">Primary POC</th>
              <th scope="col">Date</th>
              <th scope="col">Opportunity Title</th>
              <th scope="col">Idea Title</th>
              <th scope="col">Client Portfolio</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
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
      return <ValueAddListTableRowComponent key={i} detail={user} />
    });
    return rows;
  }
}