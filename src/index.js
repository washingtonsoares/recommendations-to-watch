import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./styles.css";
import recommendations from "./recommendations";
import map from "lodash.map";

function App() {
  return (
    <div className="row">
      <h1 className="main-title">Recomendações para assistir</h1>
      {map(recommendations, (recommendation, i) => (
        <Card key={i} {...recommendation} />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
