import React from "react";
import { connect } from 'react-redux';
import { pingpongAsync } from '../../../app/services/user/userAPI';

class DashboardChallenge extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
       
        };
    }

    pingPongButtonPress = () => {
        this.props.dispatch(pingpongAsync({data: "ping"}))
    }

    componentDidMount(){

    } 
    

  render() {
    return  <div className="dash-inner-wrapper dashboard-page-scroll-wrapper">
                {/* <div className="full-wh flex center" >
                    <button onClick={() => {this.pingPongButtonPress()}} style={{ height: '30px', width: '100px' }}> Press Me </button>
                </div> */}
                <div className="dashboard-full-containers height-300 dashboard-card">
                  <div className="flex center">PK bar</div>
                </div>
                <div className="flex flex_row height_100">
                  <div className="dashboard-two-third-container flex flex_col height_100">
                    <div className="dashboard-card height_20">
                      <div className="flex center">Invite team for competing</div>
                    </div>
                    <div className="dashboard-card height_15">
                      <div className="flex center">Goal category</div>
                    </div>
                    <div className="dashboard-card height_20">
                    <div className="flex center">Set Group Goal</div>
                    </div>
                  </div>
                  <div className="dashboard-one-third-container dashboard-card height_100">
                    <div className="flex center">Group Ranking</div>
                  </div>
                </div>
                
            </div>
  }
}

const MapStateToProps = (state) => ({ 
  userData: state.userData.info,
});
export default connect(MapStateToProps)(DashboardChallenge)