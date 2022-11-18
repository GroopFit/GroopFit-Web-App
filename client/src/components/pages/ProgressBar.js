import React from "react";
import { connect } from 'react-redux';
import ReactApexChart from 'react-apexcharts'
import styled from 'styled-components';

const Tracker = styled.div`
  width: 50%;
  height: 20px;
  margin: 15px auto;
  background: rgb(43,43,43);
  borderRadius: 10px;
  boxShadow: inset 0 0 5px #000;
`

const ProgressInTracker = styled.div`
  width: 50%;
  height: 20px;
  margin: 15px auto;
  background: rgb(0,0,0);
  borderRadius: 5px;
  boxShadow: inset 0 0 5px #000;
`

class ProgressBar extends React.Component {
  percentageLimit = (min, value, max) => {
    return Math.min(Math.max(min, value), max);
  }
 render() {
  return (
    <Tracker>
      <ProgressInTracker percentage={this.percentageLimit(0, this.props.percentage, 100)} />
    </Tracker>
  )
 }
}

export default ProgressBar