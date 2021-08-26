import React, { Component } from "react";
import "./chekpoint.css";

export default class Checkpoint extends Component {
  state = {
    person: {
      fullname: "soultani make",
      image: "./Capture.png",
      proffession: "devloper",
    },
    shows: true,
    timer: 0,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        timer: this.state.timer + 1,
      });
    }, 1000);
  }

  render() {
    return (
      <div className="card">
        <div className="first">
          <h2>{this.state.timer}</h2>
          {this.state.shows && (
            <img
              className="photo"
              src={this.state.person.image}
              style={{ width: "50%" }}
            />
          )}
        </div>
        <div className="second">
          <h1>{this.state.person.fullname}</h1>
          <p>{this.state.person.proffession}</p>
          <button
            onClick={() => {
              this.setState({
                shows: !this.state.shows,
              });
            }}
          >
            shows
          </button>
        </div>
      </div>
    );
  }
}
