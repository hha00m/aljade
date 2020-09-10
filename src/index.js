import React from "react";
import ReactDOM from "react-dom";
import { LocaleProvider } from "antd-mobile";
import enUS from "antd-mobile/lib/locale-provider/en_US";
import Route from "./Routes";
import allReducers from "./store/index";
import { Provider } from "react-redux";
import { createStore, applyMiddleware ,compose} from "redux";
import thunk from "redux-thunk";
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers,/* preloadedState, */ composeEnhancers( applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <Route />
    </LocaleProvider>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();

