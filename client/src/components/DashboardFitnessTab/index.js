import React from "react";
import { connect } from 'react-redux';
import * as FA from "react-icons/fa";
import * as IoIcons from 'react-icons/io';
import * as CgIcons from "react-icons/cg";
import * as TbIcons from "react-icons/tb"; 


class DashboardCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            dropdownToggle: false,
        };
    }


    componentDidMount(){

    } 

    dropDownToggle = () => {
        this.setState({ dropdownToggle: !this.state.dropdownToggle })
    }
    

    render() {
        return  <div className="dashboard-horizontal-box-item" style={ this.state.dropdownToggle ? {minHeight: 'auto'} : {} } >
                    <div className={`dashboard-horizontal-box-item-icon  flex center icon-bg-${this.props.iconColor}`}>
                        { this.props.activity === "running" ? <FA.FaRunning onClick = {this.dropDownToggle} style={{cursor: 'pointer'}} fontSize={'1.35rem'} /> : <></> }
                        { this.props.activity === "swimming" ? <FA.FaSwimmer onClick = {this.dropDownToggle} style={{cursor: 'pointer'}} fontSize={'1.35rem'} /> : <></> }
                        { this.props.activity === "biking" ? <FA.FaBiking onClick = {this.dropDownToggle} style={{cursor: 'pointer'}} fontSize={'1.35rem'}/> : <></> }
                    </div>
                    <div className="dashboard-horizontal-box-item-content-top" >
                        <div className="dashboard-horizontal-box-item-left">
                            <div className="dashboard-horizontal-box-item-accent" style={ this.state.dropdownToggle ? {fontSize: '14px'} : {}}>
                                { this.props.activity.charAt(0).toUpperCase() + this.props.activity .slice(1) }
                            </div>
                            <div style={ this.state.dropdownToggle ? {display: 'none'} : {}} >{this.props.time}</div>
                            <div style={ this.state.dropdownToggle ? {display: 'none'} : {}} >{this.props.value + ' ' + this.props.units}</div>
                            {/* Put the rest here */}
                        </div>
                        <div className="dashboard-horizontal-box-item-right">
                            <CgIcons.CgDetailsMore onClick={this.dropDownToggle} style={{cursor: 'pointer'}} fontSize={'1.35rem'} />
                        </div>
                    </div>  
                    <div  className="dashboard-horizontal-box-item-content-rest" style={ this.state.dropdownToggle ? {} : {display: 'none'}} >
                        <div className="dashboard-horizontal-box-element">
                            <div className="dashboard-horizontal-box-element-title">Title:</div>
                            <div className="dashboard-horizontal-box-element-content">Sheldon's Quick Run</div>
                        </div>
                        <div className="dashboard-horizontal-box-element">
                            <div className="dashboard-horizontal-box-element-title">Date:</div>
                            <div className="dashboard-horizontal-box-element-content">9/10/2022</div>
                        </div>
                        <div className="dashboard-horizontal-box-element">
                            <div className="dashboard-horizontal-box-element-title">Time:</div>
                            <div className="dashboard-horizontal-box-element-content">17:00 - 17:20 ({this.props.time})</div>
                        </div>
                        <div className="dashboard-horizontal-box-element">
                            <div className="dashboard-horizontal-box-element-title">Distance:</div>
                            <div className="dashboard-horizontal-box-element-content">{this.props.value + ' ' + this.props.units}</div>
                        </div>
                        <div className="dashboard-horizontal-box-element" style={{flexFlow: 'column'}}> 
                            <div className="dashboard-horizontal-box-element-title fill-available" style={{justifyContent: 'flex-start'}} >My Notes:</div>
                            <div className="dashboard-horizontal-box-element-notes">
                                This is a set of notes. This is a set of notes. This is a set of notes. This is a set of notes. This is a set of notes. This is a set of notes. This is a set of notes.
                            </div>
                        </div>
                        <div className="dashboard-horizontal-box-item-content-icon-box fill-available">
                            <TbIcons.TbEdit onClick={this.dropDownToggle} style={{cursor: 'pointer', color: '#50c878'}} fontSize={'1.35rem'} />
                            <TbIcons.TbTrashX onClick={this.dropDownToggle} style={{cursor: 'pointer', color: '#a91717'}} fontSize={'1.35rem'} />
                        </div>
                    </div>
                </div>
  }
}

const MapStateToProps = (state) => ({  });
export default connect(MapStateToProps)(DashboardCard)