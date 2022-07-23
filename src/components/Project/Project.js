import React from "react";
import ProjectItem from "./ProjectItem";

const Project = () => {
  return (
    <div className="project-page">
      <div className="project-heading">Projects</div>

      <ProjectItem
        image={
          "https://ryanfitzgerald.github.io/devportfolio/images/project.jpg"
        }
        ProjectName={"Project Name Here"}
        ProjectDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturin iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec  nulla commodo malesuada sit amet vel lacus. Fusce eget efficiturlibero. Morbi dapibus porta quam laoreet placerat."
        }
        view={"View Project"}
      />

      <ProjectItem
        image={
          "https://ryanfitzgerald.github.io/devportfolio/images/project.jpg"
        }
        ProjectName={"Project Name Here"}
        ProjectDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturin iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec  nulla commodo malesuada sit amet vel lacus. Fusce eget efficiturlibero. Morbi dapibus porta quam laoreet placerat."
        }
        view={"View Project"}
      />
    </div>
  );
};

export default Project;
