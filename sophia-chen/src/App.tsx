import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { createBrowserHistory } from "history";

type AppProps = {};

type AppState = {};

const history = createBrowserHistory();

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Router history={history}>
          <Switch>
            <Route path="/about">
              <div className="App">
                <About />
              </div>
            </Route>
            <Route path="/work">
              <div className="App">
                <About />
              </div>
            </Route>
            <Route path="">
              <div className="App">
                <Home />
              </div>
            </Route>
          </Switch>
      </Router>
    );
  }

}
