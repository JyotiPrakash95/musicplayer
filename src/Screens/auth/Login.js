import React from 'react';
import { loginEndPoint } from "../../spotify";
import "./login.css";

function Login() {
  return (
    <div className="loginPage">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White-768x230.png"
        alt="logo-spotify"
        className="logo"
      />
      <a href={loginEndPoint}>
        <div className="login-btn">Login</div>
      </a>
    </div>
  );
}

export default Login