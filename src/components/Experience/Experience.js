import React from "react";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <div className="experience-page">
      <h2 className="heading">Experience</h2>

      <ExperienceItem
        experienceDate={"September 2015 – September 2016"}
        name={"Employer Name"}
        title={"Job Title"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturin iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat."
        }
      />
      <ExperienceItem
        experienceDate={"September 2015 – September 2016"}
        name={"Employer Name"}
        title={"Job Title"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturin iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat."
        }
      />

      <ExperienceItem
        experienceDate={"September 2015 – September 2016"}
        name={"Employer Name"}
        title={"Job Title"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturin iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat."
        }
      />
    </div>
  );
};

export default Experience;
