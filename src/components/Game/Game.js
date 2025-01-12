import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Tower from "../hanoi/Tower";
import Disk from "../Disk/Disk";
import "../Game/Game.css";

const noop = () => {};

const Game = ({ disks, onExit = noop }) => {
  const [isWinModalOpen, setWinModalOpen] = useState(false);
  const selectedDisk = useSelector((state) => state.selectedDisk);
  const rod1arr = useSelector((state) => state.rod1);
  const rod2arr = useSelector((state) => state.rod2);
  const rod3arr = useSelector((state) => state.rod3);
  const steps = useSelector((state) => state.steps);
  const optimalSteps = Math.pow(2, disks) - 1;

  const dispatch = useDispatch();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "40%",
      height: "30%",
      borderRadius: "15px",
      border: "none",
      backgroundColor: "rgba(255, 255, 255, 0.397)",
      backdropFilter: "blur(10px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "fantasy",
      fontWeight: "bold",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.349)",
    },
  };

  useEffect(() => {
    if (rod3arr.length === disks) setWinModalOpen(true);
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
      <Modal
        isOpen={isWinModalOpen}
        style={customStyles}
        appElement={document.getElementById("app")}
      >
        <h2>You won in {steps} steps!</h2>
        <p className="ok-btn" onClick={onExit}>
          OK
        </p>
      </Modal>
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
