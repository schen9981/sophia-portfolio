import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Modal from 'react-responsive-modal';
import Project1 from './project1';
import Project2 from './project2.js';
import Project3 from './project3';
import Project4 from './project4';
import Project5 from './project5';
import Project6 from './project6';
import Project7 from './project7';
import Project8 from './project8';
import Project9 from './project9';


const modalstyles = {
  overlay: {
    'background': "#dee2e65c",
  },
  modal: {
    'background': "#fdf496",
    'maxWidth': "80vw",
    'width': "100%",
    'borderRadius': "3px",
    'color': "#236fa2",
  },
  closeButton: {
    'border': "none"
  },
  transitionEnter: {
    'transform': "scale(4)"
  },
  transitionEnterActive: {
    'transform': "scale(5)",
    'transition': "transform 1000ms ease"
  }
};

const portfolioItems1 = [
  {
    imgSrc: "./img/portfolio-1.jpg",
    heading: "A Critique of VSCO",
    description: "An analysis of the user interface and user experience of VSCO, a photo editing/journaling platform.",
    index: "openModal1"
  },
  {
    imgSrc: "./img/portfolio-1.jpg",
    heading: "Eyetracking of Mental Happy",
    description:
      "A analysis of an interface design of an emerging startup using eyetracking technology.",
    index: "openModal2"
  },
  {
    imgSrc: "./img/portfolio-1.jpg",
    heading: "Live Filtering of Bagel Gourmet Bagels",
    description:
      "A live filtering page built in React.js for Bagel Gourmet's bagels, using React components and state.",
    index: "openModal3"
  }
];

const portfolioItems2 = [
  {
    imgSrc: "./img/portfolio-1.jpg",
    heading: "A/B and User Testing of Taxi Platform",
    description:
      "A qualitative and quantitative analysis of user's interaction with a redesign of a taxi-reserving platform.",
    index: "openModal4"
  },
  {
    imgSrc: "./img/portfolio-1.jpg",
    heading: "Calmunity",
    description:
      "A YHack 2018 project for a platform that fosters free and peaceful community sharing of feelings, supporting user to user interaction, journaling, and a positivity bot.",
    index: "openModal5"
  },
  {
    imgSrc: "./img/portfolio-1.jpg",
    heading: "Guizilla",
    description:
      "An interactive GUI browser in Java, involving implementing client and server side with sockets, reflection, JavaFX events, and XML file parsing.",
    index: "openModal6"
  }
];

const portfolioItems3 = [
  {
    imgSrc: "./img/portfolio-1.jpg",
    heading: "Search",
    description:
      "An interactive  interactive search engine in Java that takes user text queries and returns most relevant documents using the PageRank algorithm.",
    index: "openModal7"
  },
  {
    imgSrc: "./img/portfolio-1.jpg",
    heading: "Accelerating Analysis with Parallel Computing",
    description:
      "A technote on optimizing statistical analysis in R of large climate datasets with parallel computing on NCAR's supercomputer.",
    index: "openModal8"
  },
  {
    imgSrc: "./img/portfolio-1.jpg",
    heading: "Ozone Concentration and Foliar Injury Analysis",
    description:
      "A technote on modeling a correlation between ozone concentration and visible foliar injury from ozone.",
    index: "openModal9"
  }
];

export default class PortfolioSection extends React.Component {
  state = {
    openModal1: false,
    openModal2: false,
    openModal3: false,
    openModal4: false,
    openModal5: false,
    openModal6: false,
    openModal7: false,
    openModal8: false,
    openModal9: false,
  };

  onOpenModal = (index) => {
    this.setState({[index]: true });
  }

  onCloseModal = (index) => {
    this.setState({[index]: false });
  }

  render() {
    const { openModal1, openModal2, openModal3,
            openModal4, openModal5, openModal6,
            openModal7, openModal8, openModal9 } = this.state;

    const components = {
        openModal1: Project1,
        openModal2: Project2,
        openModal3: Project3,
        openModal4: Project4,
        openModal5: Project5,
        openModal6: Project6,
        openModal7: Project7,
        openModal8: Project8,
        openModal9: Project9
    };

    function Component(props) {
      const CurrComponent = components[props.index];
      return <CurrComponent/>;
    }

    return (
      <ScrollableAnchor id="portfolio">
        <section className="content-section">
          <div className="container">
            <div className="content-section-heading text-center">
              <h2 className="mb-5">design projects</h2>
            </div>
            <div className="row h-25">
                {portfolioItems1.map((project, index) => (
                  <div className="col-md-4 h-25" key={`portfolio_item_${index}`}>
                    <a className="portfolio-item" onClick={() => this.onOpenModal(project.index)}>
                      <span className="caption">
                        <span className="caption-content">
                          <h2 className="mb-0">{project.heading}</h2>
                          <div className='space'></div>
                          <p className="mb-0">{project.description}</p>
                        </span>
                      </span>
                      <div className="img-fluid">
                        <img src={project.imgSrc}/>
                      </div>
                    </a>
                    <Modal open={eval(project.index)} onClose={() => this.onCloseModal(project.index)} center styles={modalstyles}>
                      {Component(project)}
                    </Modal>
                  </div>
                ))}
            </div>

            <div className="row">
                {portfolioItems2.map((project, index) => (
                  <div className="col-md-4 h-25" key={`portfolio_item_${index}`}>
                    <a className="portfolio-item" onClick={() => this.onOpenModal(project.index)}>
                      <span className="caption">
                        <span className="caption-content">
                          <h2 className="mb-0">{project.heading}</h2>
                          <div className='space'></div>
                          <p className="mb-0">{project.description}</p>
                        </span>
                      </span>
                      <div className="img-fluid">
                        <img src={project.imgSrc}/>
                      </div>
                    </a>
                    <Modal open={eval(project.index)} onClose={() => this.onCloseModal(project.index)} center styles={modalstyles}>
                      {Component(project)}
                    </Modal>
                  </div>
                ))}
            </div>

            <div className="row">
                {portfolioItems3.map((project, index) => (
                  <div className="col-md-4 h-25" key={`portfolio_item_${index}`}>
                    <a className="portfolio-item" onClick={() => this.onOpenModal(project.index)}>
                      <span className="caption">
                        <span className="caption-content">
                          <h2 className="mb-0">{project.heading}</h2>
                          <div className='space'></div>
                          <p className="mb-0">{project.description}</p>
                        </span>
                      </span>
                      <div className="img-fluid">
                        <img src={project.imgSrc}/>
                      </div>
                    </a>
                    <Modal open={eval(project.index)} onClose={() => this.onCloseModal(project.index)} center styles={modalstyles}>
                      {Component(project)}
                    </Modal>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

//export default PortfolioSection;
