import React from "react";

const Star = ({ starId, marked }) => {
  return (
    <span
      className="text-[35px]"
      star-id={starId}
      style={{ color: "#ff9933" }}
      role="button"
    >
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

export default Star;
