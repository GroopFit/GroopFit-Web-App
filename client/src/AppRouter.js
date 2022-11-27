import React, {  lazy } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route, Router, Navigate} from 'react-router-dom';

/* Routing */ 
//Make an Import to store all of the routes as variables
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';
import DashboardActivities from './components/pages/DashboardActivities/index';
import DashboardOverview from './components/pages/DashboardOverview/index';
import DashboardGroops from './components/pages/DashboardGroops/index';
import ComingSoonPage from './components/pages/ComingSoon/index';
import DashboardChallenge  from './components/pages/DashboardChallenge/index';


const LoginSignupPage = lazy(() => import('./components/pages/LoginSignupPage/index'));
const DashboardWrapper = lazy(() => import('./components/DashboardWrapper/index'));
const DashboardHome = lazy(() => import('./components/pages/DashboardHome/index'));
//const DashboardChallenge = lazy(() => import('./components/pages/DashboardChallenge/index'));

class AppRouter extends React.Component {
  render() {
    return (
        <BrowserRouter > 
          <Routes >
              { process.env.REACT_APP_ENVIRONMENT === "development" ? <>
                <Route element={ <LoginSignupPage /> } path={'/'} exact />
                <Route element={ <ComingSoonPage /> } path={'/coming-soon'} exact />
                <Route element={ 
                                    <DashboardWrapper >
                                      <DashboardHome />
                                    </DashboardWrapper> 
                                } path={'/dashboard'} exact />
                <Route element={
                                    <DashboardWrapper >
                                      {/* Need to create this routes component */}
                                      <DashboardOverview />
                                    </DashboardWrapper > 
                                  } path={'/dashboard/overview'} exact />
                <Route element={
                                    <DashboardWrapper>
                                      <DashboardActivities />
                                    </DashboardWrapper> 
                                  } path={'/dashboard/activities'} exact />
                <Route element={  this.props.accessToken !== null ? 
                                    <DashboardWrapper >
                                      <DashboardGroops />
                                    </DashboardWrapper> 
                                  : <Navigate to="/" /> } path={'/dashboard/groups'} exact />
                <Route element={ 
                                    <DashboardWrapper >
                                      <DashboardChallenge />
                                    </DashboardWrapper> 
                                } path={'/dashboard/challenges'} exact />
                <Route element={  this.props.accessToken !== null ? 
                                    <DashboardWrapper >
                                      <></>
                                    </DashboardWrapper> 
                                  : <Navigate to="/" /> } path={'/dashboard/settings'} exact />
              </> : <></> }
              { process.env.REACT_APP_ENVIRONMENT === "production" ? 
                  <>
                    <Route element={ <ComingSoonPage /> } path={'/coming-soon'} exact />
                    <Route path="*" element={<Navigate to="/coming-soon" replace />} />
                  </>
              : <></> }
          </Routes>
        </BrowserRouter>
    );
  }
}
const MapStateToProps = (state) => ({ accessToken: state.userData.auth.accessToken });
export default connect(MapStateToProps)(AppRouter)
