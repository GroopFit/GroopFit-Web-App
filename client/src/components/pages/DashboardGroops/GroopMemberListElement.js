import React from "react";
import { connect } from 'react-redux';
import * as AiIcons from "react-icons/ai";
import * as HI from "react-icons/hi";


class GroopMemberListElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
        };
    }


    componentDidMount(){
   
    } 


    render() {
        return  (
            <div className="groop-member-element">
                <div className="flex flow-row">
                    <div className="groop-member-picture">
                    <img alt="" src={this.props.userPicture} />
                    </div>
                    <div className="groop-member-col-element">
                    <div className="groop-member-col-box groop-member-element-title">{this.props.fullName}</div>
                    <div className="groop-member-col-box groop-member-element-subtitle">Groop {this.props.role}</div>
                    </div>
                </div>
                <div className="groop-member-element-box medium-font "> {this.props.joinedDate} </div>
                <div className="groop-member-element-box">
                    <div className={`groop-member-status ${this.props.status}-status flex center`}/>
                </div>
                <div className="groop-member-element-box">
                    <HI.HiOutlineDotsVertical color={'#888'} fontSize={'1.5rem'} />
                </div>
            </div>

        )
    }
}

export default GroopMemberListElement;