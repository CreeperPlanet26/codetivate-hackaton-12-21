import React from "react";
import { auth, db } from "../firebase";
import "./RegisterScreen.css";

const RegisterScreen = () => {
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const policeDeptRef = React.useRef(null);
  const officerName = React.useRef(null);
  const officerID = React.useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(() =>
        auth.currentUser
          .updateProfile({
            displayName: officerName.current.value,
          })
          .then(() =>
            db.collection("officers").doc(auth.currentUser.uid).set({
              name: officerName.current.value,
              id: officerID.current.value,
              department: policeDeptRef.current.value,
            })
          )
          .catch((error) => console.log(error))
      )
      .catch((e) => alert(e.message));
  };

  return (
    <div className="Register">
      <div className="registerGlassContainer">
        <h2>ASSIST</h2>
        <input
          className="registerInput"
          type="email"
          placeholder="Email"
          ref={emailRef}
        />
        <input
          className="registerInput"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <input
          className="registerInput"
          ref={policeDeptRef}
          type="text"
          placeholder="Police Department"
        />
        <input
          className="registerInput"
          ref={officerName}
          type="text"
          placeholder="Officer Name"
        />
        <input
          className="registerInput"
          ref={officerID}
          type="text"
          placeholder="Officer ID Number"
        />
        <button className="registerButton" onClick={register}>
          <p>Register</p>
        </button>
        <p className="registerQuestion">
          Already have an account?{" "}
          <span className="registerRedirect">Login!</span>
        </p>
      </div>
    </div>
  );
};

export default RegisterScreen;
