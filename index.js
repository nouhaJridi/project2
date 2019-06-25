import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Mycomponent from "./App.js"
const App = () => {
  return (
    <div>
      <Mycomponent/>
    </div>
   
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);