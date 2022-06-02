import React from "react";
import { Switch } from "react-router-dom";
import ProtectedRoute from "./protected-routes";

// Main

import { Departemans } from "../../../feature";

function Body() {
  return (
    <Switch>
      <ProtectedRoute path="/departments" component={Departemans} />
    </Switch>
  );
}

export default Body;
