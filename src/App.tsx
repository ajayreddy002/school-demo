import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SideNavComponent from './components/shared/sidenav/sidenav.component';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginComponent from './components/login/login.component';
export class App extends React.Component {
  render() {
    const currentPath = window.location.pathname
    return (
      <div className="App">
        <BrowserRouter>
          {localStorage.getItem('user') &&  (!currentPath.includes('login')) &&
            <SideNavComponent />
          }
          {(!localStorage.getItem('user') || currentPath.includes('login'))  && 
            <Route path="/login" component={LoginComponent}></Route>
          }
        </BrowserRouter>
      </div>
    )
  }
}
export default App;
