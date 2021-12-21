import { auth, db } from "../firebase";
import { Map } from "../modules/map/Map";
import { useHistory } from "react-router-dom";

const PoliceDashboard = () => {
  const history = useHistory();

  // Look at my onClick Function
  // The reason it wasn't working before is because the doc "dfsa" doesn't have any info inside of it, only a subcollection.
  // That's why I had to go into the specific subcollection and get the info

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
      <button
        onClick={() =>
          db
            .collection("schools")
            .doc("dsfa")
            .collection("evacuation_update")
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
              });
            })
        }
      >
        Get info
      </button>
    </div>
  );
};

export default PoliceDashboard;
