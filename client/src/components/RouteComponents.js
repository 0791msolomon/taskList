import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../containers/LandingPage";

const RouteComponent = props => {
  return <Route path="/" component={LandingPage} />;
};
export default RouteComponent;
