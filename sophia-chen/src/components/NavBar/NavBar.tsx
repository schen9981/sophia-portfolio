import React from "react";
import "./NavBar.css";
import { Nav, NavItem }  from "react-bootstrap";
import { NavLink  } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import resumeFile from "../../assets/sophia-resume.pdf";
import { useLocation } from 'react-router-dom';

type NavBarProps = {
  activePage: string | null
};

type NavBarState = {

};

export default class NavBar extends React.Component<NavBarProps, NavBarState> {
  constructor(props: NavBarProps) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className="NavBar">
        <Navbar
          collapseOnSelect
          expand="lg"
        >
          <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <NavItem>
                <NavLink exact className="navbar-elem" activeClassName="selected" to="/about">about</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact className="navbar-elem" activeClassName="selected" to="/work">work</NavLink>
              </NavItem>
              <NavItem >
                <NavLink exact className="navbar-elem" activeClassName="selected" to={resumeFile} target="_blank">resume</NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
