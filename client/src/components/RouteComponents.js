import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../containers/LandingPage";
import AddPerson from "../containers/AddPerson";
import Home from "../containers/Home";

const RouteComponent = props => {
  return (
    <div>
      <Route path="/add" component={AddPerson} />
      <Route path="/members" component={LandingPage} />
      <Route exact path="/" component={Home} />
    </div>
  );
};
export default RouteComponent;
