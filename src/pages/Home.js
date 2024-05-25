import React, {useState, useEffect, useRef} from "react";
import FadeIn from 'react-fade-in';
import Typewriter from 'typewriter-effect/dist/core';
import { FaHtml5, FaCss3Alt, FaPython, FaPhp, FaGitAlt, FaGithub, FaReact, FaNodeJs, FaUnity, FaLinux   } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus, SiJquery, SiCsharp, SiDotnet, SiApache, SiJira, SiGooglebigquery, SiGooglecloudstorage, SiGooglepubsub, SiUnrealengine, SiVisualstudio, SiVisualstudiocode, } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { Link } from 'react-router-dom';
import "./Home.css";

const linkClassName = "nav__linkP";

function ButtonLink({ to, children }) {
  return <Link to={to}><button className={linkClassName}>{children}</button></Link>;
}

var app = document.getElementById('typed');

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .start()
  .typeString('Hi! I am Priyanshu. ')
  .pauseFor(100)
  .typeString('This effect is so cool!')
  .pauseFor(100)
  .deleteChars(23)
  .typeString('You\'ve probably seen it a lot')
  .pauseFor(100)
  .deleteChars(29)
  .typeString('But it\'s still cool!')
  .pauseFor(100)
  .deleteChars(20)
  .typeString('Check out the tabs!')
  .pauseFor(100)
  .deleteChars(10)
  .typeString(' my projects!')
  .pauseFor(100)
  .start();

const Home = () => {
  return (
      <div>
        <h1 id="typed"> </h1><br /><br />
        <FadeIn>
          <h2>Skills</h2><br /><br />
          <div className="logos-contain">
            <div className="logos">
              <LogosSlide0 name='logos-slide1'/>
              <LogosSlide0 name='logos-slide2'/>
            </div><br />
            <div className="logos">
              <LogosSlide1 name='logos-slide1r'/>
              <LogosSlide1 name='logos-slide2r'/>
            </div><br />
          </div>
        </FadeIn>
        <div style={{backgroundColor: 'var(--body-color)', position: 'absolute', left: '0px', right: '0px',}}>
          <div style={{textAlign: 'center', fontSize: 'var(--h2-font-size)', marginTop: '50px'}}>Welcome to my portfolio! Check out the different sections and head over to "Contact Me" to get your hands on my resume!</div>
          <div style={{display: 'flex', gap: '10px', width: '100%', justifyContent: 'center'}}>
            <FadeIn>
                <Table></Table>
            </FadeIn>
          </div>
        </div>
      </div>
  );
};

const Table = () =>{
  const initialSnake = ['5x5', '5x4', '5x3', '5x2', '5x1'];
  const initialHead = { x: 5, y: 5 };
  const gridSize = 13;

  const [head, setHead] = useState(initialHead);
  const [snake, setSnake] = useState(initialSnake);
  const [direction, setDirection] = useState({ x: 0, y: 1 });
  const [apple, setApple] = useState(generateApplePosition());
  const intervalRef = useRef(null);

  function generateApplePosition() {
    let newX, newY, possibleApple;

    do {
      newX = Math.floor(Math.random() * gridSize);
      newY = Math.floor(Math.random() * gridSize);
      possibleApple = `${newX}x${newY}`;
    } while (snake.includes(possibleApple));

    return { x: newX, y: newY };
  }

  const resetGame = () => {
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const element = document.getElementById(`${row}x${col}`);
        if (element) {
          element.style.backgroundColor = 'rgba(0,0,0,0)';
        }
      }
    }
    setHead(initialHead);
    setSnake(initialSnake);
    setDirection({ x: 0, y: 1 });
    const newApplePosition = generateApplePosition();
    setApple(newApplePosition);

    const newAppleElement = document.getElementById(`${newApplePosition.x}x${newApplePosition.y}`);
    if (newAppleElement) {
      newAppleElement.style.backgroundColor = 'rgba(255,0,0,1)';
    }
  };

  useEffect(() => {
    // Initialize the snake and apple positions
    snake.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.style.backgroundColor = 'white';
      }
    });
    const appleElement = document.getElementById(`${apple.x}x${apple.y}`);
    if (appleElement) {
      appleElement.style.backgroundColor = 'rgba(255,0,0,1)';
    }
  }, []);

  useEffect(() => {
    const appleElement = document.getElementById(`${apple.x}x${apple.y}`);
    if (appleElement) {
      appleElement.style.backgroundColor = 'rgba(255,0,0,1)';
    }
  }, [apple]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSnake(prevSnake => {
        const newHead = {
          x: (head.x + direction.x + gridSize) % gridSize,
          y: (head.y + direction.y + gridSize) % gridSize,
        };
        const newHeadId = `${newHead.x}x${newHead.y}`;

        // Check for collision with the snake itself
        if (prevSnake.includes(newHeadId)) {
          resetGame();
          return prevSnake;
        }

        // Check if the new head position is the apple
        if (newHead.x === apple.x && newHead.y === apple.y) {

          const newHeadElement = document.getElementById(newHeadId);
          if (newHeadElement) {
            newHeadElement.style.backgroundColor = 'white';
          }

          const newSnake = [newHeadId, ...prevSnake];

          const newApplePosition = generateApplePosition();
          setApple(newApplePosition);

          setHead(newHead);
          return newSnake;
        }

        // Move snake by popping the tail and adding the new head
        const newSnake = [newHeadId, ...prevSnake.slice(0, -1)];
        const tail = prevSnake[prevSnake.length - 1];
        const removedBack = document.getElementById(tail);
        if (removedBack) {
          removedBack.style.backgroundColor = 'rgba(0,0,0,0)';
        }

        const newHeadElement = document.getElementById(newHeadId);
        if (newHeadElement) {
          newHeadElement.style.backgroundColor = 'white';
        }

        setHead(newHead);
        return newSnake;
      });
    }, 100); // Adjust interval as necessary for game speed

    return () => clearInterval(intervalRef.current);
  }, [head, direction]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowDown':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
        case 'ArrowLeft':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowRight':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  return (
    <table style={{border: 'solid 1px white'}}>
      <thead>
          <tr>
              <th id="0x0"></th>
              <th id="0x1"></th>
              <th id="0x2"></th>
              <th id="0x3"></th>
              <th id="0x4"></th>
              <th id="0x5"></th>
              <th id="0x6"></th>
              <th id="0x7"></th>
              <th id="0x8"></th>
              <th id="0x9"></th>
              <th id="0x10"></th>
              <th id="0x11"></th>
              <th id="0x12"></th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <th id="1x0"></th>
              <td id="1x1"></td>
              <td id="1x2"></td>
              <td id="1x3"></td>
              <td id="1x4"></td>
              <td id="1x5"></td>
              <td id="1x6"></td>
              <td id="1x7"></td>
              <td id="1x8"></td>
              <td id="1x9"></td>
              <td id="1x10"></td>
              <td id="1x11"></td>
              <td id="1x12"></td>
          </tr>
          <tr>
              <th id="2x0"></th>
              <td id="2x1"></td>
              <td id="2x2"></td>
              <td id="2x3"></td>
              <td id="2x4"></td>
              <td id="2x5"></td>
              <td id="2x6"></td>
              <td id="2x7"></td>
              <td id="2x8"></td>
              <td id="2x9"></td>
              <td id="2x10"></td>
              <td id="2x11"></td>
              <td id="2x12"></td>
          </tr>
          <tr>
              <th id="3x0"></th>
              <td id="3x1"></td>
              <td id="3x2"></td>
              <td id="3x3"></td>
              <td id="3x4"></td>
              <td id="3x5"></td>
              <td id="3x6"></td>
              <td id="3x7"></td>
              <td id="3x8"></td>
              <td id="3x9"></td>
              <td id="3x10"></td>
              <td id="3x11"></td>
              <td id="3x12"></td>
          </tr>
          <tr>
              <th id="4x0"></th>
              <td id="4x1"></td>
              <td id="4x2"></td>
              <td id="4x3"></td>
              <td id="4x4"></td>
              <td id="4x5"></td>
              <td id="4x6"></td>
              <td id="4x7"></td>
              <td id="4x8"></td>
              <td id="4x9"></td>
              <td id="4x10"></td>
              <td id="4x11"></td>
              <td id="4x12"></td>
          </tr>
          <tr>
              <th id="5x0"></th>
              <td id="5x1"></td>
              <td id="5x2"></td>
              <td id="5x3"></td>
              <td id="5x4"></td>
              <td id="5x5"></td>
              <td id="5x6"></td>
              <td id="5x7"></td>
              <td id="5x8"></td>
              <td id="5x9"></td>
              <td id="5x10"></td>
              <td id="5x11"></td>
              <td id="5x12"></td>
          </tr>
          <tr>
              <th id="6x0"></th>
              <td id="6x1"></td>
              <td id="6x2"></td>
              <td id="6x3"></td>
              <td id="6x4"></td>
              <td id="6x5"></td>
              <td id="6x6"></td>
              <td id="6x7"></td>
              <td id="6x8"></td>
              <td id="6x9"></td>
              <td id="6x10"></td>
              <td id="6x11"></td>
              <td id="6x12"></td>
          </tr>
          <tr>
              <th id="7x0"></th>
              <td id="7x1"></td>
              <td id="7x2"></td>
              <td id="7x3"></td>
              <td id="7x4"></td>
              <td id="7x5"></td>
              <td id="7x6"></td>
              <td id="7x7"></td>
              <td id="7x8"></td>
              <td id="7x9"></td>
              <td id="7x10"></td>
              <td id="7x11"></td>
              <td id="7x12"></td>
          </tr>
          <tr>
              <th id="8x0"></th>
              <td id="8x1"></td>
              <td id="8x2"></td>
              <td id="8x3"></td>
              <td id="8x4"></td>
              <td id="8x5"></td>
              <td id="8x6"></td>
              <td id="8x7"></td>
              <td id="8x8"></td>
              <td id="8x9"></td>
              <td id="8x10"></td>
              <td id="8x11"></td>
              <td id="8x12"></td>
          </tr>
          <tr>
              <th id="9x0"></th>
              <td id="9x1"></td>
              <td id="9x2"></td>
              <td id="9x3"></td>
              <td id="9x4"></td>
              <td id="9x5"></td>
              <td id="9x6"></td>
              <td id="9x7"></td>
              <td id="9x8"></td>
              <td id="9x9"></td>
              <td id="9x10"></td>
              <td id="9x11"></td>
              <td id="9x12"></td>
          </tr>
          <tr>
              <th id="10x0"></th>
              <td id="10x1"></td>
              <td id="10x2"></td>
              <td id="10x3"></td>
              <td id="10x4"></td>
              <td id="10x5"></td>
              <td id="10x6"></td>
              <td id="10x7"></td>
              <td id="10x8"></td>
              <td id="10x9"></td>
              <td id="10x10"></td>
              <td id="10x11"></td>
              <td id="10x12"></td>
          </tr>
          <tr>
              <th id="11x0"></th>
              <td id="11x1"></td>
              <td id="11x2"></td>
              <td id="11x3"></td>
              <td id="11x4"></td>
              <td id="11x5"></td>
              <td id="11x6"></td>
              <td id="11x7"></td>
              <td id="11x8"></td>
              <td id="11x9"></td>
              <td id="11x10"></td>
              <td id="11x11"></td>
              <td id="11x12"></td>
          </tr>
          <tr>
              <th id="12x0"></th>
              <td id="12x1"></td>
              <td id="12x2"></td>
              <td id="12x3"></td>
              <td id="12x4"></td>
              <td id="12x5"></td>
              <td id="12x6"></td>
              <td id="12x7"></td>
              <td id="12x8"></td>
              <td id="12x9"></td>
              <td id="12x10"></td>
              <td id="12x11"></td>
              <td id="12x12"></td>
          </tr>
      </tbody>
  </table>
  );
};

const Pages = () => {
  return (
    <div style={{display: 'flex', paddingTop: '100px'}}>
      <FadeIn delay={100}>
        <h2>Pages</h2>
        <ButtonLink to="/Game">Game</ButtonLink>
        <ButtonLink to="/Web">Web</ButtonLink>
        <ButtonLink to="/Product">Product</ButtonLink>
        <ButtonLink to="/Contact">Contact</ButtonLink>
      </FadeIn>
    </div>
  );
};



const LogosSlide0 = ( props ) => {
  return (
    <div className={props.name}>
        <div><FaHtml5 className="ions" title="HTML5"/><br />HTML5</div>
        <div><FaCss3Alt className="ions" title="CSS3"/><br />CSS3</div>
        <div><IoLogoJavascript className="ions" title="JavaScript"/><br />JavaScript</div>
        <div><SiCsharp className="ions" title="C#"/><br />C#</div>
        <div><SiCplusplus className="ions" title="C++"/><br />C++</div>
        <div><FaPython className="ions" title="Python"/><br />Python</div>
        <div><TbSql className="ions" title="SQL"/><br />SQL</div>
        <div><FaPhp className="ions" title="PHP"/><br />PHP</div>
        <div><FaGitAlt className="ions" title="Git"/><br />Git</div>
        <div><FaGithub className="ions" title="Github"/><br />Github</div>
        <div><SiJquery className="ions" title="jQuery"/><br />jQuery</div>
        <div><FaReact className="ions" title="React"/><br />React</div>
        <div><FaNodeJs className="ions" title="NodeJS"/><br />NodeJS</div>
    </div>
  );
};

const LogosSlide1 = ( props ) => {
  return (
    <div className={props.name}>
      <div><SiDotnet className="ions" title=".NET"/><br />.NET</div>
      <div><SiApache className="ions" title="Apache"/><br />Apache</div>
      <div><SiJira className="ions" title="Jira"/><br />Jira</div>
      <div><SiGooglebigquery className="ions" title="Google Big Query"/><br />Google Big Query</div>
      <div><SiGooglecloudstorage className="ions" title="Google Cloud Storage"/><br />Google Cloud Storage</div>
      <div><SiGooglepubsub className="ions" title="Google PubSub"/><br />Google PubSub</div>
      <div><FaUnity className="ions" title="Unity"/><br />Unity</div>
      <div><SiUnrealengine className="ions" title="Unreal"/><br />Unreal</div>
      <div><FaLinux className="ions" title="Linux"/><br />Linux</div>
      <div><SiVisualstudio className="ions" title="Visual Studio"/><br />Visual Studio</div>
      <div><SiVisualstudiocode className="ions" title="Visual Studio Code"/><br />Visual Studio Code</div>
    </div>
  );
};

export default Home;
