import React from "react";
import { Link } from "react-router-dom";
const Heading = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid container">
          <Link to="/" className="navbar-brand">
            <h2>TaskApp</h2>
          </Link>
          <Link to="/add">
            <button className="btn btn-success">Add Task</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Heading;
