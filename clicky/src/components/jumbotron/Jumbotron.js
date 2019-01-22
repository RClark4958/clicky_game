import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">
        <strong>Clicky Game!</strong>
      </h1>
      <p className="lead">
        {`Earn 1 point for clicking on an image yet to be clicked!`}
      </p>
    </div>
  </div>
);

export default Jumbotron;