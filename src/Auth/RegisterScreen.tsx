import React from "react";
import auth from "../firebase";

const RegisterScreen = () => {
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const policeDeptRef = React.useRef(null);
  const officerName = React.useRef(null);
  const officerID = React.useRef(null);

  const register = () => {
    auth?.createUserWithEmailAndPassword(
      emailRef?.current.value,
      passwordRef?.current.value
    );
  };

  return (
    <div>
      <h1>Register Screen</h1>
      <input ref={emailRef} type="email" placeholder="Email" />
      <input ref={passwordRef} type="password" placeholder="Password" />
      <input ref={policeDeptRef} type="text" placeholder="Police Department" />
      <input ref={officerName} type="text" placeholder="Officer Name" />
      <input ref={officerID} type="text" placeholder="Officer ID Number" />
      <button>Register</button>
    </div>
  );
};

export default RegisterScreen;
