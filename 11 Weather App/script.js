const apiKey = "9f550b7171516cd607fb89fcd860a94f";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;

function cityName() {
  const getCity = document.querySelector("#city").value;
  if (getCity === "") {
    document.querySelector("#para").innerHTML = `Enter the city name`;
    clearAll();
    return;
  }

  checkWeather(getCity);
}

async function checkWeather(city) {
  try {
    const response = await fetch(
      apiUrl + city + `&units=metric&appid=${apiKey}`
    );
    if (!response.ok) throw new Error(`HTTP erroe! Status: ${response.status}`);

    const data = await response.json();
    console.log(data);

    const dayStatus = data.weather[0].main;
    if (dayStatus === "Clear") {
      document.querySelector(
        "#currWeather"
      ).innerHTML = `<img src="clear-sky.png" alt="clear-sky">
                    <figcaption>${dayStatus}</figcaption>`;
    }
    if (dayStatus === "Clouds") {
      document.querySelector(
        "#currWeather"
      ).innerHTML = `<img src="cloudy.png" alt="cloudy-sky">
                      <figcaption>${dayStatus}</figcaption>`;
    }

    document.querySelector("#currCity").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = `${data.main.temp}&degC`;

    document.querySelector(
      ".humid-windspeed"
    ).innerHTML = `humidity = ${data.main.humidity}% wind speed = ${data.wind.speed}km/hr`;

    document.querySelector("#city").value = "";
  } catch (err) {
    console.error(`Error fetching weather ${err}`);
    document.querySelector("#para").innerHTML = `Oops! couldn't fetch city`;
    clearAll();
    document.querySelector("#city").value = "";
  }
}

function clearAll() {
  document.querySelector("#currWeather").innerHTML = ``;
  document.querySelector("#temp").innerHTML = ``;
  document.querySelector(".humid-windspeed").innerHTML = ``;
}

document.querySelector("#btn").addEventListener("click", () => {
  cityName();
});
