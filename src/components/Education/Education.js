import React from "react";

const Education = () => {
  return (
    <div className="education-page">
      <div className="education-heading">Education</div>

      <div className="education-block">
        <div className="university">University of Ottawa</div>
        <div className="date">Sept 2016 - Sept 2017</div>
        <div className="course">Bachelor of Science in Computer Science</div>
        <div className="education-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
          iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla
          commodo malesuada sit amet vel lacus. Fusce eget efficitur libero.
          Morbi dapibus porta quam laoreet placerat.
        </div>
      </div>
      <div className="education-block">
        <div className="university">University of Ottawa</div>
        <div className="date">Sept 2016 - Sept 2017</div>
        <div className="course">Bachelor of Science in Computer Science</div>
        <div className="education-description">
          <ul>
            <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
