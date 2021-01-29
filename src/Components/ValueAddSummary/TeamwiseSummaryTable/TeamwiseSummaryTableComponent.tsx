import React from 'react';
import TeamwiseSummaryTableRowComponent from './TeamwiseSummaryTableRowComponents';

interface ITeamwiseSummaryTableComponentProps {
  details: [];
}

export default class TeamwiseSummaryTableComponent extends React.Component<ITeamwiseSummaryTableComponentProps> {

  public render() {
    return (
      <div className="container">
        <h2>Team-wise Savings Summary</h2>
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
              <th scope="col">Target</th>
              <th scope="col">Cognizant Revenue</th>
              <th scope="col">Customer Revenue</th>
              <th scope="col">Cognizant Savings (Hard $)</th>
              <th scope="col">Customer Savings (Hard $)</th>
              <th scope="col">Cognizant Savings (Soft $)</th>
              <th scope="col">Customer Savings (Soft $)</th>
              <th scope="col">Target Achieved</th>
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
    interface IData {
      teamName: string;
      cognizantRevenue: number;
      customerRevenue: number;
      cognizantSavingsInHardDollar: number;
      customerSavingsInHardDollar: number;
      cognizantSavingsInSoftDollar: number;
      customerSavingsInSoftDollar: number;
    }

    var summaryData = new Array<IData>();
    const teamList = this.props.details.map(item => item["Team"]).filter((value, index, self) => self.indexOf(value) === index);

    teamList.forEach(team => {
        var cognizantRevenue = this.props.details.filter(item=> item["Team"] === team)
                                              .reduce((sum, current) => {
                                                return sum + current["ForecastedBenefit_CognizantReven"];
                                              }, 0);
        var customerRevenue = this.props.details.filter(item=> item["Team"] === team)
                                              .reduce((sum, current) => {
                                                  return sum + current["ForecastedBenefit_CustomerRevenu"];
                                                }, 0);
        var cognizantSavingsInHardDollar = this.props.details.filter(item=> item["Team"] === team)
                                              .reduce((sum, current) => {
                                                return sum + current["ForecastedBenefit_CognizantCostS"];
                                              }, 0);
        var customerSavingsInHardDollar = this.props.details.filter(item=> item["Team"] === team)
                                              .reduce((sum, current) => {
                                                  return sum + current["ForecastedBenefit_CustomerCostSa"];
                                                }, 0);
        var cognizantSavingsInSoftDollar = this.props.details.filter(item=> item["Team"] === team)
                                              .reduce((sum, current) => {
                                                return sum + current["ForecastedBenefit_CognizantCostS0"];
                                              }, 0);
        var customerSavingsInSoftDollar = this.props.details.filter(item=> item["Team"] === team)
                                              .reduce((sum, current) => {
                                                return sum + current["ForecastedBenefit_CustomerCostSa0"];
                                              }, 0);
        var data : IData = { teamName: team, cognizantRevenue, customerRevenue, cognizantSavingsInHardDollar, customerSavingsInHardDollar, cognizantSavingsInSoftDollar, customerSavingsInSoftDollar };
        summaryData.push(data);       
    });

    var rows = summaryData.map((item, i) => {
      return <TeamwiseSummaryTableRowComponent key={i} detail={item} />
    });
    return rows;
  }
}