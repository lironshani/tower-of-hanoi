import React from "react";
import DisksChoose from "../../components/DisksChoose/DisksChoose";
import "../HomePage/Home.css";
import { useState } from "react";
import Game from "../../components/Game/Game";
import Main from "../../components/Main/Main";

const Home = () => {
  const [componentToShow, setComponentToShow] = useState("main");
  const [disks, setDisks] = useState(3);

  return (
    <div className="home">
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
