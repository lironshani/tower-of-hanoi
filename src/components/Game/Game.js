import React, { useState, useEffect } from "react";
import "../Game/Game.css";
import Tower from "../hanoi/Tower";
import Disk from "../Disk/Disk";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

const noop = () => {};

const Game = ({ disks, onExit = noop }) => {
  const [showModalWin, setShowModalWin] = useState(false);
  const selectedDisk = useSelector((state) => state.selectedDisk);
  const rod1arr = useSelector((state) => state.rod1);
  const rod2arr = useSelector((state) => state.rod2);
  const rod3arr = useSelector((state) => state.rod3);
  const steps = useSelector((state) => state.steps);
  const initialState = Array.from({ length: disks }, (_, i) => i + 1);
  const optimalSteps = Math.pow(2, disks) - 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "INITIAL_GAME", initialArray: initialState });
  }, []);

  useEffect(() => {
    if (rod3arr.length === disks) setShowModalWin(true);
  });

  const array1 = [];
  for (var i = 0; i < rod1arr.length; i++) {
    array1.push(
      <Disk
        key={i}
        serial={rod1arr[i]}
        serialClass={"disk disk-" + rod1arr[i]}
        selectedDisk={selectedDisk}
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
        selectedDisk={selectedDisk}
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
        selectedDisk={selectedDisk}
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
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </div>
      <div className="steps">
        steps: {steps} / {optimalSteps}
      </div>
      <Tower
        onClickRod={handleRodClick}
        array1={array1}
        array2={array2}
        array3={array3}
      ></Tower>
    </div>
  );
};

export default Game;
