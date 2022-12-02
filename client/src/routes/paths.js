import React, {useEffect, useState, lazy} from "react";
import ComingSoonPage from "../components/pages/ComingSoon";

import DashboardActivities from '..OldPage/components/pages/DashboardActivities/index';
import DashboardOverview from '../components/pages/DashboardOverview/index';
import DashboardGroops from '../components/pages/DashboardGroops/index';
import ComingSoonPage from '../components/pages/ComingSoon/index';
import DashboardChallenge  from '../components/pages/DashboardChallenge/index';

const LoginSignupPage = lazy(() => import('./components/pages/LoginSignupPage/index'));
const DashboardWrapper = lazy(() => import('./components/DashboardWrapper/index'));
const DashboardHome = lazy(() => import('./components/pages/DashboardHome/index'));

function AppRouter() {
    const paths = {
        '/coming-soon': <ComingSoonPage/>,
        '/dashboard/settings': <DashboardWrapper ><></></DashboardWrapper>,
        '/dashboard/challenges': <DashboardWrapper ><DashboardChallenge /></DashboardWrapper>,
        '/dashboard/groups': <DashboardWrapper ><DashboardGroops/></DashboardWrapper>,
        '/dashboard/activities': <DashboardWrapper><DashboardActivities /></DashboardWrapper>,
        '/dashboard/overview': <DashboardWrapper><DashboardOverview/></DashboardWrapper>,
        '/dashboard': <DashboardWrapper><DashboardHome /></DashboardWrapper>,
        '/': <Page/>
    };

    let [component, setComponent] = useState(null);

    useEffect(() => {
        const path = window.location.pathname;

        if (path in paths) {
            setComponent(paths[path])
        } else {
            setComponent(<Page/>)
        }
    });

    return (<> {component} </>)
}