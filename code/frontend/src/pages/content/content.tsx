import React from "react";
import {Home} from "./home";
import {ListWorker} from "./list-worker";
import {Contact} from "./contact";
import {MyProfile} from "./my-profile";
import {FormHire} from "../../components/form-hire";

import {Switch, Route} from "react-router-dom";

import "./content.css";

export const Content: React.FC = () => {
  return (
    <div className="contentContainer">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/hire/new-director">
          <FormHire />
        </Route>
        <Route path="/hire/new-manager">
          <FormHire />
        </Route>
        <Route path="/hire/new-worker">
          <FormHire />
        </Route>
        <Route path="/list/managers">
          <ListWorker />
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
    </div>
  );
};
