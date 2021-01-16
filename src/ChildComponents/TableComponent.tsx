import React from 'react';
import DataTable from 'react-data-table-component';

interface ITableComponentProps {
  users: [];
}

interface ITableComponentState {
  columns: any;
}


export default class TableComponent extends React.Component<ITableComponentProps, ITableComponentState> {
  constructor(props: ITableComponentProps) {
    super(props);
    console.log(this.props.users);
    this.state = {
      columns: [
        {
          name: "Id",
          selector: "id",
          sortable: true
        },
        {
          name: "Name",
          selector: "name",
          sortable: true
        },
        {
          name: "City",
          selector: "address.city",
          sortable: true
        },
        {
          name: "Website",
          selector: "website",
          sortable: true
        }
      ]
    };
  }

  public render() {
    return (
      <div className="container">
        <DataTable
          title="Details"
          className="container"
          columns={this.state.columns}
          data={this.props.users}
          defaultSortField="id"
          pagination          
        />

      </div>
    );
  }
}