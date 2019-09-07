import React from "react";
import mh1 from './images/mh1.png';
import mh2 from './images/mh2.png';
import mh3 from './images/mh3.png';
import mh4 from './images/mh4.png';
import mh5 from './images/mh5.png';
import mh6 from './images/mh6.png';
import mh7 from './images/mh7.png';

import mh1heat from './images/heatmap1.png';
import mh2heat from './images/heatmap2.png';
import mh3heat from './images/heatmap3.png';
import mh4heat from './images/heatmap4.png';
import mh5heat from './images/heatmap5.png';
import mh6heat from './images/heatmap6.png';
import mh7heat from './images/heatmap7.png';

import mh1replay from './images/replay1.png';
import mh2replay from './images/replay2.png';
import mh3replay from './images/replay3.png';
import mh4replay from './images/replay4.png';
import mh5replay from './images/replay5.png';
import mh6replay from './images/replay6.png';
import mh7replay from './images/replay7.png';

const Project11 = () => (
  <div className="portfolio-content">
    <h2> Eyetracking of Mental Happy Interface Design </h2>
    <h3> Background and Motivation </h3>
    <p>
      Eyetracking is a revolutionary new piece of technology that allows user experience
      researchers to gain insight into which components of the interface users are most drawn
      to. As a group of 2 others, we chose an emerging startup, Mental Happy to carry out a
      user experience research. My group members designed an interface that represented the
      startup's goals, and I carried out an eyetracking analysis on a user carrying out a task.
      This project was to gain experience in using eyetracking technologies and heatmap generation.
    </p>
    <h3> Tools and Concepts Used </h3>
    <ul>
      <li>Eyetracker - data collection of user interaction</li>
      <li>Heatmap Javascript - render heatmap visualizations</li>
    </ul>
    <h3> Phases </h3>
    <h5>Selection of Startup</h5>
    <p>
      Mental Happy is a gifting service for employees that provides a wide variety
      of positive and uplifting things in a personalized “Cheerbox”. The purpose is
      to facilitate the act of gift giving in a way that is time efficient and more
      meaningful than gift baskets, flowers, etc. which can often be impersonal or
      unoriginal.

      As the company describes it, “Mental Happy is an employee gifting service that assembles what it calls a Cheerbox.
      Taking sham expressions of care for laboring office drones to the next level, Mental
      Happy throws out the flowers and ditches the dumb office knickknacks in favor of
      positive messaging and things they reckon employees can actually use, including
      food, wellness gifts, and personalized notes.”
    </p>
    <h3> Hi-Fidelity Prototypes </h3>
    <p>
      My group members designed the following interface designs for the startup:
      <div className="screen">
        <img id="img1" src={mh1}></img>
        <img id="img2" src={mh2}></img>
      </div>
      <div className="screen">
        <img id="img1" src={mh3}></img>
        <img id="img2" src={mh4}></img>
      </div>
      <div className="screen">
        <img id="img1" src={mh5}></img>
        <img id="img2" src={mh6}></img>
      </div>
      <img className="img" src={mh7}></img>
    </p>
    <h3>Eyetracking</h3>
    <h4>The Task</h4>
    <p>
      Once we had our hi-fideility prototype in place, we wanted to see exactly
      how users were interacting with our website. We did this by using an eyetracker,
      and collecting data from one users’s interaction with our website, and see
      how well they accomplished a given task.
    </p>
    <p>
      Our task was for our user to create an account, look through the catalog
      of gift baskets, and then logout. We believe that on the landing page,
      the user will spend the most time looking at the middle portion, due to
      the text and attention drawing images that are used to explain what Mental
      Happy cheerboxes can be used for.
    </p>
    <p>
      In order to create an account, the user will arrive at the home screen,
      click on the “Login” button, get taken to a page where users have an option
      to Login for returning users or Sign up for new users. Then, they will
      click the “Sign Up” button, and input the correct information to sign up.
      They will then get taken to a page that gives them a tutorial of how to user
      the website. Next, they will navigate back to the home page with the “Home”
      button (logo), and then click “Send cheerbox” to access the catalog. Finally,
      they will sign out with the “Sign out” logo button.
    </p>
    <h4>Heat Maps</h4>
    <p>
      Our eye tracking results were visualized in a heatmap and a drawing that
      maps where the user looks overtime. This was done for the 7 screens the
      user looked at, and shown below:
    </p>
    <p>Screen 1: Landing Page</p>
      <div className="screen">
        <img id="heat" src={mh1heat}></img>
        <img id="replay" src={mh1replay}></img>
      </div>
      <div class="clear"></div>
    <p>Screen 2: Login Page</p>
      <div className="screen">
        <img id="heat" src={mh2heat}></img>
        <img id="replay" src={mh2replay}></img>
      </div>
      <div class="clear"></div>
    <p>Screen 3: Sign Up Page</p>
      <div className="screen">
        <img id="heat" src={mh3heat}></img>
        <img id="replay" src={mh3replay}></img>
      </div>
      <div class="clear"></div>
    <p>Screen 4: Tutorial Page</p>
      <div className="screen">
        <img id="heat" src={mh4heat}></img>
        <img id="replay" src={mh4replay}></img>
      </div>
      <div class="clear"></div>
    <p>Screen 5: Landing Page</p>
      <div className="screen">
        <img id="heat" src={mh5heat}></img>
        <img id="replay" src={mh5replay}></img>
      </div>
      <div class="clear"></div>
    <p>Screen 6: Catalog Page</p>
      <div className="screen">
        <img id="heat" src={mh6heat}></img>
        <img id="replay" src={mh6replay}></img>
      </div>
      <div class="clear"></div>
    <p>Screen 7: Landing Page</p>
      <div className="screen">
        <img id="heat" src={mh7heat}></img>
        <img id="replay" src={mh7replay}></img>
      </div>
      <div class="clear"></div>
    <h3>Conclusions</h3>
    <p>
      Based on the eye tracking visualization results, it seems that our initial
      hypothesis regarding the landing page was partially correct. Though the user
      didn’t spend much time looking at the images on the page, most of the time
      was spent looking at the text explaining what exactly Mental Happy was for.
      We can deduce them from where the red spots on the heat map are located -
      exactly where the text is (explaining the goal of the company and the reviews).
      It was also interesting to note that based on the eye tracking animation
      (static images above right) for the landing page, the user first started
      looking at the logo, and then proceeded to read the text from top to bottom,
      before making any move to complete the task.
    </p>
    <h3>What I Learned</h3>
    <p>
      Through this project I gained insight into how to use eyetracking technologies,
      and how to use this data to generate heat maps for analysis of user's interactions
      with interfaces.
    </p>

  </div>
);
export default Project11;
