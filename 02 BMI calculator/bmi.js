const getForm = document.querySelector("form");


getForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);


  
  const result = document.querySelector("#result");
  const getBmi = document.querySelector("#bmi");

  if (name === "") {
    result.innerHTML = "Please Enter your name first.";
    getBmi.innerHTML = "";
  } else if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a Valid height`;
    getBmi.innerHTML = "";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please give a valid Weight";
    getBmi.innerHTML = "";
  } else {
    const res = (weight / ((height * height) / 10000)).toFixed(2);

    if (res < 18) {
      getBmi.innerHTML = `<span style="color: yellow;"> ${name} Your BMI is ${res} </span>`;
    } else if (res >= 18 && res < 26) {
      getBmi.innerHTML = `<span style="color: green;">  ${name} Your BMI is ${res} </span>`;
    } else {
      getBmi.innerHTML = `<span style="color: red;">  ${name} Your BMI is ${res} </span>`;
    }
    document.querySelector("#name").value = "";
    document.querySelector("#height").value = "";
    document.querySelector("#weight").value = "";
  }
});


