import React from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import Employee from "./Desk/Employee.mp4";
import Manager from "./Desk/Manager.mp4";
import Supervisor from "./Desk/Supervisor.mp4";
import { menuItemStyles, divStyle, root, back} from "./CSS";
import "./Web.css";
import FadeIn from 'react-fade-in';

const Web = () => {
  return (
    <FadeIn>
      <div style={{display: 'flex', gap: '20px', justifyContent: 'space-between'}}>
        <div style={{textAlign: 'center', width: '90%'}}>
          <This></This><br />
          <hr /><br />
          <Old></Old><br />
          <hr /><br />
          <Desk></Desk><br />
          <hr /><br />
          <Calculator></Calculator><br />
          <hr /><br />
          <Calculus></Calculus><br />
        </div>
        <Side></Side>
      </div>
    </FadeIn>
  );
};

const Desk = () => {
  return (
    <div id="Desk">
      <h1><a href="https://csclub.uwaterloo.ca/~pghosh/DeskAssignment/index.php" className="link" target="_blank" rel="noopener noreferrer">The Desk Company<span> &gt; </span></a></h1><br /><br />
      <p>
        I wanted to create a E-Commerce webpage for a fake company that makes desks. The goal was to store orders, pricing, and employee credentials in a SQL database. Users (Including you) can access and make order on the home page.
        Then, using numbers stored in the database, employees can access their respective UI. 3 access levels are present, employee, supervisor, and manager. When people make orders using the home page, they use fixed pricing, pricing in the database, which can be changed by only the manager.
        Employees can make sales calls and offer discounts, this they have a different order submission form, in which they can adjust the pricing. Employees can also view but not edit all orders. Supervisors have everything the Employees have but also have the ability to edit and delete orders.
        Managers once again have everything Supervisors have but also can adjust fixed pricing (as mentioned above) and change the login keys for different access levels.
        Here is the link to take a look at the site yourself, but you can only make more orders. Below is a video of all the other access levels, currently the employees password is available to you. Contact Me if you would like a live demo of the other sections.<br />
        (I have not yet taken a security course and so the password system is very simple).
      </p><br /><br />
      <div style={{display: 'flex', height: 'auto', flexWrap: 'wrap',}}>
        <div>
          <p>This is what the Employees View is (The current password is 8)</p>
          <video width="731" height="408" controls>
            <source src={Employee} type="video/mp4" />
            Your browser does not support the video tag.
          </video><br /><br />
        </div>
        <div>
          <p>This is what the Supervisors View is</p>
          <video width="731" height="408" controls>
            <source src={Manager} type="video/mp4" />
            Your browser does not support the video tag.
          </video><br /><br />
        </div>
        <div>
          <p>This is what the Managers View is</p>
          <video width="731" height="408" controls>
            <source src={Supervisor} type="video/mp4" />
            Your browser does not support the video tag.
          </video><br /><br />
        </div>
      </div>
    </div>
  );
}

const Calculator = () => {
  return (
    <div id="Calculator">
      <h1><a href="https://csclub.uwaterloo.ca/~pghosh/convert.html" className="link" target="_blank" rel="noopener noreferrer">Cheat Sheet<span> &gt; </span></a></h1><br /><br />
      <p>
      This was one of my first projects, it is built with basic HTML, and CSS, but it uses complex JavaScript to do quite a few cool things. <b>Click the button above to check it out!</b> <br />I loved working on this and learning the basics, I still remember this project as one of my first.<br />
      I built this to make easy calculations faster, I hated that converters online had so many ads and required you to press a button to get your answer, I wanted something faster, so I thought to just make it.<br />
      This site is an amalgamation of weird calculations that are useful for specific things, all of which are live updated (on update).<br />
      <b>A class of over 100 people consistently used it, and the teacher under whom I made it, still uses it and gives it to her new students</b><br />
      One of the coolest things it can do is provide the simplest color arrangement for a given resistance on any resistor, a really useful tool that wasn't available at the time of making this!
      </p>
    </div>
  );
}

const Calculus = () => {
  return (
    <div id="Calculus">
      <h1><a href="https://csclub.uwaterloo.ca/~pghosh/csg.html" className="link" target="_blank" rel="noopener noreferrer">Calculus Study Guide<span> &gt; </span></a></h1><br /><br />
      <p>
        High school calculus was an interesting course, I learned so much, so to prepare for the final I built this. Yes, <b>to study for a course I built a website summarizing it</b>, just to reteach myself everything.<br />
        A very fun way to learn and I created some really cool problems to challenge myself and my peers (<b>about 20-30 people actively used this site to study</b>), if you remember calculus I highly suggest you try the questions out.<br />
        I think this project is great representation of how I learn, by challenging myself to really hard problems and putting this in interesting environments.
      </p>
    </div>
  );
}

const Old = () => {
  return (
    <div id="Old">
      <h1><a href="https://csclub.uwaterloo.ca/~pghosh/" className="link" target="_blank" rel="noopener noreferrer">Old Portfolio<span> &gt; </span></a></h1><br /><br />
      As you can see above, the reason I made this portfolio is because my old one was built in basic HTML/CSS/JS with jQuery. This was unmaintainable and quickly became too hard to update efficiently. <br />
      The link above will take you to the old portfolio and you can see the features I implemented in the past and my old format!
    </div>
  );
};

const This = () => {
  return (
    <div id="This">
      <h1>Brand new portfolio entirely in React!</h1><br /><br />
      My old portfolio was built in HTML, and that made it difficult to quickly make changes. I learned of React thru the job hunt, where multiple companies needed it. Thus, I re made my entire portfolio in React to make changes easy<br />
      I truly learned React and all of the different ways you can make an efficient and easy to update page. This has been an awesome project and I look forward to doing more with React.
    </div>
  );
};

const Side = () => {
  return (
    <div
      style= {divStyle}
    >
      <Sidebar backgroundColor={back} rootStyles={root}>
        <Menu menuItemStyles={menuItemStyles}>
          <MenuItem href="#This"> !This Portfolio </MenuItem>
          <MenuItem href="#Desk"> Desk Company </MenuItem>
          <MenuItem href="#Old"> Old Portfolio </MenuItem>
          <MenuItem href="#Calculator"> Utilities Calculator </MenuItem>
          <MenuItem href="#Calculus"> Calculus Guide </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Web;
