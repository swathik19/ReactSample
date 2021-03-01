import React, { useMemo } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { DefaultColumnFilter, SelectColumnFilter } from './Filter';
import TableContainer from './TableContainer';
import ValueAddListTableRowComponent from './ValueAddListTableRowComponents';

interface IValueAddListTableComponentProps {
  details: [];
}

export default class ValueAddListTableComponent extends React.Component<IValueAddListTableComponentProps> {

  public render() {
    const renderRowSubComponent = (row: { original: { name: { first: any; last: any; }; location: { city: any; street: any; postcode: any; }; picture: any; cell: any; }; }) => {
      const {
        name: { first, last },
        location: { city, street, postcode },
        picture,
        cell,
      } = row.original;
      return (
        <Card style={{ width: '18rem', margin: '0 auto' }}>
          <CardImg top src={picture.large} alt='Card image cap' />
          <CardBody>
            <CardTitle>
              <strong>{`${first} ${last}`} </strong>
            </CardTitle>
            <CardText>
              <strong>Phone</strong>: {cell} <br />
              <strong>Address:</strong>{' '}
              {`${street.name} ${street.number} - ${postcode} - ${city}`}
            </CardText>
          </CardBody>
        </Card>
      );
    };
    
    return (
      <div className="container">
        <h2>Value-Adds List</h2>
        {/* {this.getTable()} */}
        <TableContainer columns={this.getColumn()} data={this.props.details} renderRowSubComponent= {renderRowSubComponent}/>
      </div>
    );
  }

  private getColumn() {
    const columns =  [
        {
          Header: 'Team',
          accessor: 'Team'
        },
        {
          Header: 'Primary POC',
          accessor: 'Primary_POC',
        },
        {
          Header: 'Date',
          accessor: 'ProposedDate',
        },
        {
          Header: 'Opportunity Title',
          accessor: 'OpportunityTitle',
        },
        {
          Header: 'Idea Title',
          accessor: 'IdeaTitle',
        },
        {
          Header: 'Client Portfolio',
          accessor: 'ClientPortfolio',
          Filter: SelectColumnFilter,
          filter: 'equals' 
        },
        {
          Header: 'Status',
          accessor: 'Status',
          Filter: SelectColumnFilter,
          filter: 'equals' 
        },
        {
          Header: 'Actions',
          accessor: 'Actions',
          DefaultColumnFilter : false,
          disableFilters: true,
          disableSortBy: true,
          Cell: () => (<div> <a href=''> Edit </a> <a href=''> Delete </a></div>)
        }
        
      ];

    return columns;
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