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
        <NavBar activePage={"about"}/>
        <div className="info">
          <div className="profile-pic">
            <img src={profilePic}></img>
          </div>

          <div className="pink-circle">
          </div>

          <div className="welcome-header">
            <h4> I am a <span className="emphasis">student</span>,
            <span className="emphasis"> tech enthusiast</span>,
            <span className="emphasis"> amateur designer</span>, and an
            <span className="emphasis"> advid coffee drinker</span>. </h4>
          </div>

          <div className='more-info'>
            <h5> Thanks for stopping by! </h5>

            <br></br>

            <h5> I’m Sophia, a rising senior studying <span className="emphasis">
            Computer Science </span> and <span className="emphasis">
            Applied Mathematics </span> at <span className="emphasis">
            Brown University</span>. </h5>

            <br></br>

            <h5> I have a passion for creating products that help
            improve the lives of everyday people, and seeing those
            products make a change in society. My interests lie
            particularly in <span className="emphasis">software engineering
            </span>, <span className="emphasis">machine learning</span>,
            and <span className="emphasis">UI/UX design</span>.</h5>

            <br></br>

            <h5> Currently a returning intern in the <span className="emphasis">
            Natural Language Understanding and Experiences</span> team of
            <span className="emphasis"> Bing Engineering </span>
            at <span className="emphasis">Microsoft</span>.</h5>

            <br></br>

            <h5> Previously at <span className="emphasis">
            National Center for Atmospheric Research</span>,
            working on high performance computing, statistical modeling,
            data visualization, and front-end software engineering.</h5>

            <div className="socials">
              <a className="social-link" href="https://www.linkedin.com/in/sophiachen9981/">linkedin</a>
              <a className="social-link" href="https://github.com/schen9981">github</a>
              <a className="social-link" href="https://medium.com/@sophia_chen1">medium</a>
            </div>
          </div>

        </div>
      </div>
    );
  }

}
