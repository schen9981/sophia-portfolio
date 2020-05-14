import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
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
            <Route path={process.env.PUBLIC_URL + '/about'}>
              <div className="App">
                <About />
              </div>
            </Route>
            <Route path={process.env.PUBLIC_URL + '/work'}>
              <div className="App">
                <About />
              </div>
            </Route>
            <Route path={process.env.PUBLIC_URL}>
              <div className="App">
                <Home />
              </div>
            </Route>
          </Switch>
      </Router>
    );
  }

}
