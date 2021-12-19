import React from "react";
import { auth } from "../firebase";

const PoliceDashboard = () => {
  return (
    <div>
      <button onClick={() => auth.signOut()}>SignOut</button>
    </div>
  );
};

export default PoliceDashboard;
