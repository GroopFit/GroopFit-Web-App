import React from "react";
import { connect } from 'react-redux';
import * as FA from "react-icons/fa";

class DashboardCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
       
        };
    }


    componentDidMount(){

    } 
    

  render() {
    return  <div className="dashboard-card" >
                <div className={`dashboard-card-icon-box icon-bg-${this.props.iconColor} flex center`} >
                    { this.props.activity === "running" ? <FA.FaRunning color={'#fff'} fontSize={'1.8rem'} /> : <></> }
                    { this.props.activity === "swimming" ? <FA.FaSwimmer color={'#fff'} fontSize={'1.8rem'} /> : <></> }
                    { this.props.activity === "biking" ? <FA.FaBiking color={'#fff'} fontSize={'1.8rem'} /> : <></> }
                </div>
                <div className="dashboard-card-inner" >
                    <div className="dashboard-card-top" >
                        <div className="dashboard-card-top-content">
                            <div className="dashboard-card-number" >{this.props.value + ' ' + this.props.units}</div>
                            <div className="dashboard-card-title" >Weekly Distance</div>
                        </div>
                    </div>
                    <div className="dashboard-card-bottom" >
                        <div className="dashboard-card-percentage" > {'+' + this.props.percentage + '%'} </div>
                        <div className="dashboard-card-bottom-text" > increase from last week  </div>
                    </div>
                </div>
            </div>
  }
}

const MapStateToProps = (state) => ({  });
export default connect(MapStateToProps)(DashboardCard)


