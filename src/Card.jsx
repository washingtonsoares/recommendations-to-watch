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
        </div>
        <input type="checkbox" id="show-menu" />
        <ul className="menu-content">
          <li>
            <a href="#" className="fa fa-bookmark-o" />
          </li>
          <li>
            <a href="#" className="fa fa-heart-o">
              <span>47</span>
            </a>
          </li>
          <li>
            <a href="#" className="fa fa-comment-o">
              <span>8</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
