import React from "react";
import "../Game/Game.css";
import Tower from "../hanoi/Tower";
import Disk from "../Disk/Disk";
import { createStore } from "redux";
import { gameReducer } from "./reducer";

const Game = ({ disks, onExit }) => {
  const initialState = [];
  for (let i = 1; i <= disks; i++) initialState.push(i);
  const gameState = {
    rod1: initialState,
    rod2: [],
    rod3: [],
    selectedDisk: undefined,
  };
  const store = createStore(gameReducer, gameState);
  const rod1arr = store.getState().rod1;
  const rod2arr = store.getState().rod2;
  const rod3arr = store.getState().rod3;

  const array1 = [];
  for (var i = 0; i < rod1arr.length; i++) {
    array1.push(
      <Disk
        key={i}
        serial={rod1arr[i]}
        serialClass={"disk-" + rod1arr[i]}
      ></Disk>
    );
  }
  const array2 = [];
  for (var i = 0; i < rod2arr.length; i++) {
    array2.push(
      <Disk
        key={i}
        serial={rod2arr[i]}
        serialClass={"disk-" + rod2arr[i]}
      ></Disk>
    );
  }
  const array3 = [];
  for (var i = 0; i < rod3arr.length; i++) {
    array3.push(
      <Disk
        key={i}
        serial={rod3arr[i]}
        serialClass={"disk-" + rod3arr[i]}
      ></Disk>
    );
  }

  return (
    <div className="game">
      <div className="exit" onClick={() => onExit()}>
        exit
      </div>
      <div className="disks1">{array1}</div>
      <div className="disks2">{array2}</div>
      <div className="disks3">{array3}</div>

      <Tower></Tower>
    </div>
  );
};

export default Game;
