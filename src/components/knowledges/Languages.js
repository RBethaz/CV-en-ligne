import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascipt", xp: 0.9 },
      { id: 2, value: "CSS", xp: 0.9 },
    ],
    frameworks: [
      { id: 1, value: "VueJS", xp: 0.5 },
      { id: 1, value: "React", xp: 0.35 },
      { id: 1, value: "Bootstrap", xp: 0.9 },
      { id: 1, value: "Sass", xp: 0.9 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFramworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          title="frameworks & biblioteque"
          className="framworksDisplay"
        />
      </div>
    );
  }
}

export default Languages;
