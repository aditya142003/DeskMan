import React, { useState } from "react";
import "./Editor.css";

export default function Editor(props) {
  const [text, setText] = useState("   Enter text here");
  const handleOnChange = (event) => {
    console.log("Onchange");
    setText(event.target.value);
  };
  return (
    <div className="container">
      <div>
        <div>
          <textarea
            rows={10}
            cols={60}
            className="writingArea"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="buttons">
          <div className="title">
            <label className="label">Title: </label>
            <input className="textbar" type={text}></input>
          </div>
          <button>Convert to Uppercase</button>
          <button>Convert to Lowercase</button>
          <button>Remove extra spaces</button>
        </div>
      </div>
      <div>
        <div className="printingArea">
          <pre>{text}</pre>
        </div>
      </div>
    </div>
  );
}
