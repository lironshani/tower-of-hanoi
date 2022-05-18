import React from "react";
import "../Disk/Disk.css";

const Disk = (props) => {
  console.log(props);
  return (
    <div
      className={"disk " + props.serialClass}
      style={{ width: `${props.serial * 20}%` }}
    ></div>
  );
};

export default Disk;
