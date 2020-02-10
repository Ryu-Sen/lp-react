import React from "react";
import axios from "axios";
import "../assets/converter.css";

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      amount: 100,
      toCurrency: props.toCurrency,
      fromCurrency: props.fromCurrency,
    };
  }

  componentDidUpdate(prevProps){
    if(prevProps.fromCurrency !== this.state.fromCurrency){
      this.setState({fromCurrency: this.props.fromCurrency})
    }
    if(prevProps.toCurrency !== this.state.toCurrency){
      this.setState({toCurrency: this.props.toCurrency})
    }
  }

  /**
   * Fetch api from-to conversion using 2 parameters
   * then resolved using a simple math
   * @param {string} this.props.fromCurrency as base
   * @param {string} this.props.toCurrency as symbol
   */
  convertHandler = () => {
    if (this.props.fromCurrency !== this.props.toCurrency) {
      axios
        .get(
          `https://api.exchangeratesapi.io/latest?base=${this.props.fromCurrency}&symbols=${this.props.toCurrency}`
        )
        .then(response => {
          const result =
            this.state.amount * response.data.rates[this.props.toCurrency];
          this.setState({
            result: Intl.NumberFormat({
              style: "currency",
              currency: this.props.toCurrency
            }).format(result.toFixed(2))
          }); //International currency format fixed to 2 decimal points
        })
        .catch(error => {
          console.log("Oppsies", error.message);
        });
    } else {
      this.setState({
        result: "Nani! Why would you convert the same currency?"
      });
    }
  };
  /**
   * Drop-down changes update
   */
  selectHandler = event => {
    if (event.target.name === "from" && event.target.value !== this.state.fromCurrency) {
      this.props.updateFromCurrency(event.target.value);
    } else {
      if (event.target.name === "to" && event.target.value !== this.state.toCurrency) {
        this.props.updateToCurrency(event.target.value);
      }
    }
  };
  render() {
    return (
      <div className="Converter">
        <h2>
          <span>Currency</span>Converter
          <span role="img" aria-label="money">
            &#x1f4b5;
          </span>
        </h2>
        <div className="From">
          <input
            name="amount"
            type="text"
            value={this.state.amount}
            onChange={event => this.setState({ amount: event.target.value })}
          />
          <select
            name="from"
            onChange={event => this.selectHandler(event)}
            value={this.props.fromCurrency}
          >
            {this.props.currencies.map(cur => (
              <option key={cur}>{cur}</option>
            ))}
          </select>
          <select
            name="to"
            onChange={event => this.selectHandler(event)}
            value={this.props.toCurrency}
          >
            {this.props.currencies.map(cur => (
              <option key={cur}>{cur}</option>
            ))}
          </select>
          <button onClick={this.convertHandler}>Convert</button>
          {this.state.result && <h3>{this.state.result}</h3>}
        </div>
      </div>
    );
  }
}
export default Converter;
