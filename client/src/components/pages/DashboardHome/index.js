import React from "react";
import { connect } from 'react-redux';
import * as TI from "react-icons/ti";
import * as IO from "react-icons/io";
import * as FA from "react-icons/fa";
import ReactApexChart from 'react-apexcharts'
import UserInfoCard from './UserInfoCard'
import SmallGraphCard from './SmallGraphCard'



const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

          
class DashboardHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 

          options: {
          chart: {
              type: 'donut',
              dropShadow: {
                enabled: false,
                top: 1,
                left: 1,
                blur: 2,
                opacity: 0.2,
              }
          },
          dataLabels: {
            enabled: false,
            name: "davghj",
          },
          legend: {
            show: false,
          },
          fill: {
            type: 'gradient',
          },
          stroke: {
            colors: ['#191919'],
            width: 10,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  color: '#fff',
                  total: {
                    show: true,
                    color: '#fff',
                    fontSize: '22px',
                    fontFamily: 'Montserrat, Arial, sans-serif',
                    fontWeight: 'bold',
                  },
                  value: {
                    color: '#fff',
                    fontSize: '20px',
                    fontFamily: 'Montserrat, Arial, sans-serif',
                  },
          
          
          
                }
              }
            }
          }
        } 
      };
    }


    componentDidMount(){

    } 
    

  render() {
    return ( 
      <div className="testing">
        <div className="dashboard-flex-grid-wrapper">
          <div className=" overview-welcome-container dashboard-container flex flow-col">
            <div className="new-blank-card  overview-welcome-box" >
              <div className="flex justify-center flow-col">
                <b className="overview-welcome-greeting">{"Hello, " + this.props.userData.fullName} </b> 
                <p>Every workout is a growth opportunity</p>
              </div>
              <div className="overview-date flex center ">
                <p>{ monthNames[(new Date()).getMonth()] + " " + (new Date()).getDate() /*+ " " + (new Date()).getFullYear()*/ }</p> 
                {/*<TI.TiCalendarOutline color={'#fff'} style={{marginBottom: "4px"}} fontSize={'1.35rem'} />*/}
                <IO.IoIosCalendar color={'#fff'} style={{marginBottom: "3px"}} fontSize={'1.5rem'} />
              </div> 
            </div>
{/* ========================================================================================================= */}
            <div className="overview-wrapper-1" >
              <div className="overview-container-2 dashboard-container" >
                <div className="new-dashboard-card overview-time-breakdown-card" >
                  <div className="overview-time-breakdown-card-top" > Workout Breakdown </div>
                  <div className="overview-time-breakdown-card-mid flex center">
                    <div className="overview-time-breakdown-card-chart flex center">
                      <ReactApexChart options={this.state.options} series={[44, 55, 41, 17, 15]} type="donut" height={275} width={375} />
                    </div>
                    <div className="overview-time-breakdown-card-mid-content">
                      <div className="flex flow-row" ><div className="dashboard-card-percentage">8%</div>increase from last 30 days </div>
                      <div className="tiny-text">Calculated over the last 30 days</div>
                    </div>
                  </div>
                  <div className="overview-time-breakdown-card-bottom " >
                    <button className="flex center"> More Details </button>

                  </div>
                </div>
              </div>  
              <div className="overview-container-2 dashboard-container" >
                <div className="new-blank-card two-by-two" >
                  <SmallGraphCard color={"blue"} activity={"running"} data={[ 1,2,0,4,5,2,6 ]} units={"Miles"} />
                  <SmallGraphCard color={"pink"} activity={"walking"} data={[ 1,2,3,0,0,2,4 ]} units={"Miles"} />
                  <SmallGraphCard color={"purple"} activity={"biking"} data={[ 0,8,4,0,8,7,2 ]} units={"Miles"} />
                  <SmallGraphCard color={"teal"} activity={"swimming"} data={[ 20,25,28,22,17,27,25 ]} units={"Meters"} />
                
                </div>
              </div>  
              <div className="overview-container-3  dashboard-container" >
                 {/* THESE ARE THE SAME!!!!!! */}
                <div className="new-dashboard-card flex center" > 6 </div>
              </div>  
            </div>
{/* ========================================================================================================= */}
          </div>
          <div className="overview-user-info-container dashboard-container">
              <UserInfoCard userPicture={this.props.userData.userPicture} fullName={this.props.userData.fullName}  />
          </div> 
        </div>
        <div className="dashboard-flex-grid-wrapper margin-top-none">
          <div className="overview-container-4  dashboard-container" >
            {/* THESE ARE THE SAME!!!!!! */}
            <div className="new-dashboard-card flex center" > 6 </div>
          </div> 
          <div className="dashboard-half-container overview-container-5 dashboard-container" >
            <div className="new-dashboard-card flex center" > 8 </div>
          </div>
          <div className="dashboard-half-container overview-container-6  dashboard-container" >
            <div className="new-dashboard-card flex center" > 9 </div>
          </div>
        </div>
      </div>

    )
  }
}

const MapStateToProps = (state) => ({ 
  userData: state.userData.info,
});
export default connect(MapStateToProps)(DashboardHome)
    /* <div className="overview-grid">
        <div className="overview-grid-b1" >
 
          </div>
        <div className="overview-grid-b2" >
          <div className="groopfit-container" />
        </div>
        <div className="overview-grid-b3 flex flow-row card-gap" >
          <div className="groopfit-container" />
        </div>
        <div className="overview-grid-b4" >
          <div className="groopfit-container fb-50" />
          <div className="groopfit-container fb-50" />
          <div className="groopfit-container fb-50" />
          <div className="groopfit-container fb-50" />
        </div>
        <div className="overview-grid-b5" >
          <div className="groopfit-container" />
        </div>
    </div> */