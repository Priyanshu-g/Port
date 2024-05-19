import React from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { menuItemStyles, divStyle, root, back} from "./CSS";
import Poster from "./Glue/Poster.png";
import CAD_1 from "./Glue/CAD_1.png";
import CAD_2 from "./Glue/CAD_2.png";
import floor_1 from "./Arch/Floor1.jpeg";
import CAD from "./Arch/CAD.png";
import Model from "./Arch/Model.png";
import Render from "./Arch/Render.png";
import d1 from "./Weather/d1.png";
import d2 from "./Weather/d2.png";
import d3 from "./Weather/d3.png";
import d4 from "./Weather/d4.png";
import d5 from "./Weather/d5.png";
import d6 from "./Weather/d6.png";
import Sche from "./Weather/ESP-Sche.png";
import Pict from "./Weather/ESP-Pict.png";
import Mod from "./Weather/ESP-Model.png";
import FadeIn from 'react-fade-in';;

const Product = () => {
  return (
    <FadeIn>
      <div style={{display: 'flex', gap: '20px', justifyContent: 'space-between'}}>
        <div style={{textAlign: 'center', width: '100%', justifyContent: 'right'}}>
          <Glue></Glue><br />
          <hr /><br />
          <Arch></Arch><br />
          <hr /><br />
          <Weather></Weather><br />
        </div>
        <Side></Side>
      </div>
    </FadeIn>
  );
};

const Glue = () => {
  return (
    <div id="Glue">
      <h1>The Glue Gun Holder</h1>
        The project was to make a glue gun holder for the loose glue guns in class. <b>This project is very old, this entire section is very old and can be disregarded.</b> We would partner up and construct a
        glue gun.<br />The most important part of the project was using the design process.<br /><br />
      <div style={{display: 'flex', gap: '20px'}}>

        <div>
          <img src={Poster} alt="Design History" width='500'/>
        </div>

        <div>
          <p>
            On the left is the projects poster, it includes pictures of the final product and the process to get
            there
            <br /><br />
            Skills
          </p>
          <br />
          <ul>
            <li>Use of the design process</li>
            <li>Equal work distribution</li>
            <li>Construction skills</li>
            <li>Use of inventor and CAD software</li>
            <li>Displaying the design process</li>
          </ul>
          <br />
          CAD
          <br />
          <img src={CAD_1} alt="CAD 1" width='500'/><br /><br />
          <img src={CAD_2} alt="CAD 2" width='500'/><br /><br />
          <p>
            So what did I take away from the project?<br />
            <ul>
              <li>How to use joints to allow movement in CAD</li>
              <li>How to distribute works to individual strengths</li>
              <li>How to use the design process</li>
              <li>Why the design process is effective</li>
              <li>How to effectively display work processes</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

const Arch = () => {
  return (
    <div id="Arch">
      <h1>Architecture</h1>
      <p><span>What was the project?</span><br />
        The project was to partner up, pick a target audience, find a location and design a house. Includes making floor
        plans, CAD models and a real world (scaled) model.<br />
        Here are some pictures of the floor plans, CAD models and the real world model:</p>

      <div>

        <div style={{display: 'flex', flexWrap: 'wrap',}}>
          <section>
            <p>Paper Floor Plan</p><br />
            <img src={floor_1} alt="floor plan 1" width='500'/>
          </section><br /><br />

          <section>
            <p>CAD Floor Plan</p><br />
            <img src={CAD} alt="floor plan 2" width='500'/>
          </section><br /><br />

          <section>
            <p>CAD Model Renders</p><br />
            <img src={Render} alt="Render" width='500'/>
          </section><br /><br />

          <section>
            <p>Real World Model</p><br />
            <img src={Model} alt="Model" width='500'/>
          </section><br /><br />
        </div>

        <div>
          <p>
            <span>Skills</span><br />
            Skills shown in the project:
          <ul>
            <li>Teamwork</li>
            <li>Precision in plans and blueprints</li>
            <li>Making Floor Plans</li>
            <li>Using CAD software to make homes</li>
            <li>Constructing and making models</li>
            <li>Effective usage of time</li>
          </ul><br /><br />
          <span>So what did I take away from the project?</span><br />
          <ul>
            <li>Introduced to Revit</li>
            <li>Building an accurate model</li>
            <li>The in and outs of designing a house</li>
            <li>The Eco Leed System</li>
          </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

const Weather = () => {
  return (
    <div id="Weather">
      <h1>The ESP8266 Weather Station</h1>
      <p><span>What was this project?</span><br />
        This project was an independent study unit for computer engineering. Try to build anything with anything in your
        budget. I chose to make a weather station with an ESP8266. The ESP8266 is a wifi module that works with
        Arduino.
        <br /><span>The Story</span><br />
        The story of the ESP8266 Weather Station begins with a distance sensor. Initially, the distance sensor was to
        detect the height of the water and keep track of the water level in an area over some time. Although this seemed
        doable when the sensor was taken home, sound travelling through water at a different speed wasn't realized until
        it was too late, and due to covid, the sensor couldn't be swapped out. Resulting in the first project change, to
        make a temperature sensor that you can place outside and check the weather outdoors from a device indoors.
      </p><br /><br />
      <div>
        <div style={{display: 'flex'}} >
          <div style={{flex: '1'}}>
            <table>
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Activity</th>
                  <th scope="col">Time Spent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Nov, 20th</th>
                  <td>Research</td>
                  <td>2 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Nov 25th</th>
                  <td>Creating Proposal</td>
                  <td>3 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Dec, 10th</th>
                  <td>Opening and install raspberry pi</td>
                  <td>3 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Dec, 12th</th>
                  <td>Still troubleshooting raspberry pi</td>
                  <td>4 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Dec, 14th</th>
                  <td>Attempting to get information from distance sensor on raspberry pi</td>
                  <td>3 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Dec, 15th</th>
                  <td>Looking into methods of displaying the sensor data on a separate device</td>
                  <td>5 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Dec, 16th</th>
                  <td>Using Apache to create web server and display data</td>
                  <td>1 Hour</td>
                </tr>
                <tr>
                  <th scope="row">Dec, 17th</th>
                  <td>Opening and flashing ESP8266 with code to read sensor data</td>
                  <td>5 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Dec, 18th</th>
                  <td>Attempting to use MQTT to connect esp8266 to Raspberry pi </td>
                  <td>3 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Dec, 19th</th>
                  <td>Attempting to use MQTT to connect esp8266 to Raspberry pi </td>
                  <td>3 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Dec, 20th</th>
                  <td>Attempting to use MQTT to connect esp8266 to Raspberry pi</td>
                  <td>3 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Jan, 5th</th>
                  <td>Trying to display both raspberry pi data and esp8266 data on the same web server</td>
                  <td>4 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Jan, 6th</th>
                  <td>Trying to display both raspberry pi data and esp8266 data on the same web server</td>
                  <td>4 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Jan, 7th</th>
                  <td>Trying to display both raspberry pi data and esp8266 data on the same web server</td>
                  <td>4 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Jan, 9th</th>
                  <td>Attempting to establish web server on esp8266 as an alternative</td>
                  <td>3 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Jan, 11th</th>
                  <td>Creating code to display and store a week's worth of sensor data on esp</td>
                  <td>3 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Jan, 12th</th>
                  <td>Creating code to display and store a week's worth of sensor data on esp</td>
                  <td>3 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Jan, 18th</th>
                  <td>Serving up the entire week's data on web server</td>
                  <td>4 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Jan, 19th</th>
                  <td>Serving up the entire week's data on web server</td>
                  <td>4 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Jan, 20th</th>
                  <td>Using Google charts api to display the sensor data in a chart</td>
                  <td>2 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Jan, 21th</th>
                  <td>Using Google charts api to display the sensor data in a chart<br />
                    <img width='500'alt="" src={d1} />
                  </td>
                  <td>3 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Jan, 22th</th>
                  <td>Using Google charts api to display the sensor data in a chart<br />
                    <img width='500'alt="" src={d2} /></td>
                  <td>3 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Jan, 23th</th>
                  <td>Clean up and site design</td>
                  <td>5 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Jan, 25th</th>
                  <td>Clean up and site design<br /><img width='500'alt="" src={d3} /></td>
                  <td>4 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Jan, 26th</th>
                  <td>Clean up and site design<br /><img width='500'alt="" src={d4} /></td>
                  <td>1 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Jan, 27th</th>
                  <td>Clean up and site design<br /><img width='500'alt="" src={d5} /></td>
                  <td>2 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Jan, 28th</th>
                  <td>Clean up and site design</td>
                  <td>3 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Jan, 30th</th>
                  <td>Clean up and site design<br /><img width='500'alt="" src={d6} /></td>
                  <td>2 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Feb, 1st</th>
                  <td>Final Testing!!</td>
                  <td>5 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Feb, 2nd</th>
                  <td>Final repairs and fixes</td>
                  <td>3 Hour(s)</td>
                </tr>
                <tr>
                  <th scope="row">Feb, 3rd</th>
                  <td>Report</td>
                  <td>5 Hour(s)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{flex: '1'}}>
            <p><br /><br />
              After the project change there was a lot of issue yet to come. (skip to Dec
              15th)<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              The first was hosting the website that should be reachable by all devices in the same network. This went
              on for a really long time (skip to Jan
              9th)<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              The solution was simple. Rather then having the raspberry pi collect the data, transfer is to the esp, and
              then finally show the data off the esp site, I could just connect the esp to the sensor, collect the data
              from there and host the data immediately, skipping need for any raspberry pi! The next and final major
              issue was using google charts to display the stored data well (skip to Jan,
              20th)<br /><br /><br /><br /><br /><br /><br /><br />
              This problem was not too big. It only gave me an issue and took so long because I was new to it. Learning
              new things is always fun, so I was at least motivated to go through with it.
            </p>
            <span>Conclusion</span><br />
            <span>Here is what I learned from this project:</span>
            <ul>
              <li>Raspberry Pi</li>
              <li>MQTT</li>
              <li>ESP8266</li>
              <li>ESP8266 Web Hosting</li>
              <li>Distance Sensors</li>
              <li>Arduino code (C++)</li>
              <li>Google Charts API</li>
              <li>Web Design</li>
              <li>Apache</li>
            </ul><br />
            <span>Schematic</span><br /><br />
            <img width='500'alt="" src={Sche} /><br /><br />
            <span>Pictorial</span><br /><br />
            <img width='500'alt="" src={Pict} /><br /><br />
            <span>Final Model</span><br /><br />
            <img width='500'alt="" src={Mod} /><br /><br />
          </div>
        </div>
      </div>
    </div>
  );
}

const Side = () => {
  return (
    <div
      style= {divStyle}
    >
      <Sidebar backgroundColor={back} rootStyles={root}>
        <Menu menuItemStyles={menuItemStyles}>
          <MenuItem href="#Glue"> Glue Gun Holder </MenuItem>
          <MenuItem href="#Arch"> Architecture </MenuItem>
          <MenuItem href="#Weather"> Weather Station </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Product;
