import React from "react";
import classnames from "classnames";
import "../Badge/badge.scss";
const Badge = ({ color, className }) => {
  return (
    <div
      className={classnames("badge", { [`badge--${color}`]: color }, className)}
    ></div>
  );
};

export default Badge;
