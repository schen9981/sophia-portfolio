import React from 'react';
import './Work.css'
import profilePic from "../../assets/cropped.png";
import NavBar from '../../components/NavBar/NavBar';

type WorkProps = {};

type WorkState = {
  numProjects: number;
};

export default class Work extends React.Component<WorkProps, WorkState> {
  constructor(props: WorkProps) {
    super(props);
    this.state = {
      numProjects: 8
    };
  }

  placeholderFetch() {
    return;
  }

  render() {
    return (
      <div className="Work">
        <NavBar activePage={"work"}/>

        <div className="project-welcome">
          <h4> checkout some projects i've been working on! </h4>
        </div>

        <div className="portfolio-content">

          <div className="project-display" id="project1-bubble">
            <h2> genfit </h2>
          </div>

          <div className="project-display" id="project2-bubble">
            <h2> hack@brown </h2>
          </div>

          <div className="project-display" id="project3-bubble">
            <h2> automated selfie camera </h2>
          </div>

          <div className="project-display" id="project4-bubble">
            <h2> avocado data analysis </h2>
          </div>

          <div className="project-display" id="project5-bubble">
            <h2> maps </h2>
          </div>

          <div className="project-display" id="project6-bubble">
            <h2> search </h2>
          </div>

          <div className="project-display" id="project7-bubble">
            <h2> accelerating analysis with parallel computing </h2>
          </div>

          <div className="project-display" id="project8-bubble">
            <h2> foliar injury analysis </h2>
          </div>
        </div>
      </div>
    );
  }

}
