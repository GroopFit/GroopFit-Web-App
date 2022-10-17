import React from "react";
import { connect } from 'react-redux';
import ReactApexChart from 'react-apexcharts'

import * as FA from "react-icons/fa"; 


class SmallGraphCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 

          options: {
            chart: {
              id: 'spark1',
              group: 'sparks',
              type: 'line',
              height: 80,
              sparkline: {
                enabled: true
              },
              dropShadow: {
                enabled: true,
                top: 1,
                left: 1,
                blur: 2,
                opacity: 0.2,
              }
            },
            stroke: {
              curve: 'smooth'
            },
            markers: {
              size: 0
            },
            grid: {
              padding: {
                top: 20,
                bottom: 10,
                left: 110
              }
            },
            colors: ['#fff'],
            tooltip: {
              x: {
                show: false
              },
              y: {
                title: {
                  formatter: function formatter(val) {
                    return '';
                  }
                }
              }
            }
          }
        };
    }


    componentDidMount(){

    } 

    dropDownToggle = () => {
        this.setState({ dropdownToggle: !this.state.dropdownToggle })
    }
    

    render() {
        return  (
            <div className="two-by-two-e " >
                <div className={`new-dash-card-full ${this.props.color}-gradient flex center`} > 
                    <div className="two-by-two-chart"> 
                        <ReactApexChart options={this.state.options} series={ [{data: this.props.data}] } type="line" height={100} width={200} />
                    </div>
                    <div className="two-by-two-info">
                        <div className="two-by-two-info-num">{this.props.data.reduce((a, b) => a + b)}</div>
                        <div className="two-by-two-info-units">{this.props.units}</div>
                    </div>
                    <div className="two-by-two-icon-box flex center">
                        { this.props.activity === "running" ? <FA.FaRunning color={'#fff'} fontSize={'1.80rem'} /> : <></> }
                        { this.props.activity === "swimming" ? <FA.FaSwimmer color={'#fff'} fontSize={'1.80rem'} /> : <></> }
                        { this.props.activity === "biking" ? <FA.FaBiking color={'#fff'} fontSize={'1.80rem'} /> : <></> }
                        { this.props.activity === "walking" ? <FA.FaWalking color={'#fff'} fontSize={'1.80rem'} /> : <></> }
                    </div>
                </div>
            </div>
        )
    } 
}

export default SmallGraphCard