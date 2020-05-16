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
        <div className="background">
          <img className="profile-pic-about" src={profilePic}></img>

          <div className="pink-circle-about">
          </div>

        </div>
        <div className='more-info'>
          <p> Hey! Thanks for stopping by! </p>

          <br></br>

          <p> I’m Sophia, a rising senior studying <span className="emphasis">
          Computer Science </span> and <span className="emphasis">
          Applied Mathematics </span> at <span className="emphasis">
          Brown University</span>. </p>

          <br></br>

          <p> My passion is to create products that help
          improve the lives of everyday people. My interests lie
          particularly in <span className="emphasis">software engineering
          </span>, <span className="emphasis">machine learning</span>,
          and <span className="emphasis">UI/UX design</span>.</p>

          <br></br>

          <p> Currently a returning intern in the <span className="emphasis">
          Natural Language Understanding and Experiences</span> team of
          <span className="emphasis"> Bing Engineering </span>
          at <span className="emphasis">Microsoft</span>.</p>

          <br></br>

          <p> Previously at <span className="emphasis">
          National Center for Atmospheric Research</span>,
          working on high performance computing, statistical modeling,
          data visualization, and front-end software engineering.</p>

          <div className="socials">
            <a className="social-link" href="https://www.linkedin.com/in/sophiachen9981/">linkedin</a>
            <a className="social-link" href="https://github.com/schen9981">github</a>
            <a className="social-link" href="https://medium.com/@sophia_chen1">medium</a>
          </div>
        </div>

      </div>
    );
  }

}
