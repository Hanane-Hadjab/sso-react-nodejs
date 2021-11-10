import {Route, Switch} from "react-router-dom";
import Login from "../views/Login/Login";
import LoginSuccess from "../views/LoginSuccess/LoginSuccess";
import UserContextProvider from "../contexts/UserContext";
import Dashboard from "../views/Dashboard/Dashboard";
import Auth from "../components/Auth/Auth";

const Routes = () => {
  return (
    <Switch>
      <UserContextProvider>
        <Route path={"/"} exact={true} comp={Login}>
          <Login />
        </Route>
        <Route path={"/login/success"} exact={true} comp={Login}>
          <LoginSuccess />
        </Route>
        <Route path={"/dashboard"} exact={true} comp={Dashboard}>
          <Dashboard />
        </Route>
       <Route path="/login/error">
            Error
       </Route>

      </UserContextProvider>
    </Switch>
  );
};

export default Routes;
