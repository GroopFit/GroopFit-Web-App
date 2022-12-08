import * as IoIcons from 'react-icons/io';
import * as IoIcons5 from 'react-icons/io5';
import * as FA from "react-icons/fa";
import * as HI from "react-icons/hi";
import * as RI from "react-icons/ri";
import * as  MdIcon from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";


const ALL_ACTIVITIES = [
    
]

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
  /*  {
      title: 'Activities 2',
      path: '/dashboard/activities2',
      icon:  <FA.FaRunning />,
      cName: 'nav-text'
    },*/
    {
      title: 'My Groops',
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

  export default  {SidebarPageData, SidebarSettingsLogoutData}
