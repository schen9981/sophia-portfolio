import React from 'react';
import './Work.css'
import profilePic from "../../assets/cropped.png";
import NavBar from '../../components/NavBar/NavBar';
import ProjectModal from '../../components/ProjectModal/ProjectModal';

type WorkProps = {};

type WorkState = {
  modalShowInd: number;
  projects: any
};

export default class Work extends React.Component<WorkProps, WorkState> {
  constructor(props: WorkProps) {
    super(props);
    this.state = {
      modalShowInd: -1,
      projects: [
        {
          projectName: "genfit",
          projectLibs: "java, javascript, jquery, html/css, sqlite",
          projectDescription:
            [ "Genfit is a virtual closet webapplications targeted to " +
              "improve users’ closet visibility, provide insight and " +
              "inspiration into potential outfit combinations, and generate " +
              "personalized outfit suggestions based on user preferences.",
              "This project was done in collaboration with 3 other members. " +
              "I worked specifically on the frontend interface, as well as " +
              "the frontend-backend integration for different supported " +
              "features, such as adding/deleting closet items, favoriting " +
              "other users’s outfits, constructing outfits, and displaying " +
              "generated outfits. This involved querying our database and " +
              "setting up routes for appropriate connections. ",
              "https://github.com/schen9981/genfit"
            ]
        },
        {
          projectName: "hack@brown",
          projectLibs: "react, typescript",
          projectDescription:
            [ "Hack@Brown is Brown University’s annual hackathon. " +
              "A large part of the logistics and facilitation of the " +
              "hackathon is consolidated into the website, in order to " +
              "advertise to potential sponsors, encourage registration, and " +
              "facilitate application and registration information. ",
              "I worked alongside 6 other members of Hack@Brown’s development " +
              "team to develop, from scratch, the 2020 iteration of the " +
              "hackathon’s website. We worked closely with the design team " +
              "to implement mockups, as well as many other teams in the " +
              "organizing team to gauge user feedback regarding the " +
              "application. I worked specifically on the implementing the " +
              "registration and confirmation experience, from  the frontend " +
              "interface to integrating frontend input data to backend " +
              "database, allowing for applications to save, edit,and submit " +
              "registration information.",
              "https://2020.hackatbrown.org"
            ]
        },
        {
          projectName: "automated selfie camera",
          projectLibs: "python",
          projectDescription:
            [
              "This application is a live camera app that will capture an " +
              "image when it detects the subject smiling, with two core " +
              "components: (1) the smile detection model and (2) the live camera feed.",
              "I worked with two others to develop this Computer Vision " +
              "driven application. I worked on data processing and designed " +
              "and trained the foundational smile detection model, which " +
              "took in frames taken from the camera feed, detect faces, and " +
              "classify them as either smiling or not. This iterative " +
              "process entailed processing our training data, and extracting " +
              "various features from images and feeding them into variations " +
              "of machine learning techniques in order to achieve highest " +
              "accuracy on both our data and live camera input. ",
              "https://github.com/schen9981/auto-selfie-camera"
            ]
        },
        {
          projectName: "avocado data investigation",
          projectLibs: "python",
          projectDescription:
            [
              "This data investigation sought to explore the trends in " +
              "avocado consumption in the US, in connection with millenials, " +
              "a group classified as those born between 1980 and 1994. " +
              "Specifically, we were looking at whether cities in the United " +
              "States with a higher population of millenials, especially " +
              "those with a high population of millenials with above-average " +
              "income, consume more avocados despite prices increases in recent years.",
              "I worked with three others to carry out this investigation, " +
              "which involved finding datasets, cleaning and reorganizing " +
              "the data for analysis purposes, and carrying out multiple " +
              "statistical tests to determine trends and underlying oddities " +
              "in the relationship we were investigating. I worked " +
              "specifically on data cleaning and processing using " +
              "SQLite and Python, as well as analyzing the results of " +
              "our statistical tests.",
              "https://github.com/schen9981/ds-final-project"
            ]
        },
        {
          projectName: "maps",
          projectLibs: "java, javascript,  canvas, sqlite",
          projectDescription:
            [
              "Maps is an interactive map GUI modeled " +
              "after Google Maps, centered around streets in the " +
              "Providence and neighboring region pulled from a live map database. ",
              "This application featured user pan/zoom, shortest route " +
              "detection, and live traffic data updates, with efficient " +
              "frontend rendering using caching and tiling. Implementation " +
              "entailed a base A-star algorithm, database querying to " +
              "efficiently pull information within specific tiles, and " +
              "mathematical calculations to determine best tiling mechanisms " +
              "for zoom/pan.  Displays were drawn using Canvas, in order to " +
              "mimic the Google Maps experience. ",
              ""
            ]
        },
        {
          projectName: "search",
          projectLibs: "java",
          projectDescription:
            [
              "This application was an interactive search engine that " +
              "takes user text queries and returns most relevant documents " +
              "using the PageRank algorithm, based on a set of document corpus.",
              "",
              ""
            ]
        },
        {
          projectName: "accelerating analysis with parallel computing",
          projectLibs: "R",
          projectDescription:
            [
              "This investigation sought to determine optimal parallelization " +
              "and data processing schemes to run statistical analysis on " +
              "large CMIP climate data.",
              "We looked into parallelizing Extreme Value Analysis on CMIP " +
              "climate data, using multiple R parallelization packages. " +
              "We sought to characterize the impacts of cluster types, " +
              "communication protocols, loop parallelizations, and data " +
              "reading approaches to determine the best framework for " +
              "carrying out any type of statistical analysis on large " +
              "datasets in parallel. ",
              "https://opensky.ucar.edu/islandora/object/technotes%253A549/datastream/PDF/view"
            ]
        },
        {
          projectName: "foliar injury analysis",
          projectLibs: "R",
          projectDescription:
            [
              "This investigation looked into statistical correlations " +
              "between ozone concentration and visible foliar injury to " +
              "determine capabilities of visible plant data , in order to " +
              "estimate current and future ozone concentrations based on " +
              "visible observations.",
              "The statistical research entailed looking into two datasets. " +
              "The first was based on plants in ozone bioindicator gardens, " +
              "which have been specifically created for the purpose of " +
              "observing ozone damage. The second was the cumulative " +
              "W126 index,  a metric used to summarize hourly ozone " +
              "concentrations and gives higher, more damaging ozone " +
              "concentrations more weight. Then, using multiple techniques " +
              "of data modeling, investigated which model best explained inter-annual variability. ",
              "https://opensky.ucar.edu/islandora/object/technotes%253A557/datastream/PDF/view"
            ]
        }
      ]
    };

  }

  setModalShow(newInd) {
    // 1 => project 1, -1 => hide all modals
    this.setState({
      modalShowInd: newInd
    });
  }

  render() {
    return (
      <div className="Work">
        <NavBar activePage={"work"}/>

        <div className="project-welcome">
          <h4> checkout some personal projects i've been working on! </h4>
        </div>

        <div className="portfolio-content">

          <div className="project-display light-pink" id="project1-bubble" onClick={() => this.setModalShow(1)}>
            <h2> {this.state.projects[0].projectName} </h2>
            <p> {this.state.projects[0].projectLibs} </p>
          </div>

          <ProjectModal
            show={this.state.modalShowInd == 1}
            onHide={() => this.setModalShow(-1)}
            projectName={this.state.projects[0].projectName}
            projectLibs={this.state.projects[0].projectLibs}
            projectDescription={this.state.projects[0].projectDescription}
          />


          <div className="project-display light-green" id="project2-bubble" onClick={() => this.setModalShow(2)}>
            <h2> {this.state.projects[1].projectName} </h2>
            <p> {this.state.projects[1].projectLibs} </p>
          </div>

          <ProjectModal
            show={this.state.modalShowInd == 2}
            onHide={() => this.setModalShow(-1)}
            projectName={this.state.projects[1].projectName}
            projectLibs={this.state.projects[1].projectLibs}
            projectDescription={this.state.projects[1].projectDescription}
          />

          <div className="project-display red" id="project3-bubble" onClick={() => this.setModalShow(3)}>
            <h2> {this.state.projects[2].projectName} </h2>
            <p> {this.state.projects[2].projectLibs} </p>
          </div>

          <ProjectModal
            show={this.state.modalShowInd == 3}
            onHide={() => this.setModalShow(-1)}
            projectName={this.state.projects[2].projectName}
            projectLibs={this.state.projects[2].projectLibs}
            projectDescription={this.state.projects[2].projectDescription}
          />

          <div className="project-display light-pink" id="project4-bubble" onClick={() => this.setModalShow(4)}>
            <h2> {this.state.projects[3].projectName} </h2>
            <p> {this.state.projects[3].projectLibs} </p>
          </div>

          <ProjectModal
            show={this.state.modalShowInd == 4}
            onHide={() => this.setModalShow(-1)}
            projectName={this.state.projects[3].projectName}
            projectLibs={this.state.projects[3].projectLibs}
            projectDescription={this.state.projects[3].projectDescription}
          />

          <div className="project-display green" id="project5-bubble" onClick={() => this.setModalShow(5)}>
            <h2> {this.state.projects[4].projectName} </h2>
            <p> {this.state.projects[4].projectLibs} </p>
          </div>

          <ProjectModal
            show={this.state.modalShowInd == 5}
            onHide={() => this.setModalShow(-1)}
            projectName={this.state.projects[4].projectName}
            projectLibs={this.state.projects[4].projectLibs}
            projectDescription={this.state.projects[4].projectDescription}
          />

          <div className="project-display light-green" id="project6-bubble" onClick={() => this.setModalShow(6)}>
            <h2> {this.state.projects[5].projectName} </h2>
            <p> {this.state.projects[5].projectLibs} </p>
          </div>

          <ProjectModal
            show={this.state.modalShowInd == 6}
            onHide={() => this.setModalShow(-1)}
            projectName={this.state.projects[5].projectName}
            projectLibs={this.state.projects[5].projectLibs}
            projectDescription={this.state.projects[5].projectDescription}
          />

          <div className="project-display light-pink" id="project7-bubble" onClick={() => this.setModalShow(7)}>
            <h2> {this.state.projects[6].projectName} </h2>
            <p> {this.state.projects[6].projectLibs} </p>
          </div>

          <ProjectModal
            show={this.state.modalShowInd == 7}
            onHide={() => this.setModalShow(-1)}
            projectName={this.state.projects[6].projectName}
            projectLibs={this.state.projects[6].projectLibs}
            projectDescription={this.state.projects[6].projectDescription}
          />

          <div className="project-display red" id="project8-bubble" onClick={() => this.setModalShow(8)}>
            <h2> {this.state.projects[7].projectName} </h2>
            <p> {this.state.projects[7].projectLibs} </p>
          </div>

          <ProjectModal
            show={this.state.modalShowInd == 8}
            onHide={() => this.setModalShow(-1)}
            projectName={this.state.projects[7].projectName}
            projectLibs={this.state.projects[7].projectLibs}
            projectDescription={this.state.projects[7].projectDescription}
          />
        </div>
      </div>
    );
  }

}
