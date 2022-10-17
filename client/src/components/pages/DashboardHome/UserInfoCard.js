import React from "react";
import { connect } from 'react-redux';
import ReactApexChart from 'react-apexcharts'

class UserInfoCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    componentDidMount(){

    } 

    render() {
        return  (
            <div className="new-dashboard-card overview-user-info-dashboard-card flex flow-col" >
                <div className="overview-user-info-card-header">
                    <img alt="" src={this.props.userPicture} />
                    <div className="overview-user-info-card-header-text" >
                        <b>{ this.props.fullName }</b>
                        <p>GroopFit Admin</p>
                    </div>     
                </div>
                <div className="overview-user-info-stats-wrapper">
                    <div className="overview-user-info-stats-contaner">
                        <div className="overview-user-info-stats-title">Value 1</div>
                        <div className="overview-user-info-stats-box flex center">{"150" + " " + "Units"}</div>
                    </div>
                    <div className="overview-user-info-stats-contaner">
                        <div className="overview-user-info-stats-title">Value 2</div>
                        <div className="overview-user-info-stats-box flex center">{"12" + " " + "Units"}</div>
                    </div>
                    <div className="overview-user-info-stats-contaner">
                        <div className="overview-user-info-stats-title">Value 3</div>
                        <div className="overview-user-info-stats-box flex center">{"5" + " " + "Units"}</div>
                    </div>
                </div>
                <div className="overview-user-info-section" >
                    <div className="overview-user-info-section-title">Title Goes Here</div>
                    <div className="overview-user-info-section-content" />
                </div>
                <div className="overview-user-info-section" >
                    <div className="overview-user-info-section-title">Title Goes Here</div>
                    <div className="overview-user-info-section-content" />
                </div>

    
            </div>
   
    )}
}

export default UserInfoCard;