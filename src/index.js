import React from "react";
import ReactDOM from "react-dom";
import App from "./components/index";
import { Provider } from "./store/context";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <Switch>
        <Route path="/pokemon" component={App} />
        <Route render={() => <Redirect to={{ pathname: "/pokemon" }} />} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
