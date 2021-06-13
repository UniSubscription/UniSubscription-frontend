import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
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
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
