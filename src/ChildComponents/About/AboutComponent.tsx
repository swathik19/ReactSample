import React from 'react';
import Layout from '../../Navigation/Layout';
import ChartComponent from '../Home/Chart/ChartComponent';

export default class AboutComponent extends React.Component {
    public render() {
        return (
            <Layout>
                <div className="container">
                <ChartComponent/>
                </div>
            </Layout>
        );
    }
}