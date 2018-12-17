import React from "react";
import bagelImg from './images/bagelhome.png';
import reactLogo from './images/reactlogo.png';

const Project3 = () => (
  <div className="portfolio-content">
    <h2>A Live Filtering React Page of Bagel Gourmet Bagels</h2>
    <img src={reactLogo}></img>
    <h3> Background and Motivation </h3>
    <p>
      As an exploration into creating React pages, I developed and designed a live filtering
      page for bagels at a local bagel shop, Bagel Gourmet, near my school. The page
      allowed for users to filter by flavor type and topping category, as well sort by
      popularity. This React page
      was deployed through Heroku,&nbsp;
      <a href="https://intense-depths-76934.herokuapp.com/">here</a>.
    </p>
    <h4> Tools and Concepts Used </h4>
    <ul>
      <li>React.js - overall structure</li>
      <li>React Boostrap - page components</li>
      <li>Bootstrap Grids - layout</li>
      <li>Heroku - deployment</li>
      <li>Affordances (design principle)</li>
      <li>Layout (design principle)</li>
    </ul>
    <h4> Discovery Phases </h4>
    <p>
      I first determined which categories and what sorting method I wanted to implement into
      my webpage. Based on this, I knew I needed a welcome message, as well as the component that sorts/filters
      and displays the bagels. State was implemented to save what selections were chose.
    </p>
    <p>
      Once this structure was in place, I went into designing the interface. I knew that a grid layout would have been
      the most optimal, so that users could get the best overview of what the options were. I wanted to make obvious
      the dropdown menu selection was clickable, therefore I rendered it with a dropdown arrow, as an affordance.
    </p>
    <h3> The Interface </h3>
    <p>
      The live webpage can be accessed&nbsp;
      <a href="https://intense-depths-76934.herokuapp.com/">here</a>!. The image below shows the main three
      features of the webpage, where the user can chose flavor type, toppings, and sorting method.
      <img src={bagelImg}></img>
      Feel free to play around!
    </p>
    <h3>What I Learned</h3>
    <p>
      Through this project, I was able to understand how components interacted with eachother,
      and how to break down an app/webpage into their components. This allowed me to use React.js
      for more projects in the future, such as Calmunity (featured in my projects page), as
      well as this personal portfolio.
    </p>
  </div>
);
export default Project3;
