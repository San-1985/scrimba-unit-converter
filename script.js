const btn = document.getElementById("convert");
const inputField = document.getElementById("input-value");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

const meter = 3.281;
const liter = 0.264;
const kilo = 2.204;

btn.addEventListener("click", function () {
  let value = inputField.value;
  length.querySelector("p").style.opacity = 1;
  volume.querySelector("p").style.opacity = 1;
  mass.querySelector("p").style.opacity = 1;

  length.querySelector("p").innerHTML = `${value} meters = ${(
    value * meter
  ).toFixed(3)} feet | ${value} feet = ${(value / meter).toFixed(3)} meters`;

  volume.querySelector("p").innerHTML = `${value} liters = ${(
    value * liter
  ).toFixed(3)} gallons | ${value} gallons = ${(value / liter).toFixed(
    3
  )} liters`;

  mass.querySelector("p").innerHTML = `${value} kilos = ${(
    value * kilo
  ).toFixed(3)} pounds | ${value} pounds = ${(value / kilo).toFixed(3)} kilos`;

  if (inputField.value !== "") {
    inputField.addEventListener("click", function () {
      inputField.value = "";
    });
  }
});
