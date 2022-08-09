import React from "react";
import "./Error400.css";

export const Error400 = () => {
  const returner = () => {
    document.getElementsByClassName("error400Page")[0].style.opacity = 0;
    document.getElementsByClassName("error400Page")[0].style.zIndex = -1;
    document.getElementsByClassName("error400Page")[0].style.display = "none";
  };
  return (
    <div className="error400Page">
      <div className="popup400Container">
        <p>City Not Found</p>
        <button type="submit" onClick={returner}>
          <i className="fa-solid fa-circle-check"></i>
        </button>
      </div>
    </div>
  );
};
