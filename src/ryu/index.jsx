import React from "react";
import axios from "axios";
import Converter from "./components/Converter";
import Chart from "./components/Chart";

class Currency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toCurrency: "PHP",
      fromCurrency: "JPY",
      currencies: []
    };
  }
  onNewToCurrency = toCurrency => {
    if (this.state.toCurrency !== toCurrency) {
      this.setState({ toCurrency });
    }    
  };
  onNewFromCurrency = fromCurrency => {
    if (this.state.fromCurrency !== fromCurrency) {
      this.setState({ fromCurrency });  
    }
    
  };
  /**
   * Fetching the currency symbols for the drop-downs
   */
  componentDidMount() {
    axios
      .get(
        `https://api.exchangeratesapi.io/latest?base=${this.state.fromCurrency}`
      )
      .then(response => {
        let currencyAr = [];
        for (const key in response.data.rates) {
          currencyAr.push(key);
        }
        this.setState({ currencies: currencyAr });
      })
      .catch(err => {
        console.log("oppps", err);
      });
  }
  render() {
    return (
      <div>
        <Converter
          toCurrency={this.state.toCurrency}
          fromCurrency={this.state.fromCurrency}
          currencies={this.state.currencies}
          updateFromCurrency={this.onNewFromCurrency}
          updateToCurrency={this.onNewToCurrency}
        ></Converter>
        <Chart
          toCurrency={this.state.toCurrency}
          fromCurrency={this.state.fromCurrency}
          currencies={this.state.currencies}
        ></Chart>
      </div>
    );
  }
}

export default Currency;
