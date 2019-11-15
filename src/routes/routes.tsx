import React from 'react';
import { Route, Redirect, RouteProps, Switch } from 'react-router-dom';
import LoginComponent from '../components/login/login.component';
import DashBoardComponent from '../components/dashboard/dashboard';
import TeachersComponent from '../components/teachers/teachers.component';
interface PrivateRouteProps extends RouteProps {
    // tslint:disable-next-line:no-any
    component: any;
}
 const CustomRouter = (props: any) => (
        <Switch>
            <Route path="/login" component={LoginComponent}></Route>
            <PrivateRoute  path="/dashboard" exact component={DashBoardComponent}></PrivateRoute>
            <PrivateRoute  path="/teacher" exact component={TeachersComponent}></PrivateRoute>
        </Switch>
);
const PrivateRoute = (props: PrivateRouteProps) => {
    const { component: Component, ...rest } = props;

    return (
        <Route
            {...rest}
            render={(routeProps) =>
                localStorage.getItem('user') ? (
                    <Component {...routeProps} />
                ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: routeProps.location }
                            }}
                        />
                    )
            }
        />
    );
};

export default CustomRouter;