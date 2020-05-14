import React from "react";
import "./NavBar.css";
import { Nav }  from "react-bootstrap";
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
              <Nav.Link className="navbar-elem" href="about">about</Nav.Link>
              <Nav.Link className="ml-5 navbar-elem" href="work">work</Nav.Link>
              <Nav.Link className="ml-5 navbar-elem" href={resumeFile} target="_blank">resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
