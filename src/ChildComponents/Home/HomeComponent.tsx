import React from 'react';
import InformationComponent from './Information/InformationComponent';
import TableComponent from './Table/TableComponent';

interface IHomeComponentProps {
  details: any;
}

export default class HomeComponent extends React.Component<IHomeComponentProps> {

  public render() {
    if (this.props.details) {
      return (
          <div>
            <div className="container">
              <InformationComponent details={this.props.details} />
              <TableComponent details={this.props.details} />
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
