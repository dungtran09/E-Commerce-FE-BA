import React from "react";
import { createPortal } from "react-dom";

const Portal = () => {
  return createPortal(
    <div>There are something wrong.</div>,
    document.getElementById("root_portal"),
  );
};

export default Portal;
