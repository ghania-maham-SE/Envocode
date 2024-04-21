import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 100) : text}
      <span
        onClick={toggleReadMore}
        className="read-or-hide"
        style={{ color: "green" }}
      >
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const Content = () => {
  return (
    <div className="container container00">
      {/* <h2> */}
      <ReadMore>
        “We partnered with tkxel to develop our game, they provided expertise in
        development, infrastructure, UI/UX, and project management. They
        advocated for scalable solutions and resolved any problems with
        ownership and effective communication, resulting in a successful
        product.”
      </ReadMore>
      {/* </h2> */}
    </div>
  );
};

export default Content;
