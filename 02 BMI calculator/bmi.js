const getForm = document.querySelector("form");

getForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const result = document.querySelector("#result");

  if (name === "") {
    result.innerHTML = "Please Enter your name first.";
  } else if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a Valid height`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please give a valid Weight";
  } else {
    const res = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${name}'s height is ${height}CM and weight is ${weight}KG. BMI = ${res} </span>`;
  }
});
