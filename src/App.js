import "./App.css";
import Login from "./pages/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LoginTeacher from "./pages/LoginTeacher";
import StudentHome from "./pages/StudentHome";
import AskDoubt from "./pages/AskDoubt";
import { useAuthContext } from "./hooks/useAuthContext";
import Doubt from "./components/Doubt";
// import PrivateRoute from "./components/PrivateRoute";
// import PublicRoute from "./components/PublicRoute";

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <Switch>
          <Route exact path="/">
            {!user && <Login />}
            {user && <Redirect to="/stuhome" />}
          </Route>
          <Route exact path="/signup">
            <SignUp />

            {user && <Redirect to="/stuhome" />}
          </Route>
          <Route exact path="/loginTeacher">
            {!user && <LoginTeacher />}
            {user && <Redirect to="/stuhome" />}
          </Route>
          <Route exact path="/stuhome">
            {!user && <Redirect to="/" />}
            {user && <StudentHome />}
          </Route>
          <Route exact path="/ask">
            {!user && <Redirect to="/" />}
            {user && <AskDoubt />}
          </Route>

          <Route exact path="/test">
            {/* {!user && <Redirect to="/" />} */}
            <Doubt />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
