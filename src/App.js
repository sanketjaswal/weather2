import React, { useEffect, useState } from "react";
import "./App.css";
import { Nav } from "./Components/Nav";
import { WeatherSlot } from "./Components/WeatherSlot";
import { WeatherMoreInfo } from "./Components/WeatherMoreInfo";
import { Error400 } from "./Components/Error400";
import { ErrorPage } from "./Components/ErrorPage";
import { CloudBtn } from "./Components/cloudBtn";
import { EnterCity } from "./Components/EnterCity";

function App() {
  const slotHolder = [];
  const valueHolder = [];

  const [slot, setSlot] = useState(slotHolder);
  const [info, setInfo] = useState(valueHolder);

  useEffect(() => {
    console.log("hello");
  }, [slot]);

  async function getWeather(city) {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=33a10730e6ca0c3509477c6f462add13`
    );

    let hourlyResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=33a10730e6ca0c3509477c6f462add13`
    );

    hourlyResponse = await hourlyResponse.json();

    response = await response.json();

    if (response.cod === "400" || response.cod === "404") {
      document.getElementsByClassName("error400Page")[0].style.opacity = 1;
      document.getElementsByClassName("error400Page")[0].style.zIndex = 2;
      document.getElementsByClassName("error400Page")[0].style.display = "flex";
    } else {
      console.log(response);
      console.log(hourlyResponse);
      const arr = [];

      const cityName = response.name;
      const weather = response.weather[0].main;
      const weatherExplain = response.weather[0].description;
      const tempKelvin = response.main.temp;
      const tempCelsius = tempKelvin - 273.15;
      const tempFahrenheit = (tempCelsius * 9) / 5 + 32;
      const country = response.sys.country;
      const longitute = response.coord.lon;
      const latitute = response.coord.lat;
      const iconId = response.weather[0].icon;
      const population = hourlyResponse.city.population;
      const sunrize = response.sys.sunrise;
      const sunset = response.sys.sunset;
      const dt = response.dt;
      const humidity = response.main.humidity;
      const pressure = response.main.pressure;
      const windSpeed = response.wind.speed;
      const visibility = response.visibility;
      const feels_like = response.main.feels_like;
      const temp_max = response.main.temp_max;
      const timezone = response.timezone;
      // const hourlyList = hourlyResponse.list;

      arr.push(cityName);
      arr.push(weather);
      arr.push(weatherExplain);
      arr.push(tempKelvin);
      arr.push(tempCelsius);
      arr.push(tempFahrenheit);
      arr.push(country);
      arr.push(longitute);
      arr.push(latitute);
      arr.push(iconId);
      arr.push(population);
      arr.push(sunrize);
      arr.push(sunset);
      arr.push(dt);
      arr.push(humidity);
      arr.push(pressure);
      arr.push(windSpeed);

      // arr.push(hourlyList);

      // console.log(response.sys.sunrise);

      // let unix_timestamp = 1549312452;
      // Create a new JavaScript Date object based on the timestamp
      // multiplied by 1000 so that the argument is in milliseconds, not seconds.
      var date = new Date(dt * 1000);
      // Hours part from the timestamp
      var hours = date.getHours();
      // Minutes part from the timestamp
      var minutes = "0" + date.getMinutes();
      // Seconds part from the timestamp
      // var seconds = "0" + date.getSeconds();

      // Will display time in 10:30:23 format
      var currentTime = hours + ":" + minutes.substr(-2);

      // console.log(currentTime);
      arr.push(currentTime);
      arr.push(visibility);
      arr.push(feels_like);
      arr.push(temp_max);
      arr.push(timezone);
      // console.log(visibility);
      createSlot(city, arr);
    }
  }

  const createSlot = (city, arr) => {
    if (slot.includes(city)) {
      document.getElementsByClassName("errorPage")[0].style.zIndex = 2;
      document.getElementsByClassName("errorPage")[0].style.opacity = 1;
      document.getElementsByClassName("errorPage")[0].style.display = "flex";
    } else {
      setSlot((pre) => [...pre, city]);
      setInfo((pre) => [...pre, arr]);
    }
    // console.log(Intl.DateTimeFormat().resolvedOptions());
  };

  const deleteSlot = (index) => {
    setInfo((pre) => {
      const neW = [...pre];
      neW.splice(index, 1);
      console.log(neW);
      return neW;
    });
    setSlot((pre) => {
      const neW = [...pre];
      neW.splice(index, 1);
      console.log(neW);
      return neW;
    });
  };

  // const hideSlot = (evt) => {
  //   const element = evt.currentTarget.parentElement;
  //   if (element.className !== "hiddenSlot") {
  //     console.log(element.children);
  //     for (var i = 0; i <= 5; i++) {
  //       if (i === 1 || i === 2 || i === 5) {
  //         element.children[i].style.display = "none";
  //       }
  //     }
  //     element.children[0].lastChild.style.display = "none";
  //     element.className = "hiddenSlot";
  //   } else {
  //     for (i = 0; i <= 5; i++) {
  //       if (i === 1 || i === 2 || i === 5) {
  //         element.children[i].style.display = "flex";
  //       }
  //     }
  //     element.children[0].lastChild.style.display = "flex";
  //     element.className = "weatherSlotContainer";
  //   }
  // };

  const onSearch = () => {
    let city = document.getElementById("cityName").value.toLowerCase();
    city = city.charAt(0).toUpperCase() + city.slice(1);
    document.getElementById("cityName").value = "";
    getWeather(city);
  };

  var clickedCity;

  const slotExpand = (e) => {
    console.log(e.currentTarget.firstChild.lastChild.firstChild.innerHTML);
    // var slotParent = e.currentTarget.parentElement;
    // slotParent.style.width = "90vw";
    // slotParent.style.height = "90vh";
    clickedCity = e.currentTarget.firstChild.lastChild.firstChild.innerHTML;
    document.getElementsByClassName(clickedCity + 1)[0].style.zIndex = "2";
    var moreIArea = document.getElementsByClassName("moreInfoArea")[0];
    moreIArea.style.zIndex = "1";
    moreIArea.style.opacity = "1";
    moreIArea.style.transform = "scale(1)";
  };

  const slotCompress = () => {
    console.log("compress");
    var moreIArea = document.getElementsByClassName("moreInfoArea")[0];
    moreIArea.style.zIndex = "-2";
    moreIArea.style.opacity = "0";
    moreIArea.style.transform = "scale(2)";
    document.getElementsByClassName(clickedCity + 1)[0].style.zIndex = "1";
  };

  // Enter Key  problem

  // var input = document.getElementById("cityName");
  // // if (input) {
  // input.addEventListener("keypress", function (event) {
  //   if (event.key === "Enter") {
  //     event.preventDefault();
  //     document.getElementsByClassName("crossBtn")[0].click();
  //     alert("hey");
  //     console.log("hey");
  //   }
  // });
  // }

  return (
    <div className="App">
      <div className="bgImage">
        <ErrorPage />
        <Error400 />
        <EnterCity onSearch={onSearch} />
        <div className="page">
          <div className="weatherLogoContainer">
            <i className="fa-solid fa-cloud-sun weatherLogoIcon"></i>
            <p className="weatherLogoText">Weather Plus</p>
          </div>
          <CloudBtn />

          <div className="slotArea">
            {info.map((info, index) => (
              <WeatherSlot
                key={index - info}
                index={index}
                info={info}
                deleteSlot={deleteSlot}
                slotExpand={slotExpand}
                // hideSlot={hideSlot}
              />
            ))}
          </div>
          <div className="moreInfoArea">
            {info.map((info, index) => (
              <WeatherMoreInfo
                key={index - info}
                index={index}
                info={info}
                deleteSlot={deleteSlot}
                slotCompress={slotCompress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
