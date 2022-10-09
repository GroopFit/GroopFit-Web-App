import React from "react";
import { connect } from 'react-redux';
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
                      <b style={{fontSize: '16px', color: '#fff'}}>Group Type:</b> Competetive
                    </div>
                    <div className="groop-dash-text">
                      <b style={{fontSize: '16px', color: '#fff'}}>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                <div className="groop-grid-b4" >
                  <div className="groopfit-container" >
                    </div>
                </div>
                <div className="groop-grid-b5 " >
                  <div className="groopfit-container" />
                </div>
                <div className="groop-grid-b6" >
                  <div className="groopfit-container" />
                </div>
            </div>
  }
}

const MapStateToProps = (state) => ({ 
  userData: state.userData.info,
  groopData: null,
});
export default connect(MapStateToProps)(DashboardGroop)