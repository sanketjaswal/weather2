import React from "react";
import "./ErrorPage.css";

export const ErrorPage = () => {
  const returner = () => {
    document.getElementsByClassName("errorPage")[0].style.zIndex = -1;
    document.getElementsByClassName("errorPage")[0].style.opacity = 0;
    document.getElementsByClassName("error400Page")[0].style.display = "none";
  };
  return (
    <div className="errorPage">
      <div className="popupEPContainer">
        <p>City Already Added</p>
        <button type="submit" onClick={returner}>
          <i className="fa-solid fa-circle-check"></i>
        </button>
      </div>
    </div>
  );
};
