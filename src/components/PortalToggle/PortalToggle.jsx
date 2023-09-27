import React from "react";
import { createPortal } from "react-dom";

const PortalToggle = ({ status, message, showStatus, hideStatus, refresh }) => {
  return createPortal(
    <>
      <div className={`alert ${showStatus ? "" : "hidden"}`}>
        <h2
          className={`${
            status === "success" ? "text-green-700" : "text-main"
          } text-sm font-bold`}
        >
          {status?.toUpperCase()}:
        </h2>
        <p className="text-sm">{message}</p>
        <button
          className="inline-block rounded bg-main px-6 pb-2 pt-2 mt-4 text-xs font-medium text-white hover:opacity-70"
          onClick={hideStatus}
          onMouseUp={refresh}
        >
          Close
        </button>
      </div>
      <div className={`overlay ${showStatus ? "" : "hidden"}`}></div>
    </>,
    document.getElementById("root_portal"),
  );
};

export default PortalToggle;
