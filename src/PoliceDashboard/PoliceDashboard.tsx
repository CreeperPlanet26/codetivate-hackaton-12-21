import { auth, db } from "../firebase";
import { Map } from "../modules/map/Map";
import { useHistory } from "react-router-dom";

const PoliceDashboard = () => {
  const history = useHistory();

  return (
    <div className="police-dashboard-component">
      <button
        onClick={() =>
          auth.signOut().then(() => {
            history.push("/");
          })
        }
        className="sign-out-button"
      >
        Sign Out
      </button>
      <Map />
    </div>
  );
};

export default PoliceDashboard;
