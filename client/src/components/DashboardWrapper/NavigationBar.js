import React, {useCallback} from 'react';
//import { Link, useNavigate} from 'react-router-dom';
import * as IoIcons from 'react-icons/io';
import * as IoIcons5 from 'react-icons/io5';
import * as FA from "react-icons/fa";
import * as HI from "react-icons/hi";
import * as RI from "react-icons/ri";
import * as  MdIcon from "react-icons/md";
//import history from '../../history';
import { useNavigate, useParams } from "react-router-dom";


import './dash.css';



const SidebarPageData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <MdIcon.MdSpaceDashboard />,
    cName: 'nav-text'
  },
 /* {
    title: 'Overview',
    path: '/dashboard/overview',
    icon:  <IoIcons5.IoPieChart />,
    cName: 'nav-text'
  },*/
  {
    title: 'Activities',
    path: '/dashboard/activities',
    icon:  <FA.FaRunning />,
    cName: 'nav-text'
  },
  {
    title: 'My Groups',
    path: '/dashboard/groups',
    icon:  <HI.HiUserGroup />,
    cName: 'nav-text'
  },
  {
    title: 'Challenges',
    path: '/dashboard/challenges',
    /* Maybe use RiAwardFill, RiSwordFill, TbSwords, IoIosMedal, RiMedalFill */
    icon:  <RI.RiSwordFill />,
    cName: 'nav-text'
  },
];

const SidebarSettingsLogoutData = [
  {
    title: 'Settings',
    path: '/dashboard/settings',
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

let key_index = 0

const NavigationBar = (props) => {
    const navigate = useNavigate();
    const currentPage = window.location.href.split("/").at(-1)
  
      return (
        <div className="dash-bar"  >
          <div className="dash-bar-top">
              {SidebarPageData.map((item) => {
                  return  (currentPage === item.path.split("/").at(-1)) ? <div className="dash-bar-item" style={{ background: '#1e1e1e',
                                                                                                width: props.currentWidth,
                                                                                                color: '#fff',
                                                                                                boxShadow: 'rgb(0 0 0) 0px 0px 4px 1px',
                                                                                                /*borderRadius: '0px 30px 30px 0px' */}} key={key_index++}  onClick={() => navigate(item.path)} >
                                                              <div className="dash-bar-item-selected" key={key_index++} style={{ background: 'linear-gradient(195deg, rgb(255, 148, 48) 11.2%, rgb(255, 124, 0) 100.2%)' }}  />
                                                              <div className="dash-bar-icon" key={key_index++} > {item.icon} </div>
                                                              <div className="dash-bar-text" key={key_index++} > {item.title} </div>
   
                                                          </div>  
                                                      :  <div className="dash-bar-item" style={{ width:props.currentWidth}} key={key_index++}  onClick={() => navigate(item.path)} >
                                                              <div className="dash-bar-icon" key={key_index++} > {item.icon} </div>
                                                              <div className="dash-bar-text" key={key_index++} > {item.title} </div>
                                                          </div>
              })}
          </div>
          <div className="bottom-sidebar-items">
              {SidebarSettingsLogoutData.map((item) => {
                  return (currentPage === item.path.split("/").at(-1)) ?   <div className="dash-bar-item" style={{ background: '#1e1e1e', width: props.currentWidth, }} key={key_index++} onClick={() => navigate(item.path)}>
                                                              <div className="dash-bar-item-selected" key={key_index++} style={{ background: 'linear-gradient(195deg, rgb(255, 148, 48) 11.2%, rgb(255, 124, 0) 100.2%)' }} />
                                                              <div className="dash-bar-icon" key={key_index++} > {item.icon} </div>
                                                              <div className="dash-bar-text" key={key_index++} > {item.title} </div>
                                                          </div>
                                                      :   <div className="dash-bar-item" style={{ width: props.currentWidth, }} key={key_index++} onClick={() => navigate(item.path)} >
                                                              <div className="dash-bar-icon" key={key_index++} > {item.icon} </div>
                                                              <div className="dash-bar-text" key={key_index++} > {item.title} </div>
                                                          </div>
              })}

          </div>
      </div>
    );
}

export default NavigationBar