import React from 'react';

export default function ExperienceItem(props){
    return(
        <div className="experience">
          <div className="experience-date">{props.experienceDate}</div>
          <div className="icon"></div>
          <div className="experience-data">
          <div className="name">{props.name}</div>
          <div className="title">{props.title}</div>
            <div className="description">{props.description}
            </div>
          </div>
        </div>
    )
}