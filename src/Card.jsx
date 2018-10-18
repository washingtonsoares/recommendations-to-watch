import React from "react";

export default ({ title, description, imageURL, learnMore }) => (
  <div className="example-1 card">
    <div
      className="wrapper"
      style={{ background: `url(${imageURL}) 50% 1% / cover no-repeat` }}
    >
      <div className="data">
        <div className="content">
          <h1 className="title">
            <a href="#">{title}</a>
          </h1>
          <p className="text">{description}</p>
          <a href={learnMore} target="_blank">{title}</a>
        </div>
      </div>
    </div>
  </div>
);
