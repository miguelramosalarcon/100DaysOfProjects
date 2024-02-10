const button = document.querySelector("#btn");
const card = document.querySelector(".card");

const inputDay = document.querySelector("#input-day");
const inputMonth = document.querySelector("#input-month");
const inputYear = document.querySelector("#input-year");

const labelDay = document.querySelector("#label-day");
const labelMonth = document.querySelector("#label-month");
const labelYear = document.querySelector("#label-year");

const errorDay = document.querySelector("#error-day");
const errorMonth = document.querySelector("#error-month");
const errorYear = document.querySelector("#error-year");

const outputDay = document.querySelector("#output-day");
const outputMonth = document.querySelector("#output-month");
const outputYear = document.querySelector("#output-year");
const outputLabelDay = document.querySelector("#output-label-day");
const outputLabelMonth = document.querySelector("#output-label-month");
const outputLabelYear = document.querySelector("#output-label-year");

function resetAll(input, domLabel, domSubLabel) {
  input.classList.remove("error");
  domLabel.classList.remove("error");
  domSubLabel.classList.remove("error");
  card.classList.remove("error-card");
}

function markInvalid(input, domLabel, domSubLabel, message) {
  input.classList.add("error");
  domLabel.classList.add("error");
  domSubLabel.classList.add("error");
  domSubLabel.innerText = message;
  card.classList.add("error-card");
}

button.addEventListener("click", function (event) {
  resetAll(inputDay, labelDay, errorDay);
  resetAll(inputMonth, labelMonth, errorMonth);
  resetAll(inputYear, labelYear, errorYear);

  let errorDetected = false;

  // Empty inputs
  if (inputDay.value === "") {
    markInvalid(inputDay, labelDay, errorDay, "This field is required");
    errorDetected = true;
  }
  if (inputMonth.value === "") {
    markInvalid(inputMonth, labelMonth, errorMonth, "This field is required");
    errorDetected = true;
  }
  if (inputYear.value === "") {
    markInvalid(inputYear, labelYear, errorYear, "This field is required");
    errorDetected = true;
  }

  // Invalid inputs
  if (parseInt(inputDay.value, 10) > 31 || inputDay.value === "0") {
    markInvalid(inputDay, labelDay, errorDay, "Must be a valid day");
    errorDetected = true;
  }
  if (parseInt(inputMonth.value, 10) > 12 || inputMonth.value === "0") {
    markInvalid(inputMonth, labelMonth, errorMonth, "Must be a valid month");
    errorDetected = true;
  }
  if (parseInt(inputYear.value, 10) > new Date().getFullYear()) {
    markInvalid(inputYear, labelYear, errorYear, "Must be in the past");
    errorDetected = true;
  }

  if (errorDetected) return;

  const birth = new Date(inputYear.value, inputMonth.value - 1, inputDay.value);
  const birthDay = birth.getDate();
  const birthMonth = birth.getMonth() + 1;
  const birthYear = birth.getFullYear();

  const today = new Date();
  let currDay = today.getDate();
  let currMonth = today.getMonth() + 1;
  let currYear = today.getFullYear();

  let yDiff = currYear - birthYear;

  if (currMonth < birthMonth) {
    yDiff--;
    currMonth = currMonth + 12;
  }
  let mDiff = currMonth - birthMonth;

  if (currDay < birthDay) {
    if (mDiff === 0) {
      mDiff = 11;
      yDiff--;
    }

    currDay = currDay + 30;
  }
  let dDiff = currDay - birthDay;

  [
    {
      elem: outputDay,
      count: dDiff,
      refLabel: outputLabelDay,
      label: "day",
    },
    {
      elem: outputMonth,
      count: mDiff,
      refLabel: outputLabelMonth,
      label: "month",
    },
    {
      elem: outputYear,
      count: yDiff,
      refLabel: outputLabelYear,
      label: "year",
    },
  ].forEach((item) => {
    let startValue = 0;
    item.refLabel.innerText = item.label;
    if (item.count === 1) {
      item.refLabel.innerText = item.label;
    } else {
      item.refLabel.innerText = item.label + "s";
    }
    const counter = setInterval(() => {
      startValue += Math.floor(item.count / 50) + 1;
      item.elem.innerText = startValue;
      if (startValue >= item.count) {
        item.elem.innerText = item.count;
        clearInterval(counter);
      }
    }, 10);
  });
  card.classList.remove("error-card");
});
