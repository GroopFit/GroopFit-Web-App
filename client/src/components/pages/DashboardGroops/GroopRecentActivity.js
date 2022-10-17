import React from "react";
import { connect } from 'react-redux';
import * as AiIcons from "react-icons/ai";
import * as FA from "react-icons/fa";
import * as HI from "react-icons/hi";
import * as MD from "react-icons/md";
import * as GoIcons from 'react-icons/go';

import GroopRecentActivityElement from "./GroopRecentActivityElement"


class GroopRecentActivity extends React.Component {

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
                <div className="groopfit-container-header space-between" >
                    <div className="groopfit-container-title" > Recent Activity </div>
                    <HI.HiOutlineDotsHorizontal color={'#888'} fontSize={'1.5rem'} />
                </div>
                <div className="dashboard-horizontal-box-line"/>
                <div className="groopfit-container-scroll flex flow-col">
                    <GroopRecentActivityElement userPicture={this.props.userData.userPicture} fullName={this.props.userData.fullName} event={"Running"} time={"00:35:00"} amount={4} units={"miles"} />
                    <GroopRecentActivityElement userPicture={this.props.userData.userPicture} fullName={this.props.userData.fullName} event={"Running"} time={"00:35:00"} amount={4} units={"miles"} />
                    <GroopRecentActivityElement userPicture={this.props.userData.userPicture} fullName={this.props.userData.fullName} event={"Running"} time={"00:35:00"} amount={4} units={"miles"} />
                    <GroopRecentActivityElement userPicture={this.props.userData.userPicture} fullName={this.props.userData.fullName} event={"Running"} time={"00:35:00"} amount={4} units={"miles"}/>
                    <GroopRecentActivityElement userPicture={this.props.userData.userPicture} fullName={this.props.userData.fullName} event={"Running"} time={"00:35:00"} amount={4} units={"miles"}/>
                    <GroopRecentActivityElement userPicture={this.props.userData.userPicture} fullName={this.props.userData.fullName} event={"Running"} time={"00:35:00"} amount={4} units={"miles"} />
                    <GroopRecentActivityElement userPicture={this.props.userData.userPicture} fullName={this.props.userData.fullName} event={"Running"} time={"00:35:00"} amount={4} units={"miles"} isLast/>
                </div>
                <div className="groopfit-container-footer-small flex space-around align-center medium-font" >
                    <FA.FaAngleDoubleDown color={'#888'} fontSize={'1.0rem'} />
                    <>All Recent </>
                    <FA.FaAngleDoubleDown color={'#888'} fontSize={'1.0rem'} />
                </div>
            </div>
        )
    }
}

const MapStateToProps = (state) => ({ 
    userData: state.userData.info,
    groopData: null,
  });
export default connect(MapStateToProps)(GroopRecentActivity)











