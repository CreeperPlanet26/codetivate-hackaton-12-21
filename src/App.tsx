import LoginScreen from "./Auth/LoginScreen";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory,
} from "react-router-dom";
import PoliceDashboard from "./PoliceDashboard/PoliceDashboard";
import { HomePage } from "./modules/home/HomePage";
import RegisterScreen from "./Auth/RegisterScreen";
import React from "react";
import { auth } from "./firebase";
import Civilian from "./Forms/Civilian/Civilian";
import AlarmPage from "./modules/alarm/AlarmPage";

function App() {
  const [user, setUser] = React.useState<boolean>(false);
  const history = useHistory();

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUser(true);
        history.push("/");
      } else {
        setUser(false);
        history.push("/");
      }
    });

    return unsubscribe;
  }, [history]);

  return (
    <div>
      {user === false ? (
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/register">
              <RegisterScreen />
            </Route>
            <Route exact path="/login">
              <LoginScreen />
            </Route>
            <Route exact path="/help_portal">
              <Civilian />
            </Route>
            <Route exact path="/alarm">
              <AlarmPage />
            </Route>
          </Switch>
        </Router>
      ) : (
        <Router>
          <Switch>
            <Route exact path="/">
              <PoliceDashboard />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
