import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "./About";
import Home from "./Home";

import "./App.css";

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Switch>
          {/* If the current URL is /about, this route is rendered
              while the rest are ignored */}
          <Route path="/about">
            <About />
          </Route>

          {/* If none of the previous routes render anything,
              this route acts as a fallback.
  
              Important: A route with path="/" will *always* match
              the URL because all URLs begin with a /. So that's
              why we put this one last of all */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
