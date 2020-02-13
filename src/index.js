import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";
import { Layout } from "./components";

import "./index.css";
import "antd/dist/antd.css";

ReactDOM.render(
  <Router>
    <Layout description="This is the Landing Page main route! You're free to choose where you want to go!">
      <App />
    </Layout>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
