import React, { useState } from "react"
import "../App" 
import "./Header.css";

export default function Header(props){
  
  const [isclick, setisclick] = useState(false);
  function mouseClick(e) {
    if (isclick === true) setisclick(false);
    else setisclick(true);
  }

  return (
    <div className={`header ${props.mode ? "darker" : ""}`}>
      <div className="logo">Text Editor</div>
      <div>
        <span
          className={`material-symbols-outlined ${isclick ? "hide" : ""}`}
          onClick={() => {
            mouseClick();
            props.dark_enable();
          }}
        >
          dark_mode
        </span>
        <span
          className={`material-symbols-outlined ${isclick ? "" : "hide"} `}
          onClick={() => {
            mouseClick();
            props.dark_enable();
          }}
        >
          light_mode
        </span>
      </div>
    </div> 
  );
}