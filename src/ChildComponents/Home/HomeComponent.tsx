import React from 'react';
import Layout from '../../Navigation/Layout';
import InformationComponent from './Information/InformationComponent';
import TableComponent from './Table/TableComponent';
import * as data from '../../stub/data.json';

interface IHomeComponentState {
  details: any;
}

export default class HomeComponent extends React.Component<any, IHomeComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      details: null
    };
  }

  componentDidMount() {
    let value = data.value;
    this.setState({ details: value });
  }

  public render() {
    if (this.state.details) {
      return (
        <Layout>
          <div>
            <div className="container">
              <InformationComponent />
              <TableComponent details={this.state.details} />
            </div>
          </div>
        </Layout>
      );
    }
    return (
      <Layout>
      </Layout>
    );
  }
}
