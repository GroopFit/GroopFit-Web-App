import React from "react";
import { connect } from 'react-redux';
import * as FA from "react-icons/fa";
import * as IoIcons from 'react-icons/io';
import * as GoIcons from 'react-icons/go';
import * as HiIcons from 'react-icons/hi';

import * as IO from "react-icons/io";
import * as IO5 from "react-icons/io5";
import * as HI from "react-icons/hi";

import SmallGraphCard from '../DashboardHome/SmallGraphCard'
import SmallButtonCard from '../DashboardHome/SmallButtonCard'

import DashboardCard from '../../DashboardCard/index'
import FitnessTab from '../../DashboardFitnessTab/index'
import { createActivityAsync } from '../../../app/services/fitness/fitnessAPI';

class DashboardActivities extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            type: "walking",
            name: "",
            desc: "",
            units: 'miles',
            amount: 0.0,
            start_time: null,
            end_time: null,
            showActivityList: true
        };
    }

    componentDidMount(){
        console.log(this.props.fitnessData)

    } 
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("PROPS ARE HERE: " , this.props)
        console.log("STATE IS HERE: " , this.state)
    } 

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch(createActivityAsync({
            type: this.state.type,
            name: this.state.name,
            desc: this.state.desc,
            units: this.state.units,
            amount: this.state.amount,
            startTime: this.state.start_time,
            endTime: this.state.end_time,
        }))
        this.setState({ showActivityList: true })
    }
 
    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    logAnActivityOnClick = () => {
        this.setState({ showActivityList: !this.state.showActivityList })
    }

    getActivityColor = (activityName, activityColors) => {
        return activityColors.find(element => element.activity === activityName).color;
    }

    changeActivityType = (newType) => {
        this.setState({  type: newType })
    }

    handleColor = (activityType) => {
        if(activityType === this.state.type){
            return this.getActivityColor(activityType, this.props.activityColors)
        } else {return "black"}

    }


    render() {
        return  (
            <div className="dashboard-page-scroll-wrapper">
                <div className="dashboard-flex-grid-wrapper">
                    <div className="activity-statistics-container dashboard-container padding-top-none  flex flow-col">
                        <div className="activity-statistics-wrapper" >
                            <div className="activity-container-1 dashboard-container dashboard-container-half-height" >
                                <div className="new-dashboard-card flex center teal-gradient" >
                                    <GoIcons.GoGraph color={'#fff'}  fontSize={'5.00rem'} />
                                </div> 
                            </div>
                            <div className="activity-container-1 dashboard-container dashboard-container-half-height" >
                                <div className="new-blank-card  two-by-two" >
                                    <SmallGraphCard color={"blue"} activity={"running"} data={[ 1,2,0,4,5,2,6 ]} units={"Miles"} />
                                    <SmallButtonCard title="Join Groop" color="purple" subtitle={`In ${1} out of ${4}`}  buttonText="Join Groop">
                                        <HI.HiUserGroup  color={'#fff'} fontSize={'1.80rem'} />
                                    </SmallButtonCard>
                                    <SmallButtonCard title="Add Goals" color="pink" subtitle={`Test Yourself`}  buttonText="Add Goals">
                                        <IO5.IoRibbon color={'#fff'} fontSize={'1.80rem'} />
                                    </SmallButtonCard>
                                    <SmallGraphCard color={"teal"} activity={"walking"} data={[ 30,25,28,22,17,27,25 ]} units={"Meters"} />
                                </div>
                            </div>
                            <div className="dashboard-full-container dashboard-container show-big-screen dashboard-container-half-height" >
                                {/* These are the same */}
                                <div className="new-dashboard-card flex center purple-gradient" >
                                    <GoIcons.GoGraph color={'#fff'}  fontSize={'5.00rem'} />
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="activity-log-container dashboard-container activity-log-container-height dashboard-container flex flow-col">
                        <div className="new-dashboard-card " >
                            <div className="dashboard-horizontal-box flex flow-col">
                                <div className="dashboard-horizontal-box-title" >
                                    <div className="dashboard-horizontal-box-title-text">
                                        { this.state.showActivityList ? 'Activity Log' : 'Add Activity'}
                                    </div>
                                    <div className="dashboard-horizontal-box-title-icon">
                                        <IoIcons.IoMdSettings  fontSize={'1.35rem'} />
                                    </div>
                                </div>

                                <div className="dashboard-horizontal-box-line" />
                                <div className="dashboard-horizontal-box-bottom flex center" >
                                    <div className="dashboard-horizontal-add-activity flex center">
                                        { this.state.showActivityList ? 'Log an Activity' : 'Back to Activity Log'}
                                        <button onClick={this.logAnActivityOnClick}/>
                                    </div>
                                </div>   
                                <div className="dashboard-horizontal-box-line" />    
                            
                                <div className={`dashboard-horizontal-box-content${this.state.showActivityList ? '-scroll' : ''} flex flow-col`} >
                                    { this.state.showActivityList ?
                                        (this.props.fitnessData.allActvities ? this.props.fitnessData.allActvities.map((element) => {
                                            return  <FitnessTab iconColor={this.getActivityColor(element.fitnessName, this.props.activityColors)}  activityData={element} />
                                            } 
                                        ) : <></>) : 
                                        <form  className="flex flow-col full-wh" autoComplete="off" onSubmit={this.handleSubmit}>
                                            <div className="form-icons-wrapper">
                                                <div className={`form-icon flex center icon-bg-${this.handleColor("walking")}`} onClick={() => {this.changeActivityType("walking")}} >
                                                    <FA.FaWalking color={'#fff'} fontSize={'1.8rem'} />
                                                </div>
                                                <div className={`form-icon flex center icon-bg-${this.handleColor("swimming")}`} onClick={() => {this.changeActivityType("swimming")}} >
                                                    <FA.FaSwimmer color={'#fff'} fontSize={'1.8rem'} />
                                                </div>
                                                <div className={`form-icon flex center icon-bg-${this.handleColor("biking")}`} onClick={() => {this.changeActivityType("biking")}} >
                                                    <FA.FaBiking color={'#fff'} fontSize={'1.8rem'} />
                                                </div>
                                                <div className={`form-icon flex center icon-bg-${this.handleColor("running")}`} onClick={() => {this.changeActivityType("running")}} >
                                                    <FA.FaRunning color={'#fff'} fontSize={'1.8rem'} />
                                                </div>                   
                                                <div className="form-icon flex center icon-bg-black" >
                                                    <FA.FaQuestion color={'#fff'} fontSize={'1.8rem'} />
                                                </div>
                                                <div className="form-icon flex center icon-bg-black">
                                                    <FA.FaQuestion color={'#fff'} fontSize={'1.8rem'} />
                                                </div>
                                            </div>
                                            <input type="text" className="activity-input" name="name" placeholder="Title" onChange={this.handleInputChange}/>
                                            <div className="notes-wrapper flex flow-col">
                                                <textarea className="activity-input notes" name="desc" placeholder="Notes" maxlength='250'  onChange={this.handleInputChange}/>
                                                <p> {`${this.state.desc.length}/250`} </p>
                                            </div>
                                            <div className="amount-units-wrapper flex flow-row">
                                                <div className="form-row-title flex flow-row">Distance:</div>
                                                <div className="flex flow-row">
                                                    <input  className="activity-input" type="number" name="amount" placeholder="00.00" onChange={this.handleInputChange} required/>
                                                    <select className="activity-input" name="units" id="langs"  onChange={this.handleInputChange} required>
                                                        <option value="miles">mi</option>
                                                        <option value="feet">ft</option>
                                                        <option value="meters">m</option>
                                                        <option value="kilometers">km</option>     
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-row-title flex flow-row">
                                                <div className="form-row-title flex flow-row">Start:</div>
                                                <input className="activity-input" type="datetime-local" name="start_time"  onChange={this.handleInputChange} required/>
                                            </div>
                                            <div className="form-row-title flex flow-row">
                                                <div className="form-row-title flex flow-row">End:</div>
                                                <input className="activity-input" type="datetime-local" name="end_time"  onChange={this.handleInputChange} required/>
                                            </div>
                                            <input className="activity-submit icon-bg-green" type="submit" value="Log this Activity" />
                                        </form>
                                    }
                                </div>
                                <div className="groopfit-container-footer-short  flex space-around align-center medium-font" >
                                    <FA.FaAngleDoubleDown color={'#888'} fontSize={'1.0rem'} />
                                    <>All Recent </>
                                    <FA.FaAngleDoubleDown color={'#888'} fontSize={'1.0rem'} />
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="dashboard-flex-grid-wrapper margin-top-none">
                    <div className="dashboard-full-container dashboard-container show-med-screen " >
                        {/* These are the same */}
                        <div className="new-dashboard-card height-300 flex center purple-gradient" >
                            <GoIcons.GoGraph color={'#fff'}  fontSize={'5.00rem'} />
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}

const MapStateToProps = (state) => ({
    fitnessData: state.fitnessData,
    activityColors: state.settingsData.activityColors,
 });
export default connect(MapStateToProps)(DashboardActivities)