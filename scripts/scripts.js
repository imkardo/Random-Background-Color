// Set Variables
let selectColor = document.getElementById("body");
let rRange = document.getElementById("red-range");
let gRange = document.getElementById("green-range");
let bRange = document.getElementById("blue-range");
let randomBtn = document.getElementById("button");
let copyCode = document.getElementById("copy-code");

// Function to Change background color
function changeBackground() {
  selectColor.style.backgroundColor =
    "rgb(" + rRange.value + "," + gRange.value + "," + bRange.value + ")";
}

// Functions to Copy background color rgb code
function copyRgbCode() {
  copyCode.value =
    "rgb(" + rRange.value + "," + gRange.value + "," + bRange.value + ")";
}

// when range input scrolled change these
rRange.addEventListener("input", function () {
  changeBackground();
  copyRgbCode();
});

gRange.addEventListener("input", function () {
  changeBackground();
  copyRgbCode();
});

bRange.addEventListener("input", function () {
  changeBackground();
  copyRgbCode();
});

// make random number when click on button
randomBtn.addEventListener("click", function () {
  let randomRrange = Math.random() * 255;
  let randomGrange = Math.random() * 255;
  let randomBrange = Math.random() * 255;
  selectColor.style.backgroundColor =
    "rgb(" + randomRrange + "," + randomGrange + "," + randomBrange + ")";
  rRange.value = randomRrange;
  gRange.value = randomGrange;
  bRange.value = randomBrange;
  copyRgbCode();
});

// copy rgb code when click on input
copyCode.addEventListener("click", function () {
  copyCode.select();
  navigator.clipboard.writeText(copyCode.value);
});
