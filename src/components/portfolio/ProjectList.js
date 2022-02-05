import React, { Component } from "react";
import { portfolioData } from "../data/portofolioData";
import Project from "./Project";

class ProjectList extends Component {
  state = {
    projects: portfolioData,
    radios: [
      { id: 1, value: "javascript" },
      { id: 2, value: "VueJS" },
      { id: 3, value: "css" },
    ],
    seletedRadio: "javascript",
  };

  handleRadio = (event) => {
    let radio = event.target.value;
    this.setState({ seletedRadio: radio });
  };

  render() {
    let { projects, radios, seletedRadio } = this.state;

    return (
      <div className="portfolioContent">
        <ul className="radioDisplay">
          {radios.map((radio) => {
            return (
              <li key={radio.id}>
                <input
                  type="radio"
                  name="radio"
                  checked={radio.value === seletedRadio}
                  value={radio.value}
                  id={radio.value}
                  onChange={this.handleRadio}
                />
                <label htlmFor={radio.value}>{radio.value}</label>
              </li>
            );
          })}
        </ul>
        <div className="projects">
          {projects
            .filter((item) => item.languages.includes(seletedRadio))
            .map((item) => {
              return <Project key={item.id} item={item} />;
            })}
        </div>
      </div>
    );
  }
}

export default ProjectList;
