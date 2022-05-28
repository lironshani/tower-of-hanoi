import React from "react";
import "../hanoi/Tower.css";
import { useCallback } from "react";

const Tower = ({ onClickRod, array1, array2, array3 }) => {
  const handleClickRod = useCallback(
    (rod) => (event) => {
      onClickRod(rod);
    },
    []
  );
  return (
    <div className="tower">
      <div className="area1" onClick={handleClickRod(1)}>
        <div className="rod1"></div>
        <div className="disks1">{array1}</div>
      </div>
      <div className="area2" onClick={handleClickRod(2)}>
        <div className="rod2"></div>
        <div className="disks2">{array2}</div>
      </div>
      <div className="area3" onClick={handleClickRod(3)}>
        <div className="rod3"></div>
        <div className="disks3">{array3}</div>
      </div>
    </div>
  );
};

export default Tower;
