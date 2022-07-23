import React from 'react';


const Home = () => {
    return (
      <div className="Mainpage">
        <div className="toolbar">
          <div className="toolbar-items">
            <div className="items">About</div>
            <div className="items">Experience</div>
            <div className="items">Education</div>
            <div className="items">Projects</div>
            <div className="items">Skills</div>
            <div className="items">Contact</div>
          </div>
        </div>
  
        <div className="middle-content">
          <div className="person-name">
            RYAN <br /> FITZGERALD
          </div>
          <div className="person-profile">Software Engineer</div>
          <button className="click-button">Download Resume</button>
        </div>
      </div>
    );
  };

  export default Home;