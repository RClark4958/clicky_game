import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">
        <strong>Super Clicky Game Ultimate</strong>
      </h1>
      <p className="lead">
        {`Click a brawler yet to be clicked. Score is reset when a previous brawler is clicked.`}
      </p>
    </div>
  </div>
);

export default Jumbotron;