import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import profileImg from './images/sophia.png'

var boldStyle = {
	fontWeight: 'bold',
  display: 'inline',
	fontSize: '1em'
};

const AboutSection = () => (
  <ScrollableAnchor id="about">
    <section className="content-section bg-light">
      <div className="container text-center">
          <div className="col-lg-10 mx-auto">
						<h2> About Me </h2>
            <h3>
              Design - Software Engineering - Data Science
            </h3>
            <div className="profileDiv">
              <img className="profile" src={profileImg}></img>
						</div>
            <div className="descripDiv">
              <p className="lead mb-5">
                  I currently am a <p style={boldStyle}>sophomore</p> at
                  <p style={boldStyle}> Brown University</p> in Providence,
                  Rhode Island, studying <p style={boldStyle}>Computer Science </p>
                and <p style={boldStyle}>Applied Mathematics</p>.
                Originally, I am from <p style={boldStyle}> Boulder, Colorado</p>,
                which is home to some of the most stunning views of mountains,
                forests, and wildlife.
                I am passionate about <p style={boldStyle}>technology</p>,
                <p style={boldStyle}> design</p>, and their
                <p style={boldStyle}> multitude of applications </p>to the real world.
              </p>
            </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default AboutSection;
