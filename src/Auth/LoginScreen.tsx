import React from "react";
import auth from "../firebase";

function LoginScreen() {
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  // const signIn = (e) => {
  //   e.preventDefault();
  //   auth
  //     .signInWithEmailAndPassword(
  //       emailRef.current.value,
  //       passwordRef.current.value
  //     )
  //     .catch((e) => alert(e.message));
  // };

  return (
    <div>
      <h1>Login Screen</h1>
      <input ref={emailRef} type="email" placeholder="Email" />
      <input ref={passwordRef} type="password" placeholder="password" />
      <button>Login</button>
    </div>
  );
}

export default LoginScreen;

// <input ref={emailRef} type="text" placeholder="Police Department" />
