import React from "react";
import { connect } from 'react-redux';
import * as TI from "react-icons/ti";
import * as IO from "react-icons/io";
import * as IO5 from "react-icons/io5";
import * as FA from "react-icons/fa";
import * as HI from "react-icons/hi";
import ReactApexChart from 'react-apexcharts'
import UserInfoCard from './UserInfoCard'
import SmallGraphCard from './SmallGraphCard'
import SmallButtonCard from './SmallButtonCard'

let series2 =  [
  {
    name: 'Progress',
    data: [
      {
        x: 'Running',
        y: 8,
        goals: [
          {
            name: 'Average',
            value: 10,
            strokeHeight: 5,
            strokeLineCap: 'round',
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: 'Walking',
        y: 12,
        goals: [
          {
            name: 'Average',
            value: 8,
            strokeHeight: 5,
            strokeLineCap: 'round',
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: 'Swimming',
        y: 20,
        goals: [
          {
            name: 'Average',
            value: 15,
            strokeHeight: 13,
            strokeWidth: 0,
            strokeLineCap: 'round',
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: 'Biking',
        y: 5,
        goals: [
          {
            name: 'Average',
            value: 3,
            strokeHeight: 3,
            strokeDashArray: 3,
            strokeColor: '#775DD0'
          }
        ]
      }
    ]
  }
]

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

          
class DashboardHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 

          options2: {
            chart: {
              type: 'bar',
              foreColor: '#888888',
              fontFamily: 'Montserrat, Arial, sans-serif',
              dropShadow: {
                enabled: true,
                top: 1,
                left: 1,
                blur: 2,
                opacity: 0.2,
              }
            },
            title: {
              text: "Your Weekly Statistics",
              style: {
                color: "#fff",
                fontSize: '20px',
                fontWeight: "bold",
                fontFamily: 'Montserrat, Arial, sans-serif',
              },
            },
            fill: {
          
            },
            plotOptions: {
              bar: {
                columnWidth: '60%'
              }
            },
            colors: ['#00E396'],
            dataLabels: {
              enabled: false
            },
            legend: {
              show: true,
              position: 'bottom',
              fontSize: '16px',
              color: "#fff",
              fontSize: '18px',
              fontFamily: 'Montserrat, Arial, sans-serif',
              showForSingleSeries: true,
              customLegendItems: ['&nbsp;' + 'This Week', '&nbsp;' + 'Average'],
              markers: {
                fillColors: ['#00E396', '#775DD0']
              }
            },
            xaxis: {
              labels: {
                style: {
                  fontSize: '16px',
                }
              }
            },
            yaxis: {
              labels: {
                style: {
                  fontSize: '16px',
                }
              }
            }
          },

          options: {
            chart: {
                type: 'donut',
                foreColor: '#ccc',
                dropShadow: {
                  enabled: false,
                  top: 1,
                  left: 1,
                  blur: 2,
                  opacity: 0.2,
                }
            },
            labels: [" Walking", " Running", " Swimming", " Biking", " Other"],
            dataLabels: {
              enabled: false,

            },
            legend: {
              show: true,
              position: 'left',
              color: "#fff",
              fontSize: '16px',
              fontFamily: 'Montserrat, Arial, sans-serif',
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
                      label: 'Total\nHours',
                      color: '#fff',
                      fontSize: '18px',
                      fontFamily: 'Montserrat, Arial, sans-serif',
                      fontWeight: 'bold',
                    },
                    value: {
                      color: '#fff',
                      fontSize: '18px',
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
      console.log(this.props.userData)
    } 
    

  render() {
    return ( 
      <div className="dashboard-page-scroll-wrapper">
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
                  <div className="overview-time-breakdown-card-top" > Workout Hours Breakdown </div>
                  <div className="overview-time-breakdown-card-mid flex center">
                    <div className="overview-time-breakdown-card-chart flex center">
                      <ReactApexChart options={this.state.options} series={[44, 55, 41, 17, 15]} type="donut" height={300} width={400} />
                    </div>
                    <div className="overview-time-breakdown-card-mid-content">
                      <div className="tiny-text flex flow-row baseline "><div className="dashboard-card-percentage">8%</div> {" " + "Increase"} this month compared to last month</div>
                    </div>
                  </div>
                  <div className="overview-time-breakdown-card-bottom " >
                    <button className="flex center" onClick={() => alert("This Functionality is Incomplete")}  > More Details </button>

                  </div>
                </div>
              </div>  
              <div className="overview-container-2 dashboard-container" >
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
              <div className="overview-container-3  dashboard-container" >
                 {/* THESE ARE THE SAME!!!!!! */}
                <div className="new-dashboard-card goal-bar-chart-card flex center" >
                  <div className="goal-bar-chart">
                    <ReactApexChart options={this.state.options2} series={series2} type="bar" height={"100%"} width={"100%"} />
                  </div>
                </div>
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
            <div className="new-dashboard-card goal-bar-chart-card flex center" >
              <div className="goal-bar-chart">
                <ReactApexChart options={this.state.options2} series={series2} type="bar" height={"100%"} width={"100%"} />
              </div>
            </div>
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