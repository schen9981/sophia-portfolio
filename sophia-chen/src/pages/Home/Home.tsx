import React from 'react';
import './Home.css'
import profilePic from "../../assets/cropped.png";
import NavBar from '../../components/NavBar/NavBar';
import { Ripple } from 'react-spinners-css';

type HomeProps = {};

type HomeState = {
  loading: boolean
};

export default class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
  }


  render() {
    return (
      <div className="Home">
        <div className="green-circle">
        </div>
        <NavBar activePage={null}/>

        <img className="profile-pic" src={profilePic}></img>

        <div className="welcome-circles">
          <div className="pink-circle">
          </div>

          <div className="red-circle">
          </div>

          <div className="name">
            <h1> SOPHIA CHEN </h1>
          </div>
        </div>
      </div>
    );
  }

}
