import React from "react";
import { connect } from 'react-redux';
import * as FA from "react-icons/fa";
import * as IoIcons from 'react-icons/io';
import * as GoIcons from 'react-icons/go';
import * as HiIcons from 'react-icons/hi';

import DashboardCard from '../../DashboardCard/index'
import FitnessTab from '../../DashboardFitnessTab/index'
import { createActivityAsync } from '../../../app/services/fitness/fitnessAPI';

const FitnessList = [   
                        {color: 'green', activity: 'running', value: 2.7, units: 'mi', time: '00:20:00'},
                        {color: 'blue', activity: 'swimming', value: 2.7, units: 'mi', time: '00:20:00'},
                        {color: 'orange', activity: 'biking', value: 2.7, units: 'mi', time: '00:20:00'},
                        {color: 'orange', activity: 'biking', value: 2.7, units: 'mi', time: '00:20:00'},
                        {color: 'green', activity: 'running', value: 2.7, units: 'mi', time: '00:20:00'},
                        {color: 'blue', activity: 'swimming', value: 2.7, units: 'mi', time: '00:20:00'},
                        {color: 'blue', activity: 'swimming', value: 2.7, units: 'mi', time: '00:20:00'},
                        {color: 'orange', activity: 'biking', value: 2.7, units: 'mi', time: '00:20:00'},
                        {color: 'green', activity: 'running', value: 2.7, units: 'mi', time: '00:20:00'},
                        {color: 'green', activity: 'running', value: 2.7, units: 'mi', time: '00:20:00'},
                        {color: 'green', activity: 'running', value: 2.7, units: 'mi', time: '00:20:00'},
                        {color: 'blue', activity: 'swimming', value: 2.7, units: 'mi', time: '00:20:00'},
                        {color: 'orange', activity: 'biking', value: 2.7, units: 'mi', time: '00:20:00'},
                        {color: 'green', activity: 'running', value: 2.7, units: 'mi', time: '00:20:00'},
                        {color: 'blue', activity: 'swimming', value: 2.7, units: 'mi', time: '00:20:00'},
                        {color: 'orange', activity: 'biking', value: 2.7, units: 'mi', time: '00:20:00'},
                    ]

//<FitnessTab  iconColor={'green'}  activity={"running"} value={'2.7'} units={'mi'} time={'00:20:00'} />

class DashboardActivities extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            type: "running",
            name: "",
            desc: "",
            amount: 0.0,
            start_time: null,
            end_time: null,
            showActivityList: true
        };
    }

    componentDidMount(){

    } 
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state)
    } 

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch(createActivityAsync({
            type: this.state.type,
            name: this.state.name,
            desc: this.state.desc,
            amount: this.state.amount,
            startTime: this.state.start_time,
            endTime: this.state.end_time,
        }))
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

    render() {
        return  <div className="dash-inner-wrapper">
                    <div className="dashboard-layout-1 full-wh">
                        {/*
                            <DashboardCard iconColor={'green'}  activity={"running"} value={'3,000'} units={'mi'} percentage={27} />
                            <DashboardCard iconColor={'orange'}  activity={"biking"} value={'500'}   units={'m'} percentage={5} />
                            <DashboardCard iconColor={'blue'} activity={"swimming"} value={'4,500'} units={'km'} percentage={3.5} />
                        */}
                        <div className="dashboard-layout-1-first flex center flex-row" >
                            <DashboardCard iconColor={'green'}  activity={"running"} value={'30'} units={'mi'} percentage={27} />
                            <DashboardCard iconColor={'orange'}  activity={"biking"} value={'500'}   units={'m'} percentage={5} />
                            <DashboardCard iconColor={'blue'} activity={"swimming"} value={'15'} units={'km'} percentage={3.5} />
                            <DashboardCard iconColor={'orange'} activity={"biking"} value={'17'} units={'km'} percentage={3.5} />
                            <DashboardCard iconColor={'blue'} activity={"swimming"} value={'10'} units={'km'} percentage={3.5} />
                            <DashboardCard iconColor={'green'} activity={"running"} value={'20'} units={'km'} percentage={3.5} />
                        </div>
                        <div className="dashboard-layout-1-second flex center ">
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
                                <div className={`dashboard-horizontal-box-content${this.state.showActivityList ? '-scroll' : ''} flex flow-col`} >
                                    { this.state.showActivityList ? FitnessList.map((element) => {
                                        return  <FitnessTab iconColor={element.color}  activity={element.activity} value={element.value} 
                                                            units={element.units} time={element.time} />
                                        }) : 
                                        <form  className="flex flow-col full-wh" autoComplete="off" onSubmit={this.handleSubmit}>
                                            <div className="form-icons-wrapper">
                                                <div className="form-icon flex center icon-bg-pink">
                                                    <FA.FaWalking color={'#fff'} fontSize={'1.8rem'} />
                                                </div>
                                                <div className="form-icon flex center icon-bg-blue">
                                                    <FA.FaSwimmer color={'#fff'} fontSize={'1.8rem'} />
                                                </div>
                                                <div className="form-icon flex center  icon-bg-orange">
                                                    <FA.FaBiking color={'#fff'} fontSize={'1.8rem'} />
                                                </div>
                                                <div className="form-icon flex center icon-bg-green">
                                                    <FA.FaRunning color={'#fff'} fontSize={'1.8rem'} />
                                                </div>                   
                                                <div className="form-icon flex center icon-bg-black">
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
                                                        <option value="mi">mi</option>
                                                        <option value="ft">ft</option>
                                                        <option value="m">m</option>
                                                        <option value="km">km</option>     
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
                                <div className="dashboard-horizontal-box-line" />
                                <div className="dashboard-horizontal-box-bottom flex center" >
                                    <div className="dashboard-horizontal-add-activity flex center">
                                        { this.state.showActivityList ? 'Log an Activity' : 'Back to Activity Log'}
                                        <button onClick={this.logAnActivityOnClick}/>
                                    </div>
                                </div>   
                            </div>
                        </div>
                        <div className="dashboard-layout-1-third flex flow-row " >
                            <div className="dashboard-graph-container">
                                <div className="dashboard-container-model flex center icon-bg-pink" >
                                    <GoIcons.GoGraph color={'#fff'}  fontSize={'5.00rem'} />
                                </div>
                                <div className="dashboard-graph-container-title-box">
                                    <div className="dashboard-graph-container-title">Walking Preformance</div>
                                    <div className="dashboard-graph-container-subtitle">
                                        (<div className="percentage">+17%</div>)
                                        increase over the last week
                                    </div>
                                </div>
                                <div className="dashboard-graph-container-bottom" >
                                    <HiIcons.HiOutlineClock color={'#888'}  fontSize={'1.150rem'} />
                                    <div style={{padding: '0px 2px 0px 4px'}}>updated 4 minutes ago</div>
                                </div>
                            </div>
                            <div className="dashboard-graph-container">
                                <div className="dashboard-container-model flex center icon-bg-orange" >
                                    <GoIcons.GoGraph color={'#fff'}  fontSize={'5.00rem'} />
                                </div>
                                <div className="dashboard-graph-container-title-box">
                                    <div className="dashboard-graph-container-title">Running Preformance</div>
                                    <div className="dashboard-graph-container-subtitle">
                                        (<div className="percentage">+15%</div>)
                                        increase over the last week
                                    </div>
                                </div>
                                <div className="dashboard-graph-container-bottom" >
                                    <HiIcons.HiOutlineClock color={'#888'}  fontSize={'1.150rem'} />
                                    <div style={{padding: '0px 2px 0px 4px'}}>updated 4 minutes ago</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    }
}

const MapStateToProps = (state) => ({ });
export default connect(MapStateToProps)(DashboardActivities)



    
//https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/
 /*   render() {
        return  <div className="dash-inner-wrapper">
                    <div className="full-wh flex center child-padding" >
                        <form autoComplete="off" onSubmit={this.handleSubmit}>
                            <input type="text" name="name" placeholder="Title" onChange={this.handleInputChange}/>
                            <input type="textarea" name="desc" placeholder="Notes"  onChange={this.handleInputChange}/>
                            <select name="type" id="lang"  onChange={this.handleInputChange} required>
                                <option value="walking">Walking</option>
                                <option value="running">Running</option>
                                <option value="biking">Biking</option>
                                <option value="swimming">Swimming</option>
                            </select>
                            <input type="number" name="amount" onChange={this.handleInputChange} required/>
                            <select name="units" id="langs"  onChange={this.handleInputChange} required>
                                <option value="ft">ft</option>
                                <option value="mi">mi</option>
                                <option value="m">m</option>
                                <option value="km">km</option>     
                            </select>
                            <input type="datetime-local" name="start_time"  onChange={this.handleInputChange} required/>
                            <input type="datetime-local" name="end_time"  onChange={this.handleInputChange} required/>

                            <input type="submit" />
                        </form>
                    </div>
                </div>
    }*/