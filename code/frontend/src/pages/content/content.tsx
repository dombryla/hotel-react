import React from "react";
import {Home} from "./home";
import {NewDirector} from "./new-director";
import {NewManager} from "./new-manager";
import {NewWorker} from "./new-worker";
import {ListManager} from "./list-manager";
import {ListWorker} from "./list-worker";
import {Contact} from "./contact";
import {MyProfile} from "./my-profile";

import {Switch, Route} from "react-router-dom";

export const Content: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/hire/new-director">
        <NewDirector />
      </Route>
      <Route path="/hire/new-manager">
        <NewManager />
      </Route>
      <Route path="/hire/new-worker">
        <NewWorker />
      </Route>
      <Route path="/list/managers">
        <ListManager />
      </Route>
      <Route path="/list/workers">
        <ListWorker />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/profile">
        <MyProfile />
      </Route>
    </Switch>
  );
};
