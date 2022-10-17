import React from "react";
import { connect } from 'react-redux';
import * as AiIcons from "react-icons/ai";
import * as FA from "react-icons/fa";


import GroopLeaderboardElement from "./GroopLeaderboardElement"


class GroopLeaderboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
          
        };
    }


    componentDidMount(){

    } 

    

    render() {
        return  (
        <div className="groopfit-container" >
            <div className="leaderboard-header" >
                <div className="leaderboard-header-l">
                <div className="leaderboard-l-box leaderboard-title">Leaderboard</div>
                <div className="leaderboard-l-box flex flow-row"> 
                    <div className="leaderboard-picker"> Today </div>
                    <div className="leaderboard-picker"> Week </div>
                    <div className="leaderboard-picker"> Month </div>
                    <div className={`leaderboard-picker icon-bg-${"blue"} primary-text`} > All Time </div>
                </div>
                </div>
                <div className="leaderboard-header-r">
                <div className={`leaderboard-activity-icon icon-bg-${"green"} flex center`} >
                    <FA.FaRunning color={'#fff'} fontSize={'2.0rem'} />
                </div>
                </div>
            </div>
            <div className="dashboard-horizontal-box-line"></div>
            <div className="leaderboard-scroll flex flow-col">
                <GroopLeaderboardElement picture={this.props.userData.userPicture} fullName={this.props.userData.fullName} 
                                         ranking={1} stagnant={true} positionChangeAmount={0} value={1245} unit={"miles"} />

                <GroopLeaderboardElement picture={this.props.userData.userPicture} fullName={this.props.userData.fullName} 
                                         ranking={2} increase={true} positionChangeAmount={1} value={1076} unit={"miles"} />
                <GroopLeaderboardElement picture={this.props.userData.userPicture} fullName={this.props.userData.fullName} 
                                         ranking={3} decrease={true} positionChangeAmount={1} value={1054} unit={"miles"} />
                <GroopLeaderboardElement picture={this.props.userData.userPicture} fullName={this.props.userData.fullName} 
                                         ranking={4} increase={true} positionChangeAmount={2} value={1032} unit={"miles"} />
                <GroopLeaderboardElement picture={this.props.userData.userPicture} fullName={this.props.userData.fullName} 
                                         ranking={5} stagnant={true} positionChangeAmount={0} value={987} unit={"miles"} />
                <GroopLeaderboardElement picture={this.props.userData.userPicture} fullName={this.props.userData.fullName} 
                                         ranking={6} decrease={true} positionChangeAmount={1} value={891} unit={"miles"} />
            </div>
            <div className="dashboard-horizontal-box-line"></div>
            <div className="leaderboard-footer">
            <div className="leaderboard-footer-content" >
                <div className="leaderboard-footer-content-box">
                <div>1</div>
                <div>Ranking</div>
                </div>
            </div>
            <div className="leaderboard-footer-content" >
                <div className="leaderboard-footer-mid-content" >
                <img alt="" src={this.props.userData.userPicture} />
                <div className="leaderboard-footer-mid-text" > You </div>
                </div>
            </div>
            <div className="leaderboard-footer-content" >
            <div className="leaderboard-footer-content-box">
                <div>1,456</div>
                <div>Total Miles</div>
                </div>
            </div>
            </div>
        </div>
    )}
}

const MapStateToProps = (state) => ({ 
    userData: state.userData.info,
    groopData: null,
  });
export default connect(MapStateToProps)(GroopLeaderboard)