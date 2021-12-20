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



function App() {
  const [user, setUser] = React.useState<boolean>();
  const history = useHistory();

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUser(true);
        history.push("/dashboard");
      }
    });

    return unsubscribe;
  }, [history]);

  return (
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
      </Switch>
      <Switch>
        <Route exact path="/dashboard">
          <PoliceDashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
