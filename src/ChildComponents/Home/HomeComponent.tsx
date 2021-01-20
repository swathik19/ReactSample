import axios from 'axios';
import React from 'react';
import Layout from '../../Navigation/Layout';
import ChartComponent from './Chart/ChartComponent';
import InformationComponent from './Information/InformationComponent';
import TableComponent from './Table/TableComponent';

interface IHomeComponentState {
  users: [];
}

export default class HomeComponent extends React.Component<any, IHomeComponentState> {
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
        <Layout>
          <div>
            <div className="container">
              <InformationComponent />
              <TableComponent users={this.state.users} />
              <ChartComponent />
            </div>
          </div>
        </Layout>
      );
    }
    return null;
  }
}