import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "../f-page/index"
import "./App.css";

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route path="/fpage">
              <Index/>
           </Route>
          </Switch>
       </div>
    );
  }
}

export default App;
