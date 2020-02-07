import React from "react";
import { Switch, Route, Redirect, NavLink, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";

import About from "./About";
import Home from "./Home";
import Articles from "./Articles";
import Currency from "../ryu/index"
import Article from "./Articles/Article";
import Thomas from "./Thomas";
import Florin from "../f-page/index";
import NotFound from "./NotFound";

import "./App.css";

const { Header, Content } = Layout;

class App extends React.PureComponent {
  disableHeader = () =>
    !(
      this.props.location.pathname === "/thomas" ||
      this.props.location.pathname === "/fpage"
    );

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        {this.disableHeader() && (
          <Header style={{ background: "#fff", padding: 0 }}>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[this.props.location.pathname]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item className="App-menu-item" key="/">
                <span>Home</span>
                <NavLink to="/" />
              </Menu.Item>
              <Menu.Item className="App-menu-item" key="/articles">
                <span>Articles</span>
                <NavLink to="/articles" />
              </Menu.Item>
              <Menu.Item className="App-menu-item" key="/about">
                <span>About</span>
                <NavLink to="/about" />
              </Menu.Item>
              <Menu.Item className="App-menu-item" key="/thomas">
                <span>Thomas</span>
                <NavLink to="/thomas" />
              </Menu.Item>
              <Menu.Item className="App-menu-item" key="/fpage">
                <span>Florin</span>
                <NavLink to="/fpage" />
              </Menu.Item>
            </Menu>
          </Header>
        )}

        <Content className="App">
          <Switch>
            {/* If the current URL is /about, this route is rendered
              while the rest are ignored */}
            <Route path="/about">
              <About />
            </Route>

            <Route path="/articles">
              <Articles />
            </Route>

            <Route path="/article/currency">
              <Currency />
            </Route>

            <Route path="/article/:id">
              <Article />
            </Route>

            {/* Redirect if no param passed */}
            <Redirect from="/article/" to="/articles" />

            <Route path="/fpage">
              <Florin />
            </Route>

            <Route path="/thomas">
              <Thomas />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            {/* If none of the previous routes render anything,
              this route acts as a fallback.*/}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default withRouter(App);
