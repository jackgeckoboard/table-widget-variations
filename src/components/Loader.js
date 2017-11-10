import React, { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <div className="spinner">
        <div className="spinner-container">
          <div className="rect1" />
          <div className="rect2" />
          <div className="rect3" />
          <div className="rect4" />
          <div className="rect5" />
        </div>
        <p>Sorting data</p>
      </div>
    );
  }
}

export default Loader;
