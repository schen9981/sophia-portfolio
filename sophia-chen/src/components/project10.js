import React from "react";
import vscoImg from './images/vsco-logo.jpeg';
import vsco1 from './images/vsco-1.jpeg';
import vsco2 from './images/vsco-2.png';
import vsco3 from './images/vsco-3.png';
import vsco4 from './images/vsco-4.png';
import vsco5 from './images/vsco-5.png';
import vsco6 from './images/vsco-6.png';
import vsco7 from './images/vsco-7.png';
import vsco8 from './images/vsco-8.png';
import vsco9 from './images/vsco-9.png';

const Project10 = () => (
  <div className="portfolio-content">
    <h2>A Critique of VSCO</h2>
    <img src={vscoImg}></img>
    <h3> Background and Motivation </h3>
    <p>
      As an introductory exploration of user interface design, I chose an
      interface that I used relatively often, VSCO, and analyzed the effectiveness
      of the design choices through usability principles. VSCO is a mobile platform
      that combines advanced photo-editing and photo journaling features.
      The app is very minimalist, which provides benefits and drawbacks.
      This research was also posted on Medium,&nbsp;
       <a href="https://medium.com/nyc-design/a-critique-of-the-user-interface-and-experience-of-vsco-204880e00035">here</a>.
    </p>
    <h4> Tools and Concepts Used </h4>
      <ul>
        <li>Learnability</li>
        <li>Memorability</li>
        <li>Efficiency</li>
        <li>Affordances</li>
      </ul>
    <h4> Discovery Phases </h4>
    <p>
      I first went through the application and considered the goals and purposes of each of them.
      Then, based on this I evaluated whether there existed design components that allowed different
      types of users (new users, frequent users, efficient users, etc.) to access them effectively. I
      then also did research into the motivations of the creators themselves, to explain why these design
      choices were made.
    </p>
    <h3> The Critique </h3>
    <img src={vsco1}></img>
    <p>
      The first aspect of the app is the static tab pane at the bottom of every page,
      with the lightly translucent background, indicates to the user that at any time,
      they can switch between the 4 different page. The black highlighting on the current
      page tab and the slightly lighter coloring on the other page tabs is an affordance
      that guides users as to what they can click.
    </p>
    <img src={vsco2}></img>
    <p>
      However, the actual symbols used, as well as the lack of words, provide little
      poor learnability for a new user. Though the globe like symbol can be expected
      to be some sort of discover feature, the two overlapping square is a poor
      indication of where the editing and camera functionalities may lie. On the
      flip side, though, once a familiar user understands what each button represents,
      the simplicity does lend itself to memorability. This missing element of affordance
      in these buttons make it hard for newer users to interact with the platform.
    </p>
    <img src={vsco3}></img>
    <p>
      One of the two main features of the app is the photo editing capabilities.
      On ‘studio’ page, the main content are the pictures that the user has loaded
      in for editing or publishing. On the top left and right, there are two buttons
      that are shaded similarly to the static tab pane, one of which is a camera image,
      and the other is the plus sign. These universal symbols make it very clear to
      any user what they buttons lead to. Yet, one of the main purposes of the studio
      page is for picture editing, which the interface does not provide many affordances
      to show where one would go to edit an image.
    </p>
    <img src={vsco4}></img>
    <p>
      However, even though a major problem of VSCO’s platform is having too simple
      of a platform, the editing page does a good job of incorporating learnability,
      memorability, and affordances. One editing the picture, though the symbols
      still are the main focus, there is small text underneath that indicates what
      each button edits. This maintains focus on minimalist qualities, yet allows
      new users to play around with the editing features.
    </p>
    <img src={vsco5}></img>
    <p>
      The other main feature is photo capturing (ie. flash, grid display,
      white balance, etc.). However, this feature has poor learnability, since
      the symbols are non-universal, minuscule, and have no text explaining what
      each adjustment is. Even when the user clicks a button, the window that pops
      up doesn’t explain any more about the purpose. It becomes very inefficient
      to edit images, since the user has to click through several and randomly adjust
      settings to get a sense of what the image does.
    </p>
    <img src={vsco6}></img>
    <p>
      Overall, VSCO has poor learnability and few affordances, not only due to its
      simple design, but also because elements of the page are not where most users
      expect. The photo editing requires several steps to get to making it very
      inefficient, a user’s list of followers/following is under the ‘discover’ page,
      and notifications are hidden in the corner.
    </p>
    <img src={vsco7}></img>
    <p>
      Though the simplicity greatly hinders the learnability and efficiency of the platform,
      the minimalist design choices seems to attempt to create a digital museum experience.
      The extreme minimalism makes the photographs the main focus, rather than the other features.
      Furthermore, the hidden followers/following and notification pages are made to prevent VSCO
      from becoming a social media platform. As Joey Flory, the founder of VSCO states, "We wanted
      something where when you went to look at a photo, you’d see the photo and you’d see who
      created it and nothing else."
    </p>
    <h3> Proposed Design Changes </h3>
    <p>
      The following are some proposed improvements to the interface.
      The first is to include some way to access a description for the camera adjustment features and app pages (studio, profile, etc.) For instance, having text annotations underneath the symbols, or having a popup text when a user clicks on a button. That way, new users can get an understanding of the new features, but eventually will immediately know which to click on, due to the simplicity of the symbols. This still preserves the minimalist interface and memorability that it lends, yet improves the learnability and adds more affordances.
    </p>
    <img src={vsco8}></img>
    <img src={vsco9}></img>
    <p>
      The second is to add shorter, more expected navigation to commonly access locations,
      such as followers. The location users are used to accessing this information
      would be in the profile page, thus putting it there would allow for a pattern affordance.
      This also provide better efficiency, since users would not need to go through as many pages
      searching for where VSCO uniquely puts this feature.
    </p>
    <h3>What I Learned</h3>
    <p>
      Through this critique, I was able to place myself in the position of a user and a designer,
      and use my knowledge about usability techniques to analyze a well known product. This gave me
      ideas about what I should and shouldn't introduce into future interfaces I make. Furthermore,
      I got a change to talk to the original designer of VSCO through my Medium article, to understand
      firsthand the reasons for the current design implementations!
    </p>

  </div>
);
export default Project10;
