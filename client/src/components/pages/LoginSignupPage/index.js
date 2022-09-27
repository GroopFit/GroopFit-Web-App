import React from "react";
import { connect } from 'react-redux';
import { loginUserAsync } from '../../../app/services/user/authAPI';
import { Route, Navigate, RouteProps } from 'react-router-dom';


class LoginSignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          linkToDashboard: false,
        };
    }

  componentDidMount(){
    //Do not Delete global google comment is required for outside script
    /* global google */
    google.accounts.id.initialize({
      client_id: `${process.env.REACT_APP_GOOGLE_CLIENT_ID}`,
      callback: this.handleCallbackResponse
    }) 

    google.accounts.id.renderButton(
      document.getElementById("googleSignInDiv"),
      { theme: "outline", size: "large", text: "continue_with" }
    )
    console.log(this.props)
    this.setState({ linkToDashboard: this.props.accessToken !== null }) 
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.accessToken !== null && prevProps.accessToken == null) {
      this.setState({ linkToDashboard: true }) 
    }
  } 

  handleCallbackResponse = async callbackResponse  => {
    this.props.dispatch(loginUserAsync({token: callbackResponse.credential}))
  }

  render(){
    switch ( this.state.linkToDashboard ) {
      case false:
        return  <div className="page-wrapper flex center">
                  <div id="googleSignInDiv" data-ux_mode="redirect"></div>
                </div>
        

        default:
          return <Navigate to="/dashboard" />
    }
  }
}

const MapStateToProps = (state) => ({ accessToken: state.userData.auth.accessToken });
export default connect(MapStateToProps)(LoginSignupPage)