import { Route } from "@mui/icons-material";
import React from "react";
import { Redirect } from "react-router-dom";

const PublicRoute = ({ children, ...routeProps }) => {
  const profile = false;

  if (profile) {
    return <Redirect to="/" />;
  }
  return <Route {...routeProps}>{children}</Route>;
};

export default PublicRoute;
