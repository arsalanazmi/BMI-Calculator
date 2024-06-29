const form = document.querySelector("#form");
const reset = document.querySelector("#reset");
const heightError = document.querySelector(".heightError");
const weightError = document.querySelector(".weightError");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = document.querySelector(".height").value;
  const weight = document.querySelector(".weight").value;
  const result = document.querySelector(".result");

  if (height <= 0 || height == "") {
    heightError.setAttribute("style", "display:block !important");
    heightError.innerHTML = "Please enter valid height in cm.";
  }
  if (weight <= 0 || weight == "") {
    weightError.setAttribute("style", "display:block !important");
    weightError.innerHTML = "Please enter valid weight in kg.";
  } else {
    const bmi = ((weight / height ** 2) * 10000).toFixed(2);
    result.value = bmi;
  }
});

form.addEventListener("reset", (e) => {
  heightError.innerHTML = "";
  weightError.innerHTML = "";
});
