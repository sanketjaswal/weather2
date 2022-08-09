import React from "react";
import "./EnterCity.css";

export const EnterCity = ({ onSearch }) => {
  const twoFuncrions = () => {
    returner();
    onSearch();
  };

  const returner = () => {
    document.getElementsByClassName("enterCity")[0].style.opacity = 0;
    document.getElementsByClassName("enterCity")[0].style.transform =
      "scale(7)";
    document.getElementsByClassName("enterCity")[0].style.zIndex = -1;
    document.getElementsByClassName("cityPopup")[0].style.display = "none";
  };
  return (
    <div className="enterCity">
      <div className="cityPopup">
        {/* <h2>Enter City Name</h2> */}
        <div className="nameBtn">
          <input
            type="text"
            placeholder="Enter city name"
            id="cityName"
            name="name"
          ></input>
          <button type="submit" onClick={twoFuncrions}>
            <i className="fa-solid fa-circle-check"></i>
          </button>
        </div>
        <i className="crossBtn fa-solid fa-circle-xmark" onClick={returner}></i>
      </div>
    </div>
  );
};
