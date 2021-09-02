import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import Subcomponent1 from "./subcomponent1";
import Subcomponent2 from "./subcomponent2";

const Component3 = () => {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <p>Component3</p>
      <ul>
        <li>
          <Link to={`${url}/sub1`}>Subcomp1</Link>
        </li>
        <li>
          <Link to={`${url}/sub2`}>Subcomp2</Link>
        </li>
        <Switch>
          <Route exact path={`${path}/sub1`}>
            <Subcomponent1 />
          </Route>
          <Route exact path={`${path}/sub2`}>
            <Subcomponent2 />
          </Route>
        </Switch>
      </ul>
    </div>
  );
};

export default Component3;
