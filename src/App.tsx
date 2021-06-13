import React, { useEffect, useState } from "react";
import "./App.scss";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { Auth } from "./Auth/components/auth";
import { Subscription } from "./Subscription/components";
import { NotFound } from "./not-found";
import { authService } from "./Auth/service";

interface IUserData {
  id: number;
  fullName: string;
}

const ProtectedRoute = ({ children, ...rest }: any) => {
  return sessionStorage.getItem("token") !== null ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Redirect to="/user" />
  );
};

function App() {
  const [userData, setuserData] = useState<IUserData>();
  // const { push } = useHistory();
  // if (sessionStorage.getItem("token") !== null) {
  //   console.log("work");
  //   push("/subscription");
  // }

  useEffect(() => {
    authService.getUser().then(({ data }) => {
      setuserData(data);
    });
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/user" component={Auth} />
        <ProtectedRoute path="/subscription">
          {userData !== undefined && <Subscription user={userData!} />}
        </ProtectedRoute>
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
