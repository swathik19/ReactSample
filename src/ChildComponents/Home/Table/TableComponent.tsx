import React from 'react';
import RowComponent from './RowComponents';

interface ITableComponentProps {
  users: [];
}

export default class TableComponent extends React.Component<ITableComponentProps> {

  public render() {
    return (
      <div className="container">
        {this.getTable()}
      </div>
    );
  }

  private getTable(): JSX.Element {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th scope="col">Website</th>
              <th scope="col">Chart</th>
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
    var rows = this.props.users.map((user, id) => {
      return <RowComponent user={user} id={id} />
    });
    return rows;
  }
}