import axios from 'axios';
import React from 'react';
import './App.css';
import ChartComponent from './ChildComponents/ChartComponent';
import TableComponent from './ChildComponents/TableComponent';

interface IAppComponentState {
  users: [];
}

export default class App extends React.Component<any, IAppComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users: users });
      })
  }

  public render() {
    if (this.state.users) {
      return (
        <div>
          <div className="container">
          </div>
          <TableComponent users={this.state.users} />
          <ChartComponent/>
        </div>
      );
    }
    return null;
  }
}
