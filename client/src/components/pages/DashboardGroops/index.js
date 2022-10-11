import React from "react";
import { connect } from 'react-redux';
import * as HI from "react-icons/hi";
import * as MD from "react-icons/md";
import * as FA from "react-icons/fa";
import * as GoIcons from 'react-icons/go';


import GroopLeaderboard from "./GroopLeaderboard"

//AiOutlineCaretUp
//AiOutlineLine
//AiOutlineCaretDown

class DashboardGroop extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
       
        };
    }


    componentDidMount(){
      console.log(this.props.userData)

    } 
    

  render() {
    return  <div className="groop-grid">
                <div className="groop-grid-b1 flex flow-col" >
                  <div className="groop-dash-title-box">
                    <div className="groop-dash-logo-box  flex center" />
                    <div className="groop-dash-title" >
                      RPI Fitness Club
                      <div className="groop-dash-title-line " />
                    </div>
                  </div>
                  <div className="groop-dash-text-wrap">
                    <div className="groop-dash-text">
                      <b style={{fontSize: '16px', color: '#fff'}}>Groop Type: </b>Competetive
                    </div>
                    <div className="groop-dash-text">
                      <b style={{fontSize: '16px', color: '#fff'}}>Description: </b> 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna 
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                  </div>
                </div>
                <div className="groop-grid-b2" >
                  <div className="groopfit-container" />
                  <div className="groopfit-container" />
                </div>
                <div className="groop-grid-b3" >
                  <GroopLeaderboard />
                </div>
{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className="groop-grid-b4" >
                  <div className="groopfit-container" >
                      <div className="groopfit-container-header space-between" >
                        <div className="groopfit-container-title" > Recent Activity </div>
                        <HI.HiOutlineDotsHorizontal color={'#888'} fontSize={'1.5rem'} />
                      </div>
                      <div className="dashboard-horizontal-box-line"/>
                      <div className="groopfit-container-scroll flex flow-col">


                        <div className="groop-ra-element">
                          <div className="groop-ra-element-box-first">
                            <img alt="" src={this.props.userData.userPicture} />
                            <div className="groop-ra-element-box-first-line" />
                            <div className="groop-ra-col-element">
                              <div className="groop-ra-col-box groop-ra-element-title">{this.props.userData.fullName}</div>
                              <div className="groop-ra-col-box groop-ra-element-subtitle"><b>Running:&nbsp;</b>3 miles</div>
                            </div>
                          </div>
                          <div className="groop-ra-element-box flex center"> 00:35:00 </div>
                        </div>

                        <div className="groop-ra-element">
                          <div className="groop-ra-element-box-first">
                            <img alt="" src={this.props.userData.userPicture} />
                            <div className="groop-ra-element-box-first-line" />
                            <div className="groop-ra-col-element">
                              <div className="groop-ra-col-box groop-ra-element-title">{this.props.userData.fullName}</div>
                              <div className="groop-ra-col-box groop-ra-element-subtitle"><b>Running:&nbsp;</b>3 miles</div>
                            </div>
                          </div>
                          <div className="groop-ra-element-box flex center"> 00:35:00 </div>
                        </div>

                        <div className="groop-ra-element">
                          <div className="groop-ra-element-box-first">
                            <img alt="" src={this.props.userData.userPicture} />
                            <div className="groop-ra-element-box-first-line" />
                            <div className="groop-ra-col-element">
                              <div className="groop-ra-col-box groop-ra-element-title">{this.props.userData.fullName}</div>
                              <div className="groop-ra-col-box groop-ra-element-subtitle"><b>Running:&nbsp;</b>3 miles</div>
                            </div>
                          </div>
                          <div className="groop-ra-element-box flex center"> 00:35:00 </div>
                        </div>

                        <div className="groop-ra-element">
                          <div className="groop-ra-element-box-first">
                            <img alt="" src={this.props.userData.userPicture} />
                            <div className="groop-ra-element-box-first-line" />
                            <div className="groop-ra-col-element">
                              <div className="groop-ra-col-box groop-ra-element-title">{this.props.userData.fullName}</div>
                              <div className="groop-ra-col-box groop-ra-element-subtitle"><b>Running:&nbsp;</b>3 miles</div>
                            </div>
                          </div>
                          <div className="groop-ra-element-box flex center"> 00:35:00 </div>
                        </div>

                        <div className="groop-ra-element">
                          <div className="groop-ra-element-box-first">
                            <img alt="" src={this.props.userData.userPicture} />
                            <div className="groop-ra-element-box-first-line" />
                            <div className="groop-ra-col-element">
                              <div className="groop-ra-col-box groop-ra-element-title">{this.props.userData.fullName}</div>
                              <div className="groop-ra-col-box groop-ra-element-subtitle"><b>Running:&nbsp;</b>3 miles</div>
                            </div>
                          </div>
                          <div className="groop-ra-element-box flex center"> 00:35:00 </div>
                        </div>

                        <div className="groop-ra-element">
                          <div className="groop-ra-element-box-first">
                            <img alt="" src={this.props.userData.userPicture} />
                            <div className="groop-ra-col-element">
                              <div className="groop-ra-col-box groop-ra-element-title">{this.props.userData.fullName}</div>
                              <div className="groop-ra-col-box groop-ra-element-subtitle"><b>Running:&nbsp;</b>3 miles</div>
                            </div>
                          </div>
                          <div className="groop-ra-element-box flex center"> 00:35:00 </div>
                        </div>
                      


                      </div>
                      <div className="groopfit-container-footer-small flex space-around align-center medium-font" >
                        <FA.FaAngleDoubleDown color={'#888'} fontSize={'1.0rem'} />
                        <>All Recent </>
                        <FA.FaAngleDoubleDown color={'#888'} fontSize={'1.0rem'} />
                      </div>
                    </div>
                </div>
{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className="groop-grid-b5 " >
                  <div className="groopfit-container" >
                    <div className="groopfit-container-header space-between" >
                      <div className="groopfit-container-title" > Groop Members </div>
                      <HI.HiOutlineDotsHorizontal color={'#888'} fontSize={'1.5rem'} />
                    </div>
                    <div className="dashboard-horizontal-box-line"/>
                    <div className="groopfit-container-scroll flex flow-col">
                      <div className="groop-member-element">
                        <div className="flex flow-row">
                          <div className="groop-member-picture">
                            <img alt="" src={this.props.userData.userPicture} />
                          </div>
                          <div className="groop-member-col-element">
                            <div className="groop-member-col-box groop-member-element-title">{this.props.userData.fullName}</div>
                            <div className="groop-member-col-box groop-member-element-subtitle">Groop Founder</div>
                          </div>
                        </div>
                        <div className="groop-member-element-box medium-font "> 9/12/2022 </div>
                        <div className="groop-member-element-box">
                          <div className="groop-member-status offline-status flex center"/>
                        </div>
                        <div className="groop-member-element-box">
                          <HI.HiOutlineDotsVertical color={'#888'} fontSize={'1.5rem'} />
                        </div>
                      </div>
                     {/**-----------------------------------------------------------------------------------------------/ */}
                     <div className="groop-member-element">
                        <div className="flex flow-row">
                          <div className="groop-member-picture">
                            <img alt="" src={this.props.userData.userPicture} />
                          </div>
                          <div className="groop-member-col-element">
                            <div className="groop-member-col-box groop-member-element-title">{this.props.userData.fullName}</div>
                            <div className="groop-member-col-box groop-member-element-subtitle">Groop Admin</div>
                          </div>
                        </div>
                        <div className="groop-member-element-box medium-font "> 9/12/2022 </div>
                        <div className="groop-member-element-box">
                          <div className="groop-member-status online-status flex center"/>
                        </div>
                        <div className="groop-member-element-box">
                          <HI.HiOutlineDotsVertical color={'#888'} fontSize={'1.5rem'} />
                        </div>
                      </div>
                     {/**-----------------------------------------------------------------------------------------------/ */}
                     <div className="groop-member-element">
                        <div className="flex flow-row">
                          <div className="groop-member-picture">
                            <img alt="" src={this.props.userData.userPicture} />
                          </div>
                          <div className="groop-member-col-element">
                            <div className="groop-member-col-box groop-member-element-title">{this.props.userData.fullName}</div>
                            <div className="groop-member-col-box groop-member-element-subtitle">Groop Admin</div>
                          </div>
                        </div>
                        <div className="groop-member-element-box medium-font "> 9/12/2022 </div>
                        <div className="groop-member-element-box">
                          <div className="groop-member-status offline-status flex center"/>
                        </div>
                        <div className="groop-member-element-box">
                          <HI.HiOutlineDotsVertical color={'#888'} fontSize={'1.5rem'} />
                        </div>
                      </div>
                     {/**-----------------------------------------------------------------------------------------------/ */}
                     <div className="groop-member-element">
                        <div className="flex flow-row">
                          <div className="groop-member-picture">
                            <img alt="" src={this.props.userData.userPicture} />
                          </div>
                          <div className="groop-member-col-element">
                            <div className="groop-member-col-box groop-member-element-title">{this.props.userData.fullName}</div>
                            <div className="groop-member-col-box groop-member-element-subtitle">Groop Member</div>
                          </div>
                        </div>
                        <div className="groop-member-element-box medium-font "> 9/12/2022 </div>
                        <div className="groop-member-element-box">
                          <div className="groop-member-status online-status flex center"/>
                        </div>
                        <div className="groop-member-element-box">
                          <HI.HiOutlineDotsVertical color={'#888'} fontSize={'1.5rem'} />
                        </div>
                      </div>
                     {/**-----------------------------------------------------------------------------------------------/ */}
                     <div className="groop-member-element">
                        <div className="flex flow-row">
                          <div className="groop-member-picture">
                            <img alt="" src={this.props.userData.userPicture} />
                          </div>
                          <div className="groop-member-col-element">
                            <div className="groop-member-col-box groop-member-element-title">{this.props.userData.fullName}</div>
                            <div className="groop-member-col-box groop-member-element-subtitle">Groop Member</div>
                          </div>
                        </div>
                        <div className="groop-member-element-box medium-font "> 9/12/2022 </div>
                        <div className="groop-member-element-box">
                          <div className="groop-member-status online-status flex center"/>
                        </div>
                        <div className="groop-member-element-box">
                          <HI.HiOutlineDotsVertical color={'#888'} fontSize={'1.5rem'} />
                        </div>
                      </div>
                     {/**-----------------------------------------------------------------------------------------------/ */}
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
                </div>
{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className="groop-grid-b6" >
                  <div className="groopfit-container flex center icon-bg-pink" >
                    <GoIcons.GoGraph color={'#fff'}  fontSize={'5.00rem'} />
                  </div>
                </div>
            </div>
  }
}

const MapStateToProps = (state) => ({ 
  userData: state.userData.info,
  groopData: null,
});
export default connect(MapStateToProps)(DashboardGroop)