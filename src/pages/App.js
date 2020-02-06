import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Thomas from "./Thomas";
import NotFound from "./NotFound";

import "./App.css";

class App extends React.PureComponent {
  render() {

    return (
      <Switch>
        <Route path="/thomas">
          <Thomas />
        </Route>

        <Redirect from="/" to="/thomas" />

        {/* If none of the previous routes render anything,
              this route acts as a fallback.*/}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    );
  }
}

export default App;
