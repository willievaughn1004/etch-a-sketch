// Variables

const etchASketch = document.querySelector(".etch-a-sketch");

const colorButton = document.querySelector(".color-mode");
const rainbowButton = document.querySelector(".rainbow-mode");
const eraserButton = document.querySelector(".eraser");
const clearButton = document.querySelector(".clear");

const rangeDisplay = document.querySelector(".range-display");
const rangeSlider = document.querySelector(".range-slider");
const colorInput = document.querySelector(".color-input");

// Functions

function resizeSquare() {
  etchASketch.innerHTML = "";
  makeGrid(rangeSlider.value);
  rangeDisplay.textContent = `${rangeSlider.value} x ${rangeSlider.value}`;
}

function makeSquare(size) {
  const newSquare = document.createElement("div");

  newSquare.style.width = `calc(100% / ${size})`;
  newSquare.style.height = `calc(100% / ${size})`;

  newSquare.classList.add("square");
  etchASketch.append(newSquare);

  newSquare.addEventListener("mousedown", function () {
    newSquare.style.backgroundColor = `${colorInput.value}`;
    moved = true;
  });

  newSquare.addEventListener("mousemove", function () {
    if (moved) {
      newSquare.style.backgroundColor = `${colorInput.value}`;
    }
  });

  newSquare.addEventListener("mouseup", function () {
    moved = false;
  });
}

function makeGrid(squares) {
  for (let i = squares * squares; i > 0; i--) {
    makeSquare(squares);
  }
}

resizeSquare();

// Event Listeners

clearButton.addEventListener("click", resizeSquare);

rangeSlider.addEventListener("change", resizeSquare);
rangeSlider.addEventListener("mousemove", resizeSquare);

eraserButton.addEventListener("click");

// You need to add a slider, as you're not making much progress with prompt.
