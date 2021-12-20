import { auth } from "../firebase";
import { Map } from "../modules/map/Map";

const PoliceDashboard = () => {
  return (
    < div className="police-dashboard-component" >
      <Map />
      <button onClick={() => auth.signOut()}>SignOut</button>
    </div >
  );
};

export default PoliceDashboard;
