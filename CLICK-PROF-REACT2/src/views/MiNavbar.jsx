import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./Home";
import Nosotros from "./Nosotros";
import Quiz from "./Quiz"
import TodoMachine from "./TodoMachine";


import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

import "../css/Navbar.css";

import VideosPage from "./VideosPage";
import LoginPageView from "./LoginPageView";
import Vocabulary from "./Vocabulary";


function MiNavbar() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="/">CLICK-PROF</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-center" style={{ flex: 1}}>
                  <NavLink className="NavLink" activeClassName="selected" to="/" exact>Home</NavLink>
                  <NavLink className="NavLink" activeClassName="selected" to="login" exact>Login</NavLink>
                  <NavLink className="NavLink" activeClassName="selected" to="/vocabulary">Vocabulary</NavLink>
                  <NavLink className="NavLink" activeClassName="selected" to="/todoMachine">To do Machine</NavLink>
                  <NavLink className="NavLink" activeClassName="selected" to="/quiz">Quiz</NavLink>
                  <NavLink className="NavLink" activeClassName="selected" to="/videos">Videos</NavLink>
                 

                  <NavDropdown className="NavLink" title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <Switch>
          <Route path="/nosotros" component={Nosotros}></Route>
          <Route path="/login" component={LoginPageView}></Route>

          <Route path="/todoMachine" component={TodoMachine}></Route>
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
