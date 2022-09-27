import React from "react";
import { connect } from 'react-redux';
import * as FA from "react-icons/fa";
import * as IoIcons from 'react-icons/io';
import * as GoIcons from 'react-icons/go';
import * as HiIcons from 'react-icons/hi';

import DashboardCard from '../../DashboardCard/index'
import FitnessTab from '../../DashboardFitnessTab/index'

class DashboardOverview extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
       
        };
    }


    componentDidMount(){

    } 
    

  render() {
    return  <div className="dash-inner-wrapper">
                <div className="dashboard-layout-1 full-wh">
                   
                </div>
            </div>
  }
}

const MapStateToProps = (state) => ({  });
export default connect(MapStateToProps)(DashboardOverview)