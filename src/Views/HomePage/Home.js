import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import DisksChoose from "../../components/DisksChoose/DisksChoose";
import { useState } from "react";
import Game from "../../components/Game/Game";
import Main from "../../components/Main/Main";
import "../HomePage/Home.css";

const Home = () => {
  const [componentToShow, setComponentToShow] = useState("main");
  const [disks, setDisks] = useState(3);
  const dispatch = useDispatch();

  useEffect(() => {
    const initialState = Array.from({ length: disks }, (_, i) => i + 1);
    dispatch({ type: "INITIAL_GAME", initialArray: initialState });
  }, [componentToShow, disks]);

  return (
    <div>
      {componentToShow === "main" && (
        <Main callback={() => setComponentToShow("disksChoose")}></Main>
      )}
      {componentToShow === "disksChoose" && (
        <DisksChoose
          handleClose={() => setComponentToShow("main")}
          handleStart={() => setComponentToShow("game")}
          disks={disks}
          setDisks={setDisks}
        ></DisksChoose>
      )}
      {componentToShow === "game" && (
        <Game disks={disks} onExit={() => setComponentToShow("main")}></Game>
      )}
    </div>
  );
};

export default Home;
