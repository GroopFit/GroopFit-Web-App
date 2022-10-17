import React from "react";
import { connect } from 'react-redux';
import * as AiIcons from "react-icons/ai";
import * as FA from "react-icons/fa";
import * as HI from "react-icons/hi";
import * as MD from "react-icons/md";
import GroopMemberListElement from "./GroopMemberListElement"


class GroopMemberList extends React.Component {

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
                <div className="groopfit-container-title" > Groop Members </div>
                    <HI.HiOutlineDotsHorizontal color={'#888'} fontSize={'1.5rem'} />
                </div>
                <div className="dashboard-horizontal-box-line"/>
                <div className="groopfit-container-scroll flex flow-col">
                <GroopMemberListElement userPicture={this.props.userData.userPicture} fullName={this.props.userData.fullName} 
                                        role={"Admin"}  joinedDate={"9/14/2022"} status={"online"} />
                <GroopMemberListElement userPicture={this.props.userData.userPicture} fullName={this.props.userData.fullName} 
                                        role={"Admin"}  joinedDate={"9/14/2022"} status={"offline"} />
                <GroopMemberListElement userPicture={this.props.userData.userPicture} fullName={this.props.userData.fullName} 
                                        role={"Admin"}  joinedDate={"9/14/2022"} status={"online"} />
                <GroopMemberListElement userPicture={this.props.userData.userPicture} fullName={this.props.userData.fullName} 
                                        role={"Admin"}  joinedDate={"9/14/2022"} status={"online"} />
                <GroopMemberListElement userPicture={this.props.userData.userPicture} fullName={this.props.userData.fullName} 
                                        role={"Admin"}  joinedDate={"9/14/2022"} status={"online"} />
                <GroopMemberListElement userPicture={this.props.userData.userPicture} fullName={this.props.userData.fullName} 
                                        role={"Admin"}  joinedDate={"9/14/2022"} status={"offline"} />
                <GroopMemberListElement userPicture={this.props.userData.userPicture} fullName={this.props.userData.fullName} 
                                        role={"Admin"}  joinedDate={"9/14/2022"} status={"offline"} />
                </div>
                <div className="groopfit-container-footer-small flex space-around align-center" >
                    <FA.FaAngleDoubleDown color={'#888'} fontSize={'1.0rem'} />
                    <FA.FaAngleDoubleDown color={'#888'} fontSize={'1.0rem'} />
                </div>
                <div className="groopfit-container-triangle" >
                    <div className="groopfit-container-triangle-inner" >
                        <MD.MdOutlineGroupAdd color={'#fff'} fontSize={'1.5rem'} />
                    </div>
                </div> 
            </div>
        )
    }
}

const MapStateToProps = (state) => ({ 
    userData: state.userData.info,
    groopData: null,
  });
export default connect(MapStateToProps)(GroopMemberList)