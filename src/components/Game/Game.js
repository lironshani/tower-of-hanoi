import React, { useState, useEffect } from "react";
import "../Game/Game.css";
import Tower from "../hanoi/Tower";
import Disk from "../Disk/Disk";
import { useSelector, useDispatch } from "react-redux";

const Game = ({ disks, onExit }) => {
  const initialState = [];
  for (let i = 1; i <= disks; i++) initialState.push(i);

  const store = useSelector((state) => state);
  const rod1arr = useSelector((state) => state.rod1);
  const rod2arr = useSelector((state) => state.rod2);
  const rod3arr = useSelector((state) => state.rod3);
  const steps = useSelector((state) => state.steps);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "INITIAL_GAME", initialArray: initialState });
  }, []);

  const array1 = [];
  for (var i = 0; i < rod1arr.length; i++) {
    array1.push(
      <Disk
        key={i}
        serial={rod1arr[i]}
        serialClass={"disk-" + rod1arr[i]}
        selectedDisk={store.selectedDisk}
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
        selectedDisk={store.selectedDisk}
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
        selectedDisk={store.selectedDisk}
      ></Disk>
    );
  }
  const handleRodClick = (index) => {
    dispatch({
      type: "CLICK_ROD",
      rod: index,
    });
  };

  return (
    <div className="game">
      <div className="exit" onClick={() => onExit()}>
        exit
      </div>
      <div className="steps">{steps} steps</div>
      <div className="disks1">{array1}</div>
      <div className="disks2">{array2}</div>
      <div className="disks3">{array3}</div>

      <Tower onClickRod={handleRodClick}></Tower>
    </div>
  );
};

export default Game;
