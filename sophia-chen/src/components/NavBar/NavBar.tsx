import React from "react";
import "./NavBar.css";
import { Nav, NavItem }  from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import resumeFile from "../../assets/sophia-resume.pdf";

type NavBarProps = {

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
          style={{
            alignItems: "center",
            paddingLeft: "11vw",
          }}
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="navbar-custom">
            <Nav className="ml-auto">
              <NavItem>
                <Link className="navbar-elem" to="/about">about</Link>
              </NavItem>
              <NavItem>
                <Link className="ml-5 navbar-elem" to="/work">work</Link>
              </NavItem>
              <NavItem >
                <Link className="ml-5 navbar-elem" to={resumeFile} target="_blank">resume</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
