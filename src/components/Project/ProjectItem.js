import React from "react";

export default function ProjectItem(props) {
  return (
    <div className="project-container">
      <img src={props.image} className="image"></img>
      <div className="project-detail">
        <div className="project-name">{props.projectName}</div>
        <div className="project-description">{props.ProjectDescription}</div>
        <div className="view">{props.view}</div>
      </div>
    </div>
  );
}
