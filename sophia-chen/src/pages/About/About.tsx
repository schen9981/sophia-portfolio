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

          <p> hi! i’m sophia, a rising senior studying <span className="emphasis">
          computer science </span> and <span className="emphasis">
          applied mathematics </span> at <span className="emphasis">
          Brown University</span>. my interests lie
          particularly in <span className="emphasis">software engineering
          </span>, <span className="emphasis">machine learning</span>,
          and <span className="emphasis">ui/ux design</span>.</p>

          <br></br>

          <p> this summer i was a software engineering intern in the
          <span className="emphasis"> answers and segments</span> team of
          <span className="emphasis"> Bing WebXT </span>
          at <span className="emphasis">Microsoft</span>, working on a query
          reformulation natural language understanding project for improving
          the question-answering experience for non-triggered queries.</p>

          <br></br>

          <p> formerly an intern <span className="emphasis">Microsoft</span> in the
          <span className="emphasis"> natural language understanding and
          experiences</span> team of <span className="emphasis">Bing Engineering
          </span>, and an engineering intern at the <span className="emphasis">
          National Center for Atmospheric Research</span>.</p>

          <br></br>

          <p> at school, I am a member of <span className="emphasis"> Hack@Brown
          </span>, to organize Brown's annual hackathon of 400+ participants,
          formerly as a developer on the <span className="emphasis">development team
          </span>, and now <span className="emphasis">codirector </span>
          of a team of 40+ members. i also am a <span className="emphasis">
          teaching assistant</span> in the computer science department for
          ui/ux and software engineering.</p>

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
