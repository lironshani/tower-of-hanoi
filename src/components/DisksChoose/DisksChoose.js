import "./DisksChoose.css";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const DisksChoose = ({
  handleClose,
  handleStart,
  children,
  setDisks,
  disks,
}) => {
  const [disksLocal, setDisksLocal] = useState(disks);
  const handleChange = (event) => {
    setDisks(event.target.value);
    setDisksLocal(event.target.value);
  };
  return (
    <div>
      <div className="modal">
        <section className="modal-main">
          {children}
          <p className="header-choose">Choose the number of disks</p>
          <FormControl className="dropdown">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleChange}
              value={disksLocal}
            >
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </FormControl>
          <div className="cancel" onClick={handleClose}>
            cancel
          </div>
          <div className="start" onClick={() => handleStart(disksLocal)}>
            <FontAwesomeIcon icon={faPlay} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DisksChoose;
