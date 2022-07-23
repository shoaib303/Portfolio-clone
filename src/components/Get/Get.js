import React from 'react';


const Get = () => {
    return (
      <div className="get-in-touch">
        <div className="get-in-title">Get in Touch</div>
        <div className="get-in-container">
          <input type="text" placeholder="Your mail"></input>
          <textarea placeholder="Your message"></textarea>
          <button className="button">Send</button>
        </div>
      </div>
    );
  };

  export default Get;