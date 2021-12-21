import React from "react";
import { auth } from "../firebase";
import "./LoginScreen.css";
import { useHistory } from "react-router-dom";

function LoginScreen() {
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(() => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="Login">
      <div className="loginGlassContainer">
        <h2>ASSIST</h2>
        <input
          className="loginInput"
          type="email"
          placeholder="Email"
          ref={emailRef}
        />
        <input
          className="loginInput"
          type="password"
          placeholder="Password"
          onKeyDown={(e) => {
            if (e.key === "Enter") signIn(e)
          }}
          ref={passwordRef}
        />
        <button className="loginButton" onClick={signIn}>
          <p>Login</p>
        </button>
        <p className="loginQuestion">
          Don't have an account?{" "}
          <span
            className="loginRedirect"
            onClick={() => history.push("/register")}
          >
            Sign Up!
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginScreen;
