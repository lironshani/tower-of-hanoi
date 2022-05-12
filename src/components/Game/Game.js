import React from "react";
import "../Game/Game.css";
import Tower from "../hanoi/Tower";
import Disk from "../Disk/Disk";
import { createStore } from 'redux';

const Game = ({ disks }) => {
  
  const gameState = {
    rod1:[1,2,3,4],
    rod2:[],
    rod3:[],
    selectedDisk
  }
  const store = createStore()
  console.log(disks);
  const array = [];
  for (var i = 0; i < disks; i++) {
    array.push(
      <Disk key={i} serial={i + 1} serialClass={"disk-" + (i + 1)}></Disk>
    );
  }
  return (
    <div className="game">
      <div className="disks">{array}</div>
      <Tower></Tower>
    </div>
  );
};

export default Game;
