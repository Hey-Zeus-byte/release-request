import ReactDOM from "react-dom";
import App from "./App";
import {HashRouter} from "react-router-dom";
import "./index.css";

// const rootElement = document.getElementById("root");
ReactDOM.render(
  <HashRouter basename="/">
    <App />
  </HashRouter>,
  document.getElementById("root")
);
