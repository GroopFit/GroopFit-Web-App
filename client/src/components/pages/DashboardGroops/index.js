import React from "react";
import { connect } from 'react-redux';

class DashboardGroop extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
       
        };
    }


    componentDidMount(){

    } 
    

  render() {
    return  <div className="groop-grid">
                <div className="groop-grid-b1" >
                  <div className="groopfit-container" />
                </div>
                <div className="groop-grid-b2" >
                  <div className="groopfit-container" />
                </div>
                <div className="groop-grid-b3" >
                  <div className="groopfit-container" />
                </div>
                <div className="groop-grid-b4" >
                  <div className="groopfit-container" />
                </div>
                <div className="groop-grid-b5 " >
                  <div className="groopfit-container" />
                </div>
                <div className="groop-grid-b6" >
                  <div className="groopfit-container" />
                </div>
                <div className="groop-grid-b7" >
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