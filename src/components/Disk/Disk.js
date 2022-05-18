import React from "react";
import "../Disk/Disk.css";

const Disk = (props) => {
  return (
    <div
      className={"disk " + props.serialClass}
      style={{ width: `${props.serial * 80}px` }}
    ></div>
  );
};

export default Disk;
