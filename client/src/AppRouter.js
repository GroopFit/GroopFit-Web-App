import React, {  lazy } from 'react';
import { createBrowserHistory } from "history";
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route, Router, Navigate} from 'react-router-dom';

/* Routing */ 
//Make an Import to store all of the routes as variables
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';
import DashboardActivities from './components/pages/DashboardActivities/index';
import DashboardOverview from './components/pages/DashboardOverview/index';
import ComingSoonPage from './components/pages/ComingSoon/index';
//import LoginSignupPage from './components/pages/LoginSignupPage/index';
//const history = createBrowserHistory();
//const ComingSoonPage = lazy(() => import('./components/pages/ComingSoon/index'));
const LoginSignupPage = lazy(() => import('./components/pages/LoginSignupPage/index'));
const DashboardWrapper = lazy(() => import('./components/DashboardWrapper/index'));
const DashboardHome = lazy(() => import('./components/pages/DashboardHome/index'));
//const DashboardActivities = lazy(() => import('./components/pages/DashboardActivities/index'));
//const DashboardOverview = lazy(() => import('./components/pages/DashboardOverview/index'));
//const DashboardActivities = lazy(() => import('./components/pages/DashboardActivities/index'));
//const DashboardHome = lazy(() => import('./components/pages/DashboardGroups/index'));

//import LoginSignupPage from './components/pages/LoginSignupPage/index';


class AppRouter extends React.Component {
  render() {
    return (
        <BrowserRouter > 
          <Routes >
              {/*<PublicRoute component={LoginRegisterPage} path={'/'} exact />*/}
              <Route element={ <LoginSignupPage /> } path={'/'} exact />
              <Route element={ <ComingSoonPage /> } path={'/coming-soon'} exact />
              <Route element={  this.props.accessToken !== null ? 
                                  <DashboardWrapper >
                                    <DashboardHome />
                                  </DashboardWrapper> 
                                : <Navigate to="/" /> } path={'/dashboard'} exact />
              <Route element={  this.props.accessToken !== null ? 
                                  <DashboardWrapper >
                                    {/* Need to create this routes component */}
                                    <DashboardOverview />
                                  </DashboardWrapper > 
                                : <Navigate to="/" /> } path={'/dashboard/overview'} exact />
              <Route element={  this.props.accessToken !== null ? 
                                  <DashboardWrapper>
                                    <DashboardActivities />
                                  </DashboardWrapper> 
                                : <Navigate to="/" /> } path={'/dashboard/activities'} exact />
              <Route element={  this.props.accessToken !== null ? 
                                  <DashboardWrapper >
                                    {/* Need to create this routes component */}
                                    <div>GROUPS PAGE</div>
                                  </DashboardWrapper> 
                                : <Navigate to="/" /> } path={'/dashboard/groups'} exact />
              <Route element={  this.props.accessToken !== null ? 
                                  <DashboardWrapper >
                                    {/* Need to create this routes component */}
                                    <div>CHALLENGES PAGE</div>
                                  </DashboardWrapper> 
                                : <Navigate to="/" /> } path={'/dashboard/challenges'} exact />
          </Routes>
        </BrowserRouter>
    );
  }
}
const MapStateToProps = (state) => ({ accessToken: state.userData.auth.accessToken });
export default connect(MapStateToProps)(AppRouter)
//export default AppRouter;