import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { Layout, Menu } from "antd";

import About from "./About";
import Home from "./Home";
import Articles from "./Articles";
import Article from "./Articles/Article";
import NotFound from "./NotFound";

import "./App.css";

const { Header, Content } = Layout

class App extends React.PureComponent {
  render() {
    return (
      // <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ background: '#fff', padding: 0 }} >
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              <span>Home</span>
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
              <span>Articles</span>
              <Link to="/articles" />
            </Menu.Item>
            <Menu.Item key="3">
              <span>About</span>
              <Link to="/about" />
            </Menu.Item>
          </Menu>
        </Header>

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

            <Route path="/article/:id">
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
        </Content>
      </Layout>
      // </div>
    );
  }
}

export default App;
