import React from "react";
import UML from './Sorcery/uml-final-1.png';
import GameDemo from './Sorcery/Game-Demo.mp4';
import GameMatch from './Game/Game-Combat-Demo.mp4';
import GameDino from './Dino/Game-Demo.mp4';
import GameScene from './Dino/Scene-Demo.mp4';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { menuItemStyles, divStyle, root, back} from "./CSS";
import { LuConstruction } from "react-icons/lu";
import FadeIn from 'react-fade-in';

const Game = () => {
  return (
    <FadeIn>
      <div style={{display: 'flex', gap: '20px', justifyContent: 'space-between'}}>
        <div style={{textAlign: 'center', width: '100%'}}>
          <Sorcery></Sorcery><br />
          <hr /><br />
          <Match></Match><br />
          <hr /><br />
          <Dino></Dino><br />
        </div>
        <Side></Side>
      </div>
    </FadeIn>
  );
};

const Sorcery = () => {
  return (
    <div id="Sorcery">
      <h1>Sorcery (The recreation of hearthstone)</h1>
      <p>Quick Summary</p>
      <p>(C++)(XWindow)
      This project is a monolithic C++ game. Based entirely on object oriented programming. The game involves two players, who own decks. They draw from decks into their hands, then play cards to the board. Cards can do a 
      variety of things, primarily, Minions attack and can kill the other player. The basis of the code structure is to ensure a robust and future proof structure, such that adding new features and cards are easy. This project was done is a group of three, where I spearheaded the 
      entire Card system (respectively, my teammates did UI and GUI). Below is the UML and a video showcasing the game (including start up).</p><br />
      <img src={UML} width="860" height="480" alt="UML Diagram" /><br />
      You can play the game thru text only or via the graphical interface, this recording, showcases both.<br /><br />
      <video width="860" height="480" controls>
        <source src={GameDemo} />
      </video>
    </div>
  );
}

const Match = () => {
  return (
    <div id="Match">
      <h1>The Match 3 Game</h1>
      <p><span>What was this project?</span><br /><br />
        This project was a personal project that I started on my own. A long time hobby of mine is playing games so I
        thought it was about time I make one of my own. Since this is a personal project I did not document the making
        of the game. However, after finishing the first version of the game and loving the product I decided to add it
        to this portfolio.
      </p><br /><br /><br />
      <video width="860" height="480" controls>
        <source src={GameMatch} />
      </video><br /><br />
      <p><span>So whats happening?</span><br /><br />
        The video above shows the combat section of the game. It starts on the players turn. The player selected two
        orbs to swap. Any connection of 3 or more is broken and 2 points are added to the respective element per orb
        broken. After the points are added the orbs attacks, if they hit shields then the shields take damage, else the
        enemy player will take damage.
        <br />
        <br />
        After the player turn the computer gets a turn. This is an algorithm that looks at the board and finds possible
        swaps that allow for good attacks. The computer does the same action as the player and the game proceeds.
      </p>
      <p>
        <span>What did I learn?</span><br /><br />
      <ul>
        <li>Unity Ui</li>
        <li>Using Unity and Unity objects</li>
        <li>Unity Scripts</li>
        <li>C#</li>
        <li>Computer Algorithms</li>
        <li>Game Development</li>
        <li>FPS Optimization</li>
      </ul>
      </p>
    </div>
  );
}

const Dino = () => {
  return (
    <div id="Dino">
      <h1>Dino Game</h1>
      <p>Quick Summary</p>
      <p>As you can guess, this game is a recreation of google's dino game. Although this is a lot simpler, the goal was the get the same feel during times where the wifi still works. One of the cool things I learned in this project is the idea of
        deleting objects or reusing them. Instances of scenes, backgrounds, enemies, and obstacles were all moved rather than destroyed and made again when needed. This created a cool effect for the scene view and offered performance boosts in the game.<br  />I also 
        used animations in Unity for the first time which showed me the weird mechanics of animation.<br  />(Also the dino get faster the higher your score)<br  />
      </p>
      <div>
        <div>
          <p>This is a Game example</p>
          <video width="860" height="480" controls>
            <source src={GameDino} />
          </video><br  /><br  />
        </div>
        <div>
          <p>This is the Scene View, collisions were turned off for this</p>
          <video width="860" height="480" controls>
            <source src={GameScene} />
          </video><br  /><br  />
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
          <MenuItem href="#Sorcery"> Sorcery (C++) </MenuItem>
          <SubMenu label="Unity" defaultOpen='true'>
            <MenuItem href="#Match"> Match 3 Game </MenuItem>
            <MenuItem href="#Dino"> Dino Game </MenuItem>
            <MenuItem> Idle Game <LuConstruction /></MenuItem>
            <MenuItem> Peglin RPG <LuConstruction /></MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Game;
