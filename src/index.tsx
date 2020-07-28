import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Main, Home } from "screens";
import * as serviceWorker from "./serviceWorker";
import { store } from "store";
import { Provider } from "react-redux";
import { Switch, Route, HashRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <HashRouter>
          <Switch>
            <Route path="/forecast" render={() => <Main />} />
            <Route path="/" render={() => <Home />} />
          </Switch>
        </HashRouter>
      </React.StrictMode>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
