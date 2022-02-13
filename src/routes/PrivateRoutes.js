import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';

const DashboardComponent = lazy(() => import('./dashboard'));
const SitesComponent = lazy(() => import('./Sites'));
const Migrations = lazy(() => import('./Migrations'));
const KindaDNS = lazy(() => import('./KindaDNS'));
const Users = lazy(() => import('./Users'));
const ActivityLog = lazy(() => import('./ActivityLog'));
const Analytics = lazy(()=> import('./Analytics'));
const Company = lazy(()=> import('./Company'));
const Profile = lazy(()=> import('./Profile'));

function PrivateRoutes() {
    console.log(SLUGS.company)
    console.log(SLUGS.profile)
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route  path={SLUGS.dashboard} component={DashboardComponent} />
                <Route  path={SLUGS.sites} component={SitesComponent} />
                <Route  path={SLUGS.migrations} component={Migrations} />
                <Route  path={SLUGS.dns} component={KindaDNS} />
                <Route  path={SLUGS.users}  component={Users}  />
                <Route  path={SLUGS.activity} component={ActivityLog} />
                <Route  path={SLUGS.analytics} component={Analytics}/>
                <Route  path={SLUGS.company} component={Company}/>
                <Route  path={SLUGS.profile} component={Profile}/>
                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
