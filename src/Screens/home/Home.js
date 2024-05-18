import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../library/Library";
import Player from "../player/Player";
import Feed from "../feed/Feed";
import Favorites from "../favourite/Favorites";
import Trending from "../trending/Trending";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./home.css";
import Login from "../auth/Login";
import { setClientToken } from "../../spotify";
function Home() {
  // set user token
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token)
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route index="/" element={<Library />} />
          <Route path="/player" element={<Player />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
