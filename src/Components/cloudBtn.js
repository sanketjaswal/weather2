import React from "react";
import "./cloudBtn.css";

export const CloudBtn = () => {
  const cldBtnClick = () => {
    document.getElementsByClassName("enterCity")[0].style.opacity = 1;
    document.getElementsByClassName("enterCity")[0].style.transform =
      "scale(1)";
    document.getElementsByClassName("enterCity")[0].style.zIndex = 2;
    document.getElementsByClassName("cityPopup")[0].style.display = "block";
  };
  return (
    <div className="cloudBtnContainer" onClick={cldBtnClick}>
      <div className="cldBtnSun"></div>
      <div className="cldBtnLeft"></div>
      <div className="cldBtnTop"></div>
      <div className="cldBtnBase"></div>
      <div className="cldBtnIconHolder">
        <i className="fa-solid fa-plus fa-2xl fa-beat"></i>
      </div>
    </div>
  );
};
