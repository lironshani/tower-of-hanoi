import React from "react";
import "../Disk/Disk.css";

const Disk = (props) => {
  let className = "disk " + props.serialClass;
  if (props.selectedDisk === props.serial) className += " selected";
  return (
    <div
      className={className}
      style={{ width: `${props.serial * 80}px` }}
    ></div>
  );
};

export default Disk;
