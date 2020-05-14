import React from 'react';
import './About.css'
import profilePic from "../../assets/cropped.png";
import NavBar from '../../components/NavBar/NavBar';

type AboutProps = {};

type AboutState = {};

export default class About extends React.Component<AboutProps, AboutState> {
  constructor(props: AboutProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="About">
        <NavBar />
        <div className="info">
          <div className="profile-pic">
            <img src={profilePic}></img>
          </div>

          <div className="pink-circle">
          </div>

          <div className="name">
            <h1> SOPHIA CHEN </h1>
          </div>

        </div>
      </div>
    );
  }

}
