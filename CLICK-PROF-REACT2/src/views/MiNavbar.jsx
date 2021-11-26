import React from "react";
import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Icon } from '@material-ui/core'
import logo from "../img/CLIK_PROF_LOGO.png"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./Home";
import Nosotros from "./Nosotros";
import Quiz from "./Quiz"



import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

import "../css/Navbar.css";

import VideosPage from "./VideosPage";
import LoginPageView from "./LoginPageView";
import Vocabulary from "./Vocabulary";
import DeleteIcon from "@material-ui/icons/Delete";
import LogOut from "../components/LogOut";










function MiNavbar() {
  const { user, isAuthenticated, isLoading } = useAuth0()
  return (
    <React.Fragment>
      <Router>
        <div>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <img src={logo} style={{height:"50px", width:"50px"}}/>
              <Navbar.Brand href="/"> <h4>CLICK-PROF</h4></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-center" style={{ flex: 1}}>
                  <NavLink className="NavLink" activeClassName="selected" to="/" exact>Home</NavLink>
                  <NavLink className="NavLink" activeClassName="selected" to="login" exact>Login</NavLink>
                  <NavLink className="NavLink" activeClassName="selected" to="/vocabulary">Vocabulary</NavLink>
                  
                  <NavLink className="NavLink" activeClassName="selected" to="/quiz">Quiz</NavLink>
                  <NavLink className="NavLink" activeClassName="selected" to="/videos">Videos</NavLink>
                 

                </Nav>
                <Avatar alt="User Picture" src={isAuthenticated? user.picture : ""}  />
                
                {isAuthenticated? <LogOut/> : <p></p> }
                
                
                
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <Switch>
          <Route path="/nosotros" component={Nosotros}></Route>
          <Route path="/login" component={LoginPageView}></Route>

          
          <Route path="/quiz" exact component={Quiz}></Route>

          <Route path="/videos" exact component={VideosPage}></Route>
          <Route path="/vocabulary" exact component={Vocabulary}></Route>
         


          <Route path="/" exact component={Home}></Route>

        </Switch>
      </Router>
    </React.Fragment>
  );
}

export { MiNavbar };
