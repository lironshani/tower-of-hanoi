import React from "react";
import "../hanoi/Tower.css";

const Tower = ({ onClickRod }) => {
  return (
    <div className="tower">
      <div className="area1" onClick={() => onClickRod(1)}>
        <div className="rod1"></div>
      </div>
      <div className="area2" onClick={() => onClickRod(2)}>
        <div className="rod2"></div>
      </div>

      <div className="area3" onClick={() => onClickRod(3)}>
        <div className="rod3"></div>
      </div>
    </div>
  );
};

export default Tower;
