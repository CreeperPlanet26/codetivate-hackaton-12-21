import logo from "../Assist_Logo.png";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const history = useHistory();
  return (
    <div>
      <img src={logo} alt="ASSIST Logo" />
      <p onClick={() => console.log(history.push("/help_portal"))}>
        Help Portal
      </p>
      <p onClick={() => console.log(history.push("/login"))}>Login</p>
    </div>
  );
};

export default HomePage;
