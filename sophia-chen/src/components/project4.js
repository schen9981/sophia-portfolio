import React from "react";
import versA from './images/vers-a.png';
import versB from './images/vers-b.png';

const Project4 = () => (
  <div className="portfolio-content">
    <h2>A/B and User Testing of A Taxi Reservation Platform</h2>
    <h3> Background and Motivation </h3>
    <p>
      To gain insight into the techniques of A/B and user testing for user experience
      research, I developed two simple redesigns of a minimal webpage for reserving taxis, and
      asked users to click around the website. Based on data collected, I was able to determine
      user statistics regarding their actions, and analyze whether certain affordances or lack thereof
      effected user's behaviours. The two versions (generated randomly upon following link) was deployed through Heroku,&nbsp;
      <a href="https://enigmatic-citadel-26646.herokuapp.com/">here</a>.
    </p>
    <h3> Tools Used </h3>
      <ul>
        <li>HTML - visual interface changes</li>
        <li>Heroku - deployment</li>
        <li>Heroku logs - data collection</li>
        <li>R - data parsing and analysis</li>
        <li>Figma - hi-fidelity prototyping</li>
        <li>UserTesting.com - videos of user interactions</li>
        <li>Chi-Squared/T Test (analysis methods)</li>
      </ul>
    <h3> Discovery Phases </h3>
    <h5>Interface Design</h5>
    <p>
      I first created two versions of the taxi reservation website. Version A contained a grid layout,
      with more obvious affordances regarding buttons for reserving taxis.
      <img src={versA}></img>
      Version B contained a vertical layout, with more two dimensional buttons.
      <img src={versB}></img>
    </p>
    <h5>A/B Testing</h5>
    <h6>Hypothesis Construction</h6>
      Then, based on my interface changes, I constructed a null and hypothesis for each of the following 4 metrics:
      <ol type="1">
        <li>
          Click Rate: proportion of sessions that have at least one click
          <ul>
            <li>Null Hypothesis: The click rate on Version A will be equal to the click rate on Version B.</li>
            <li>Alternative Hypothesis: The click rate on Version A will be greater than that of Version B
              since Version A has more obviously clickable buttons and users of Version A can see more of the options.</li>
          </ul>
        </li>
        <li>
          Time to Click: average time it took a session to do the first click
          <ul>
            <li>Null Hypothesis: The average time to click on Version A will be equal
              to the average time to click on Version B.</li>
            <li>Alternative Hypothesis: The average time to click on Version A will
              be less than that of Version B, Version A has more affordances for
              clickable buttons, and since users will have to scroll to read all
              the options in Version B.</li>
          </ul>
        </li>
        <li>
          Dwell Time: ​​average time a session spent on an external page before returning to the landing page
          <ul>
            <li>Null Hypothesis: The dwell time on Version A will be equal to the average time to click on Version B.</li>
            <li>Alternative Hypothesis: The dwell time on Version A will be smaller, since
              the layout lends itself to users clicking through all the options and
              then returning to the landing page quickly to make a decision.</li>
          </ul>
        </li>
        <li>
          Return Rate: ​​proportion of sessions that left the landing page and returned
          <ul>
            <li>Null Hypothesis: The return rate for Version A and B are the same.</li>
            <li>Alternative Hypothesis: The return rate for Version B will be larger,
              since the layout encourages to explore the options in the external
              webpages sequentially, as the user scrolls. On the other hand, users
              for Version A will look at all the options, make a decision, and then
              navigate to the desired external webpage (without returning).</li>
          </ul>
        </li>
      </ol>
    <h6>Data Collection and Calculation</h6>
      <p>
        Data was collected by hosting the two versions of the websites on Heroku.
        The logs collect data on which version of the website was loaded,
        page load time, the time stamp of the click, the id of the clicked element on the page,
        and the session id. Based on this data, I was able to compile the following metrics relating to my hypotheses.
        The were calculated as follows:
      </p>
      <ol type="1">
        <li>
          Click Rate
          <ul>
            <li>Count the number of sessions with at least one click (ie. columns with click ID not equal to 0)</li>
            <li>Count the total number of unique sessions (ie. number of unique session ID) num of sessions with click</li>
            <li>Click rate = # of sessions with click / # sessions total</li>
          </ul>
        </li>
        <li>
          Time to Click
          <ul>
            <li>Find the rows in the data file that corresponded with the first click of the user (ie. for each session ID)</li>
            <li>Subtract the click time from the load time for each row</li>
            <li>Add all these values up and divided by the number of first clicks</li>
            <li>Average time to click = sum of (click time - load time) / # of clicks</li>
          </ul>
        </li>
        <li>
          Dwell Time
          <ul>
            <li>Find the occurrences where a user clicked an element and then returned to the page
              (ie. where first click ID is not 0, and right after, a page load time is recorded)</li>
            <li>Subtract the click time from the page load time (getting the time spent on external page)</li>
            <li>Average dwell time = sum of (2nd page load - previous click time) / # of reloads</li>
          </ul>
        </li>
        <li>
          Return Rate
          <ul>
            <li>Find the number of times the the user clicked an element and then returned
              to the page (ie the number of occurrences found in dwell time)</li>
            <li>Find the total number of clicks</li>
            <li>Return rate = # of returns / # of clicks</li>
          </ul>
        </li>
      </ol>

      <p>The resulting metrics are compiled in the following table:</p>

      <table>
        <tr>
          <th>Metric</th>
          <th>Version A</th>
          <th>Version B</th>
        </tr>
        <tr>
          <td>Click Rate</td>
          <td>0.716</td>
          <td>0.8</td>
        </tr>
        <tr>
          <td>Time to Click</td>
          <td>16187.25 ms</td>
          <td>12810.31 ms</td>
        </tr>
        <tr>
          <td>Dwell Time</td>
          <td>52245.5 ms</td>
          <td>78523 ms</td>
        </tr>
        <tr>
          <td>Return Rate</td>
          <td>0.347</td>
          <td>0.478</td>
        </tr>
      </table>
    <h6>Data Analysis</h6>
    <p>
      The data was then analyzed to determine whether there was a statistical
      difference between the user metrics of Version A and Version B. The following shows the statistical test used
      and the resulting conclusion.
    </p>
      <ol type="1">
        <li>
            <p>Click Rate - Implemented Chi Squared Test, since click rate contains discrete
            results regarding number of clicks/no clicks.</p>

            <p>From the calculation, we get that the Chi-squared value is 0.0911.
            Looking at the table for degrees of freedom = 1,
            we get that the accepted value for it to be that p&lt;0.05 is 3.84.
            Since 0.0911&lt;3.84, then our p value is > 0.05, so our we cannot
            reject the null hypothesis. This suggests that there is no statistical
            difference between the click rate of A and B.</p>
        </li>
        <li>
            <p>Time to Click - Implemented T-Test, since the time to click can take on any value in a range (ie continuous).</p>
            <p>From the calculation, we get that the T value is 0.384. Looking at the table
              for degrees of freedom = 30, we get that the accepted value for it to be that
              p&lt;0.05 is 1.697. Since 0.384&lt;1.697, then our p value is > 0.05, so our
              we cannot reject the null hypothesis. This suggests that there is no
              statistical difference between the time to click in A and B.</p>
        </li>
        <li>
            <p>Dwell Time - Implemented T-Test, since the dwell time can take on any value in a range (ie continuous).</p>
            <p>From the calculation, we get that the T value is 0.2797. Looking at the table
              for degrees of freedom = 16, we get that the accepted value for it to be that
              p&lt;0.05 is 1.746. Since 0.2797&lt;1.746, then our p value is > 0.05, so our we
              cannot reject the null hypothesis. This suggests that there is no statistical
              difference between the dwell time in A and B. </p>
        </li>
        <li>
          <p>Return Rate - Implemented Chi Squared Test, since click rate contains discrete results regarding number of returns/no returns.</p>
          <p>From the calculation, we get that the Chi-squared value is 0.807017.
            Looking at the table for degrees of freedom = 1, we get that the accepted
            value for it to be that p&lt;0.05 is 3.84. Since 0.807017&lt;3.84, then our
            p value is > 0.05, so our we cannot reject the null hypothesis. This suggests
            that there is no statistical difference between the return rate of A and B.</p>
        </li>
      </ol>
      <p>
        Lastly, a 95% confidence interval was calculated for the difference between the average time to click for A
        and the average time to click for Version B, as shown below:
      </p>
      <p>
        Our 95% confidence interval is [-11561.43, 18135.31].
        Because 0 is contained within the interval, we don’t have a statistically
        significant difference between the average time to click for A and B, so we cannot reject the null hypothesis.
      </p>
    <h5>User Testing</h5>
    <h6>Hi-Fidelity Prototype</h6>
    <p>
      A prototype of the taxi website was created in Figma, linked&nbsp;
      <a href="https://www.figma.com/proto/V1q0gruyVXLTt1vYZjLoS9iW/Memphis-Taxi?node-id=3%3A2&scaling=scale-down">here</a>. This
      prototype was sent to UserTesting, to collect data.
    </p>
    <h6>The Task</h6>
    <p>
      Based on the redesign, I wanted users reserve a 6 PAX Crossover from Premiere Taxi
      on 10/31/18 at 9:00 PM, which would take them from Memphis, Tennessee to
      Louisville, Kentucky. The subtasks were to:
    </p>
      <ul>
        <li>Select Premiere Taxi from the homepage.</li>
        <li>Use ‘filter’ options to select the correct car type (Crossover).</li>
        <li>Reserve the appropriate vehicle.</li>
      </ul>
    <h6>The Hypothesis</h6>
    <p>I suspected that users will easily be able to find the correct taxi company,
      but it may take users some time to realize they can filter to efficiently
      find all the vehicles that are crossovers, instead of scrolling through.
    </p>
    <h6>Testing Results</h6>
    <p>
      Based on the video results, I compiled the following data. Completion rate calculates
      the percentage of the 3 users that successfully completed the task,
      error count counts the number of times the 3 users made a mistake
      (clicked the wrong button, interacted incorrectly) on the subtask,
      and time on tasks measures how long the user took to complete the specified task.
    </p>
      <table>
        <tr>
          <th>Subtask</th>
          <th>Completion Rate</th>
          <th>Error Count</th>
          <th>Time on Tasks</th>
        </tr>
        <tr>
          <td>Select Premiere Taxi</td>
          <td>100%</td>
          <td>2</td>
          <td>43.67 s</td>
        </tr>
        <tr>
          <td>Use ‘filter’ option to select crossover</td>
          <td>100%</td>
          <td>3</td>
          <td>26.3 ms</td>
        </tr>
        <tr>
          <td>Reserve vehicle</td>
          <td>100%</td>
          <td>0</td>
          <td>4.3 s</td>
        </tr>
      </table>
    <h6>Conclusions from Results</h6>
    <p>
      Much of the time spent was actually on the homepage. While I thought the
      homepage would be where users spent the least time, it seems that users
      were most confused about the homepage and the fact that they had to select
      “Premiere Taxi”. Furthermore, many of the errors was in filtering, as expected.
      Users would think they could just scroll to find the desired taxi, but in reality,
      I wanted them to user the filter feature to efficiently get the desired vehicle.
      Users generally found it easy to find the vehicle, but many expressed that
      they didn’t want so many steps to just choose the desired vehicle.
    </p>
    <p>
      Based on this, I would instead have all vehicles shown in a grid layout,
      so that users have the option of simply selecting vehicles based on
      browsing through the catalog, while also having the option to filter.
      This way, for those that specifically know what car to pick, they could
      filter, otherwise, users can scroll and browse. Furthermore, I would make
      the filter feature on the side more obvious, so more users would be drawn
      to it and utilize the feature.
    </p>
    <h3>What I Learned</h3>
    <p>
      From this research, AB Testing and User Testing provided me entirely different feedback.
      A/B testing informed me more about how many people interacted with the page (quantitative),
      while User Testing provided more information about how users interacted (qualitative).
      I believe that user testing is more subjective to data being influenced by factors beyond
      the interface itself, such as misunderstanding the UserTesting.com interface, or
      misunderstanding the intention of the task. A/B Testing is more controlled for these
      factors, yet it also runs the risk of recording data that is not reflective of how users
      actually interact. For example, if a user navigates to another page and then forgets that
      the window is open, it will record a larger time to click. Overall, I think conducting both
      and compiling conclusions from both would allow for the best UX research experience.
    </p>
  </div>
);
export default Project4;
