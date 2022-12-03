import "./App.css";
import React, { useState } from "react";

// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Editor from "./components/Editor";
import Profile from "./components/Profile";
import Explore from "./components/Explore";
import About from "./components/About";
import Login from "./components/Login";
// import Error from "./components/Error";
import Footer from "./components/Footer";

function App() {
  const [dark, isdark] = useState(false);
  function dark_enable(e) {
    if (dark === false) {
      isdark(true);
      document.body.style.backgroundColor = "rgba(38, 38, 38, 80%)";
    } else {
      isdark(false);
      document.body.style.backgroundColor = "rgba(27, 95, 152, 15%)";
    }
  }

  return (
    <div>
      <Header mode={dark} dark_enable={dark_enable} />
      <div className="MainArea">
        <Navbar mode={dark} />
        <div className="RoutedArea">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="editor" element={<Editor />}></Route>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="explore" element={<Explore />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="login" element={<Login />}></Route>
            </Routes>
          </BrowserRouter>
          <Footer />
          
        </div>
      </div>
    </div>
  );
}

export default App;
