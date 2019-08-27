import React from "react";
import resumeFile from './files/sophiachen-brownu.pdf';

var boldStyle = {
	fontWeight: 'bold',
  display: 'inline',
	fontSize: '1em'
};

const Header = () => (
  <header className="masthead d-flex">
    <div className="container my-auto">
        <h3 className="mb-1">hey, i'm sophia. </h3>
        <div className="about">
          <p className="lead mb-5">
            I’m currently a junior at <p style={boldStyle}>Brown University</p>, studying computer science and applied mathematics.
            <br></br>
            <br></br>
            I have a passion for creating products that help improve the lives of everyday people, and
            seeing those products make a change in society. My interests lie particularly in software engineering,
            machine learning, and UI/UX design.
            <br></br>
            <br></br>
            Currently interning <p style={boldStyle}>@Microsoft</p> in the Natural Language Understanding and Experiences team of Bing
            Engineering, working full-stack to develop a new Bing answer.
            <br></br>
            Previously <p style={boldStyle}>@National Center for Atmospheric Research</p>, where I worked on various projects ranging from
            high performance computing and statistical modeling to data visualization and front-end software engineering.
          </p>
          <div className="links">
            <a href="https://www.linkedin.com/in/sophiachen9981/">linkedin</a>&nbsp;&nbsp;
            <a href={resumeFile}>resume</a>&nbsp;&nbsp;
            <a href="https://github.com/schen9981">github</a>&nbsp;&nbsp;
            <a href="https://medium.com/@sophia_chen1">medium</a>&nbsp;&nbsp;
            <a href="mailto:schen9981@gmail.com">email</a>&nbsp;&nbsp;
          </div>
        </div>
    </div>
    <div className="overlay" />
  </header>
);
export default Header;
