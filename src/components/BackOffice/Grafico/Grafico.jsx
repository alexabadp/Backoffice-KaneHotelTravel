import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    const aleatorio = [44, 55, 41, 17, 15].map(el =>(
      Math.floor(Math.random() * el)
    ));

    this.state = {
      options: {},
      series: aleatorio,
      labels: ['A', 'B', 'C', 'D', 'E']
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}

export default Donut;