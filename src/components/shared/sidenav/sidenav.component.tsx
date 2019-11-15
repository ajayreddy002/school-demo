import React from 'react';
import './sidenav.component.scss';
import CustomRouter from '../../../routes/routes';
import { NavLink } from 'react-router-dom';
export default class SideNavComponent extends React.Component {
    render() {
        return (
            <div id="viewport">
                {/* Sidebar */}
                <div id="sidebar">
                    <header>
                        <p className="title">School App</p>
                    </header>
                    <ul className="nav">
                        <li className="nav_li">
                            <NavLink to="/dashboard" className="nav-link" exact>
                                <i className="fas fa-briefcase"></i>
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="nav_li">
                            <NavLink to="/teacher" className="nav-link" exact>
                                <i className="fas fa-chalkboard-teacher"></i>
                                Teachers
                            </NavLink>
                        </li>
                        <li className="nav_li">
                            <NavLink to="/" className="nav-link" exact>
                                <i className="fas fa-user-friends"></i>
                                Students
                            </NavLink>
                        </li>
                        <li className="nav_li">
                            <NavLink to="/" className="nav-link" exact>
                                <i className="fas fa-users"></i>
                                Parents
                            </NavLink>
                        </li>
                        <li className="nav_li">
                            <NavLink to="/" className="nav-link" exact>
                                <i className="fas fa-shuttle-van"></i>
                                Transport
                            </NavLink>
                        </li>
                        <li className="nav_li">
                            <NavLink to="/" className="nav-link" exact>
                                <i className="fas fa-school"></i>
                                Schools
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* Content */}
                <div id="content">
                    <div className="header_block">
                        <ul className="user_menu">
                            <li className="mr-sm-2">Signout</li>
                        </ul>
                    </div>
                    <div className="container-fluid">
                        <div className="route_view">
                            <CustomRouter></CustomRouter>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}