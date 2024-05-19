import React from "react";
import FadeIn from 'react-fade-in';
import Typewriter from 'typewriter-effect/dist/core';
import Slider from 'react-infinite-logo-slider'
import { FaHtml5, FaCss3Alt  } from "react-icons/fa";

const Home = () => {
  return (
    <FadeIn>
      <div>
        <h1 id="typed"> </h1><br /><br />
        <h2>My Skills</h2><br /><br />
        <h3>Languages</h3><br /><br />
        <Slide items={myItems} />
      </div>
    </FadeIn>
  );
};

const myItems = [
  { 
    name: 'HTML', 
    ob: <FaHtml5 className="ions" /> 
  }, 
  { 
    name: 'CSS', 
    ob: <FaCss3Alt className="ions" /> 
  },
];

const Slide = ({ items }) => {
  return (
      <Slider
          width="350px"
          duration={40}
          pauseOnHover={true}
          blurBorders={false}
          blurBoderColor={'#fff'}
      >
        {items.map(item => (
          <Slider.Slide 
            style={{ fontSize: '50px', paddingLeft: '50px', paddingRight: '50px'}}
          >
            <div>
              <div>{item.ob}</div>
              <div>{item.name}</div>
            </div>
          </Slider.Slide>
        ))}
      </Slider>
  )
}

var app = document.getElementById('typed');

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .start()
  .typeString('Hi! I am Priyanshu. ')
  .pauseFor(300)
  .typeString('This effect is so cool!')
  .pauseFor(300)
  .deleteChars(23)
  .typeString('You\'ve probably seen it a lot')
  .pauseFor(300)
  .deleteChars(29)
  .typeString('But it\'s still cool!')
  .pauseFor(300)
  .deleteChars(20)
  .typeString('Check out the tabs!')
  .pauseFor(300)
  .deleteChars(10)
  .typeString(' my projects!')
  .pauseFor(300)
  .start();

export default Home;
