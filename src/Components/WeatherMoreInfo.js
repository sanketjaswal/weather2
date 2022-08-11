import React from "react";
import "./WeatherMoreInfo.css";
import Clear from "./videos/clear.mp4";

import ThunderStorm from "./videos/thunderstorm.mp4";
import BrokenClouds from "./videos/brokenClouds.mp4";
import OvercastClouds from "./videos/overcastclouds1.mp4";
import Drizzle from "./videos/drizzle.mp4";
import Rain from "./videos/rain.mp4";

import { HourlyWeatherSlot } from "./hourlyWeatherSlot";

export const WeatherMoreInfo = ({
  info,

  slotCompress,
}) => {
  const cityName = info[0];
  // const weather = info[1];
  const weatherExplain = info[2];
  // const tempKelvin = info[3];
  const tempCelsius = Math.round(info[4]);
  // const tempFahrenheit = Math.round(info[5]);
  // const country = info[6];
  const longitute = info[7];
  const latitute = info[8];
  // const iconId = info[9].slice(0, info[9].length - 1);
  const population = info[10];
  const sunrize = info[11];
  const sunset = info[12];
  // const dtt = info[13];
  const humidity = info[14];
  const pressure = info[15];
  const windSpeed = info[16];
  const currentTime = info[17];
  const visibility = info[18];
  const feels_like = Math.round(info[19]);
  const temp_max = info[20];
  const timezone = info[21] / 3600;

  var videoss = Clear;
  if (weatherExplain === "broken clouds") {
    videoss = BrokenClouds;
  } else if (weatherExplain === "overcast clouds") {
    videoss = OvercastClouds;
  } else if (weatherExplain === "drizzle") {
    videoss = Drizzle;
  } else if (weatherExplain === "rain" || weatherExplain === "light rain") {
    videoss = Rain;
  } else if (weatherExplain === "snow") {
    videoss = Drizzle;
  } else if (weatherExplain === "thunderstorm") {
    videoss = ThunderStorm;
  } else if (weatherExplain === "clear") {
    videoss = Clear;
  }

  // if(weatherExplain === "brokenClouds")

  return (
    <div className={`MoreInfoSlotContainer ${cityName + 1}`}>
      <div className="video-container">
        <video id="myVideo" autoPlay muted loop>
          <source src={videoss} type="video/mp4" />
        </video>
        <div className="futureWeatherContainer">
          <div className="hourSlotCont">
            <p>Population</p>
            <p>{population}</p>
          </div>
          <div className="hourSlotCont">
            <p>Visibility</p>
            <p>{visibility}</p>
          </div>
          <div className="hourSlotCont">
            <p>Feels like</p>
            <p>{feels_like}K</p>
          </div>
          <div className="hourSlotCont">
            <p>Temperature</p>
            <p>{temp_max}K</p>
          </div>
          <div className="hourSlotCont">
            <p>Humidty</p>
            <p>{humidity}</p>
          </div>
          <div className="hourSlotCont">
            <p>Timezone</p>
            <p>{timezone} Hrs</p>
          </div>
          <div className="hourSlotCont">
            <p>Pressure</p>
            <p>{pressure}</p>
          </div>{" "}
        </div>
      </div>
      <div className="timeCont">
        <p>{currentTime}</p>
        {/* <p>PM</p> */}
      </div>
      <div className="dateCont">
        <p>Friday, 29 July</p>
      </div>
      <div className="weatherDetails">
        <div>
          <p>Humidty</p>
          <p>{humidity}</p>
        </div>
        <div>
          <p>Pressure</p>
          <p>{pressure}</p>
        </div>
        <div>
          <p>Wind Speed</p>
          <p>{windSpeed}</p>
        </div>
        <div>
          <p>Sunrise</p>
          <p>{sunrize}</p>
        </div>
        <div>
          <p>Sunset</p>
          <p>{sunset}</p>
        </div>
      </div>

      <div className="cityCont">
        <p>{cityName}</p>
        <p>
          {longitute} / {latitute}
        </p>
        <div>
          <p>{tempCelsius}</p>
          <p>°C</p>
        </div>
        <p>{weatherExplain}</p>
      </div>
      <div className="closeBtn" onClick={() => slotCompress()}>
        X
      </div>
    </div>
  );
};
