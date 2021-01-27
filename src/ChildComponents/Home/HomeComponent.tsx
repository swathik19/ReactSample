import React from 'react';
import Layout from '../../Navigation/Layout';
import InformationComponent from './Information/InformationComponent';
import TableComponent from './Table/TableComponent';
import * as data from '../../stub/data.json';
import axios from 'axios';
import ChartComponent from './Chart/ChartComponent';

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
    if (process.env.NODE_ENV === "development") {
      let value = data.value;
      this.setState({ details: value });
    }
    else {
      axios.get("https://cognizantonline.sharepoint.com/sites/TestWeb/_api/lists/getbytitle('ValueAddsList')/items", {
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(res => {
          const value = res.data.value;
          this.setState({ details: value });
        })
    }
  }

  public render() {
    if (this.state.details) {
      return (
        <Layout>
          <div>
            <div className="container">
              <InformationComponent />
              {/* <TableComponent details={this.state.details} /> */}
            </div>
          </div>
          <ChartComponent />
        </Layout>
      );
    }
    return (
      <Layout>
      </Layout>
    );
  }
}
