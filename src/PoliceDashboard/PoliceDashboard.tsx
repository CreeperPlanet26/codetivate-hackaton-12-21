import { auth } from "../firebase";
import { Map } from "../modules/map/Map";
import { useHistory } from "react-router-dom";

const PoliceDashboard = () => {
  const history = useHistory();

  return (
    <div className="police-dashboard-component">
      <Map />
      <button
        onClick={() =>
          auth.signOut().then(() => {
            history.push("/");
          })
        }
      >
        SignOut
      </button>
    </div>
  );
};

export default PoliceDashboard;
