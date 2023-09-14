import React from "react";
import { createPortal } from "react-dom";
import "./Error.css";

const Error = ({ status, message, showError, hideError }) => {
  return createPortal(
    <>
      <div className={`alert ${showError ? "" : "hidden"}`}>
        <h2 className="text-lg text-main">{status?.toUpperCase()}:</h2>
        <p className="text-sm">{message}</p>
        <button
          className="inline-block rounded bg-main px-6 pb-2 pt-2 mt-4 text-xs font-medium text-white hover:opacity-70"
          onClick={hideError}
        >
          Close
        </button>
      </div>
      <div className={`overlay ${showError ? "" : "hidden"}`}></div>
    </>,
    document.getElementById("root_portal"),
  );
};

export default Error;
