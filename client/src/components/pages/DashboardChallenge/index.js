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
    return  <div className="dash-inner-wrapper">
                <div className="full-wh flex center" >
                    <button onClick={() => {this.pingPongButtonPress()}} style={{ height: '30px', width: '100px' }}> Press Me </button>
                </div>
            </div>
  }
}

const MapStateToProps = (state) => ({ 
  userData: state.userData.info,
});
export default connect(MapStateToProps)(DashboardChallenge)