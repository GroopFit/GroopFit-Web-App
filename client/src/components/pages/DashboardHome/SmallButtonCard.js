import React from "react";
import { connect } from 'react-redux';
import ReactApexChart from 'react-apexcharts'

import * as HI from "react-icons/hi"; 


class SmallButtonCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 

    
        }
    };

    componentDidMount(){

    } 

    render() {
        return  (
            <div className="two-by-two-e" >
                <div className={`new-dash-card-full ${this.props.color}-gradient flex center`} > 
                    <div className="two-by-two-icon-box flex center">
                        { this.props.children }
                    </div>
                    <div className="two-by-two-title-box">
                        <div className="two-by-two-title white-text text-shadow ">{this.props.title}</div>
                        <div className="two-by-two-subtitle white-text text-shadow ">{this.props.subtitle}</div>
                        {/* -- Remaing */}
                    </div>
                    <button className="flex center" onClick={() => alert("This Functionality is Incomplete")} >{this.props.buttonText}</button>
                </div>
            </div>
        )
    } 
}

export default SmallButtonCard