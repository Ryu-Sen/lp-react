import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Articles from "./Articles";
import Article from "./Articles/Article";
import NotFound from "./NotFound";

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

          <Route path="/articles">
            <Articles />
          </Route>

          <Route path="/article/:iddayum">
            <Article />
          </Route>

          {/* Redirect if no param passed */}
          <Redirect from="/article/" to="/articles" />

          <Route exact path="/">
            <Home />
          </Route>

          {/* If none of the previous routes render anything,
              this route acts as a fallback.*/}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
