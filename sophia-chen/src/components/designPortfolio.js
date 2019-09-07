import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Modal from 'react-responsive-modal';
import Project10 from './project10';
import Project11 from './project11';
import Project12 from './project12';


const modalstyles = {
  overlay: {
    'background': "#dee2e65c",
  },
  modal: {
    'background': "white",
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
    index: "openModal10"
  },
  {
    imgSrc: "./img/portfolio-1.jpg",
    heading: "Eyetracking of Mental Happy",
    description:
      "A analysis of an interface design of an emerging startup using eyetracking technology.",
    index: "openModal11"
  },
  {
    imgSrc: "./img/portfolio-1.jpg",
    heading: "A/B and User Testing of Taxi Platform",
    description:
      "A qualitative and quantitative analysis of user's interaction with a redesign of a taxi-reserving platform.",
    index: "openModal12"
  }
];

export default class PortfolioSection extends React.Component {
  state = {
    openModal1: false,
    openModal2: false,
    openModal3: false,
  };

  onOpenModal = (index) => {
    this.setState({[index]: true });
  }

  onCloseModal = (index) => {
    this.setState({[index]: false });
  }

  render() {
    const { openModal10, openModal11, openModal12 } = this.state;

    const components = {
        openModal10: Project10,
        openModal11: Project11,
        openModal12: Project12,
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
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

//export default PortfolioSection;
