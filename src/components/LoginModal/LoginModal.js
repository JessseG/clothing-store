import React from "react";
import "./LoginModal.css";

const LoginModal = (props) => {
  return (
    <div className="loginModal" id="loginModal">
      <h2>Login</h2>
      <div className="loginBox" id="usernameBox">
        Username: <input type="text" className="username" />
      </div>
      <div className="loginBox" id="passwordBox">
        Password: <input type="password" className="password" />
      </div>
    </div>
  );
};

export default LoginModal;
