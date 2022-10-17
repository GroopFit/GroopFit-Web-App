import React from "react";
import { connect } from 'react-redux';
import * as AiIcons from "react-icons/ai";


class GroopRecentActivityElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    componentDidMount(){

    } 
    

    render() {
        return  (
            <div className="groop-ra-element">
            <div className="groop-ra-element-box-first">
              <img alt="" src={this.props.userPicture} />
              <div className="groop-ra-element-box-first-line" style={{display: this.props.isLast ? 'none' : 'inherit' }}/>
              <div className="groop-ra-col-element">
                <div className="groop-ra-col-box groop-ra-element-title">{this.props.fullName}</div>
                <div className="groop-ra-col-box groop-ra-element-subtitle"><b>{this.props.event}:&nbsp;</b>{this.props.amount + ' ' + this.props.units}</div>
              </div>
            </div>
            <div className="groop-ra-element-box flex center"> {this.props.time}</div>
           </div>
    )}
}

export default GroopRecentActivityElement;