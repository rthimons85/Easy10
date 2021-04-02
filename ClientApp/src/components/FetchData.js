import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Left hand of equation</th>
            <th>Option 1</th>
            <th>Options 2</th>
                    <th>Option 3</th>
                    <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.lefthandnumber}>
              <td>{forecast.leftNumber}</td>
                  <td>{forecast.answerOptions[0]}</td>
                  <td>{forecast.answerOptions[1]}</td>
                  <td>{forecast.answerOptions[2]}</td>
                  <td>{forecast.answerOptions[0]}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >Challenges</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('challenges');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
