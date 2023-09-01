import React from "react";
// import CV from "../../assets/lokendraSharmaSD_Resume.pdf";
import CV from "../../assets/Lokendra_Sharma.pdf";
import "./header.css";
const Cvb = () => {
  return (
    <div className="cvb-main-div">
      <a className="btn" href={CV} download>
        Download CV
      </a>
      <a className="btn" href="#contact">
        Have Talk{" "}
      </a>
    </div>
  );
};
export default Cvb;
