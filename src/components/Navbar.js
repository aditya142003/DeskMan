import Lottie from "lottie-react";
import React, { useState } from "react";
import "./Navbar.css";

import homeIcon from "./icons/home.json";
import homeDarkIcon from "./icons/home-dark.json";
import editorIcon from "./icons/editor.json";
import editorDarkIcon from "./icons/editor-dark.json";
import profileIcon from "./icons/profile.json";
import profileDarkIcon from "./icons/profile-dark.json";
import exploreIcon from "./icons/explore.json";
import exploreDarkIcon from "./icons/explore-dark.json";
import loginIcon from "./icons/login.json";
import loginDarkIcon from "./icons/login-dark.json";
import aboutIcon from "./icons/about.json";
import aboutDarkIcon from "./icons/about-dark.json";
export default function Navbar(props) {
  const [homehover, sethomehover] = useState(false);
  function homeMouseEnter(e) {
    sethomehover(true);
  }
  function homeMouseLeave(e) {
    sethomehover(false);
  }

  const [editorhover, seteditorhover] = useState(false);
  function editorMouseEnter(e) {
    seteditorhover(true);
  }
  function editorMouseLeave(e) {
    seteditorhover(false);
  }

  const [profilehover, setprofilehover] = useState(false);
  function profileMouseEnter(e) {
    setprofilehover(true);
  }
  function profileMouseLeave(e) {
    setprofilehover(false);
  }

  const [explorehover, setcommuntiyhover] = useState(false);
  function communtiyMouseEnter(e) {
    setcommuntiyhover(true);
  }
  function communtiyMouseLeave(e) {
    setcommuntiyhover(false);
  }

  const [abouthover, setabouthover] = useState(false);
  function aboutMouseEnter(e) {
    setabouthover(true);
  }
  function aboutMouseLeave(e) {
    setabouthover(false);
  }
  const [loginhover, setloginhover] = useState(false);
  function loginMouseEnter(e) {
    setloginhover(true);
  }
  function loginMouseLeave(e) {
    setloginhover(false);
  }
  return (
    <div className={` bar ${props.mode ? "dark" : ""}`}>
      <ul>
        <li
          className={` tabs ${props.mode ? "darktabs" : ""}`}
          onMouseEnter={homeMouseEnter}
          onMouseLeave={homeMouseLeave}
        >
          <a href="/" className="list">
            <Lottie
              className="icons"
              loop={homehover}
              autoplay={homehover}
              animationData={props.mode ? homeDarkIcon : homeIcon}
              style={{ width: "35px" }}
            />
            <span className={` text ${props.mode ? "darktext" : ""}`}>Home</span>
          </a>
        </li>

        <li
          className={` tabs ${props.mode ? "darktabs" : ""}`}
          onMouseEnter={editorMouseEnter}
          onMouseLeave={editorMouseLeave}
        >
          <a href="/Editor" className="list">
            <Lottie
              className="icons"
              loop={editorhover}
              autoplay={editorhover}
              animationData={props.mode ? editorDarkIcon : editorIcon}
              style={{ width: "35px" }}
            />

            <span className={` text ${props.mode ? "darktext" : ""}`}>Editor</span>
          </a>
        </li>

        <li
          className={` tabs ${props.mode ? "darktabs" : ""}`}
          onMouseEnter={profileMouseEnter}
          onMouseLeave={profileMouseLeave}
        >
          <a href="/profile" className="list">
            <Lottie
              className="icons"
              loop={profilehover}
              autoplay={profilehover}
              animationData={props.mode ? profileDarkIcon : profileIcon}
              style={{ width: "35px" }}
            />
            <span className={` text ${props.mode ? "darktext" : ""}`}>Profile</span>
          </a>
        </li>

        <li
          className={` tabs ${props.mode ? "darktabs" : ""}`}
          onMouseEnter={communtiyMouseEnter}
          onMouseLeave={communtiyMouseLeave}
        >
          <a href="/Explore" className="list">
            <Lottie
              className="icons"
              loop={explorehover}
              autoplay={explorehover}
              animationData={props.mode ? exploreDarkIcon : exploreIcon}
              style={{ width: "35px" }}
            />
            <span className={` text ${props.mode ? "darktext" : ""}`}>Explore</span>
          </a>
        </li>

        <li
          className={` tabs ${props.mode ? "darktabs" : ""}`}
          onMouseEnter={aboutMouseEnter}
          onMouseLeave={aboutMouseLeave}
        >
          <a href="/About" className="list">
            <Lottie
              className="icons"
              loop={abouthover}
              autoplay={abouthover}
              animationData={props.mode ? aboutDarkIcon : aboutIcon}
              style={{ width: "35px" }}
            />
            <span className={` text ${props.mode ? "darktext" : ""}`}>About</span>
          </a>
        </li>

        <li
          className={` tabs ${props.mode ? "darktabs" : ""}`}
          onMouseEnter={loginMouseEnter}
          onMouseLeave={loginMouseLeave}
        >
          <a href="/Login" className="list">
            <Lottie
              className="icons"
              loop={loginhover}
              autoplay={loginhover}
              animationData={props.mode ? loginDarkIcon : loginIcon}
              style={{ width: "35px" }}
            />
            <span className={` text ${props.mode ? "darktext" : ""}`}>Login</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
