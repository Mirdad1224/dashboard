import React from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ onUserClick }) => {
  return ReactDOM.createPortal(
    <div
      className="w-full h-screen overflow-hidden cursor-pointer fixed top-0 left-0 bg-[rgba(0,0,0,.6)] z-10"
      onClick={() => onUserClick()}
    ></div>
  ,document.getElementById("backdrop"));
};



export default Backdrop;
