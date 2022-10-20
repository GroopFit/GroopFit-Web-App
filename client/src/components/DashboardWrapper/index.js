import React from "react";
import { connect } from 'react-redux';
import './dash.css';
import * as IoIcons from 'react-icons/io';
import * as IoIcons5 from 'react-icons/io5';

import * as WeatherIcons from "react-icons/wi";
import { AiOutlineGithub } from "react-icons/ai";

import NavigationBar from "./NavigationBar"
import UserIcon from "../pages/DashboardHome/UserIcon";

import { getUserDataAsync } from '../../app/services/user/userAPI';

import Logo from '../../img/temp-logo.png'
import { CgMenu } from "react-icons/cg";
 

const SidebarPageData = [
    {
      title: 'Dashboard', 
      path: '/Home',
      icon: <IoIcons.IoIosPaper />,
      cName: 'nav-text'
    },
    {
      title: 'Info',
      path: '/info',
      icon: <IoIcons5.IoPieChart />,
      cName: 'nav-text'
    }
  ];
  
  const SidebarSettingsLogoutData = [
    {
      title: 'Settings',
      path: '/settings',
      icon: <IoIcons.IoMdSettings />,
      cName: 'nav-text'
    },
    {
      title: 'Log Out',
      path: '/log out',
      icon: <IoIcons.IoIosLogOut />,
      cName: 'nav-text'
    }
  ];
  

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

  /*NEEDS TO BE UPDATED ON WINDOW SIZE CHAGE*/
class DashboardWrapper extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 
          navbarWidth: 60,
          contentWidth: getWindowDimensions().width - 60 - 5,
          currentWindowURL: window.location.href,

          
      };
  }

  toggleNavbarWidth = async () => {
    if(this.state.navbarWidth !== 60){
      await this.setState({navbarWidth: 60 });
    } else { await this.setState({navbarWidth: 180 }) } 
    this.updateContentDimensions()
  }

  updateContentDimensions = () => { this.setState({ contentWidth: getWindowDimensions().width - this.state.navbarWidth - 5 }); }

  componentDidMount() {
    this.props.dispatch(getUserDataAsync())
    window.addEventListener('resize', this.updateContentDimensions);
  }

  createRouteString = () => {
    let currentURL = this.state.currentWindowURL
    let urlParts = currentURL.split('/')
    //let returnString = ''

    /*-----------------------------------------------------*/
    /*   Make this equal to 'dashboard' or 'Dashboard'     */
    /*   made it an infinite loop when I tried to do this  */                                                                       
    /*-----------------------------------------------------*/
    while (urlParts[0] !== 'dashboard') { urlParts.shift() }
    for (let index = 0; index < urlParts.length; index++) {
      urlParts[index] = urlParts[index].charAt(0).toUpperCase() + urlParts[index].slice(1) 
    }

    //let returnS
    //console.log(urlParts.join(' > '))
    return urlParts.join('  ❯  ')
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.state.currentWindowURL !== window.location.href){
      console.log("We Have CHanged URLS")
      this.setState({currentWindowURL: window.location.href })
      //this.createRouteString() 
    }
    
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateContentDimensions);
  }

  render() {
    return  <div className="dash-page-wrapper">
                <div className="dash-header" >
                  <div className="dash-header-l">
                    <div className="dash-header-nav-icon flex center">
                      <CgMenu color={'#888888'} onClick={() => {this.toggleNavbarWidth()}}  fontSize={'1.75rem'} background={'none'} style={{ cursor: 'pointer' }}/>
                    </div>
                    <div className="dash-header-logo flex center">
                      GroopFit
                    </div>
                    <div className="dash-header-route flex center">
                      <pre>{ this.createRouteString() }</pre>
                    </div>
                  </div>
                  <div className="dash-header-r">
                    <div className="dash-header-r-text flex center">
                      { this.props.userData.info.fullName } 
                    </div>
                    <div className="dash-header-r-img flex center">
                      {/*         Link for Custom Lazy Loading Image Component Below          */}
                      {/* https://levelup.gitconnected.com/react-lazy-load-image-e6a5ca944f32 */}
                      <UserIcon height="32px" border_radius="50%"/>
                      {/* Task:   Make this a custom component or have it render              */}
                      {/*        a default picture when it fails to load properly.            */}
                    </div>
                  </div>
                </div>
                <div className="dash-middle">
                    <NavigationBar history={this.props.history} currentWidth={ this.state.navbarWidth }/>
                    <div className="dash-content" style={{width: `${this.state.contentWidth}px` }}>
                        { this.props.children }
                    </div>
                </div>
                <div className="dash-footer">
                    © 2022 GroopFit Beta v0.0.1 &nbsp; |  &nbsp; <AiOutlineGithub size={15} /> &nbsp; | &nbsp; A <div style={{color: '#50C878'/*'#4a88e8'*/}}> &nbsp;Simplicity Tech Solutions&nbsp; </div> Software
                </div>
            </div>
  }
}
//#FF5F1F
//#FFC000

const MapStateToProps = (state) => ({ 
  userData: state.userData,
  accessToken: state.userData.authaccessToken
});
export default connect(MapStateToProps)(DashboardWrapper)
