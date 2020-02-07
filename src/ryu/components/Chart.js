import React, { Component } from "react";
import axios from "axios";
import { Bar, Line } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toCurrency: "JPY",
      fromCurrency: "PHP",
      latestDate: "",
      historicalDates: [],
      historicalValues: [],
      latestValues: [],
      historyData: {},
      chartData: {},
      charLegends: []
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: false,
    legendPosition: "right"
  };

  componentDidMount() {
    this.getHistoryData();
    this.getLatestData();
  }

  UNSAFE_componentWillReceiveProps() { //this freaking thing...
    if (this.state.fromCurrency !== this.props.fromCurrency) {
      this.setState({
        fromCurrency: this.props.fromCurrency
      })
      this.getHistoryData();
      this.getLatestData();
    }if(this.state.toCurrency !== this.props.toCurrency){
      this.setState({
        toCurrency: this.props.toCurrency
      })
      this.getHistoryData();
    }
  }

  getHistoryData() {
    axios
      .get(
        `https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-03-01&base=${this.state.toCurrency}&symbols=${this.state.fromCurrency}`
      )
      .then(response => {
        const dates = [];
        const valueAr = [];
        for (const key in response.data.rates) {
          dates.push(key);
          valueAr.push(response.data.rates[key][this.state.fromCurrency]);
        }
        this.setState({ historicalDates: dates, historicalValues: valueAr });
        this.setHistoricalData();
      })
      .catch(err => {
        console.log("oppps history api error", err);
      });
  }
  setHistoricalData() {
    this.setState({
      historyData: {
        labels: this.props.historicalDates,
        datasets: [
          {
            label: "Value",
            data: this.state.historicalValues,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
            ]
          }
        ]
      }
    });
  }

  getLatestData() {
    axios
      .get(
        `https://api.exchangeratesapi.io/latest?base=${this.state.fromCurrency}`
      )
      .then(response => {
        let valueAr = [];
        for (const key in response.data.rates) {
          if (key === "EUR" && this.state.fromCurrency === "EUR") {
            valueAr.push(1);
          } else {
            valueAr.push(response.data.rates[key]);
          }
        }
        this.setState({
          latestDate: response.data.date,
          latestValues: valueAr,
          charLegends: this.props.currencies
        });
        this.setChartData();
      });
  }

  setChartData() {
    this.setState({
      chartData: {
        labels: this.state.charLegends,
        datasets: [
          {
            label: "Value",
            data: this.state.latestValues,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)"
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text:
                "Currency exchange based on " +
                this.state.fromCurrency +
                " as of " +
                this.state.latestDate,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />

        <Line
          data={this.state.historyData}
          options={{
            title: {
              display: this.props.displayTitle,
              text:
                "Currency history of " +
                this.state.fromCurrency +
                " against " +
                this.state.toCurrency,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
