const form = document.querySelector("#form");
// const reset = document.querySelector("#reset");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = document.querySelector(".height").value;
  const weight = document.querySelector(".weight").value;
  const result = document.querySelector(".result");

  const bmi = ((weight / height ** 2) * 10000).toFixed(2);
  result.value = bmi;
});

// form.addEventListener("reset", (e) => {
//   const height = (document.querySelector(".height").value = null);
//   const weight = (document.querySelector(".weight").value = null);
//   const result = (document.querySelector(".result").value = null);
// });
