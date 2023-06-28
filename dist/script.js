// Variables

const etchASketch = document.querySelector(".etch-a-sketch");

const colorButton = document.querySelector(".color-mode");
const rainbowButton = document.querySelector(".rainbow-mode");
const eraserButton = document.querySelector(".eraser-mode");
const clearButton = document.querySelector(".clear");
const darkeningButton = document.querySelector(".darkening-mode");

const rangeDisplay = document.querySelector(".range-display");
const rangeSlider = document.querySelector(".range-slider");
const colorInput = document.querySelector(".color-input");

let moved = false;
let etchMode = "color-mode";
let opacity = 0.1;

// Functions

function resizeSquare() {
  etchASketch.innerHTML = "";
  makeGrid(rangeSlider.value);
  rangeDisplay.textContent = `${rangeSlider.value} x ${rangeSlider.value}`;
}

function setColor(square) {
  if (etchMode === "color-mode") {
    square.style.backgroundColor = `${colorInput.value}`;
  }

  if (etchMode === "eraser-mode") {
    square.style.opacity = 1;
    square.style.backgroundColor = `white`;
  }

  if (etchMode === "rainbow-mode") {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    square.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  }

  if (etchMode === "darkening-mode") {
    square.style.opacity = `${opacity}`;
    square.style.backgroundColor = `${colorInput.value}`;

    if (opacity < 1) {
      opacity += 0.1;
      console.log(opacity);
    }
  }
}

function changeMode(mode) {
  etchMode = mode.className;
  opacity = 0.1;
}

function makeSquare(size) {
  const newSquare = document.createElement("div");

  newSquare.style.width = `calc(100% / ${size})`;
  newSquare.style.height = `calc(100% / ${size})`;

  newSquare.classList.add("square");
  etchASketch.append(newSquare);

  newSquare.addEventListener("mousedown", function () {
    moved = true;
    setColor(this);
  });

  newSquare.addEventListener("mouseover", function () {
    if (moved) {
      setColor(this);
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

clearButton.addEventListener("click", function () {
  opacity = 0.1;
  resizeSquare();
});

rangeSlider.addEventListener("change", resizeSquare);
rangeSlider.addEventListener("mousemove", resizeSquare);

colorButton.addEventListener("click", function () {
  changeMode(this);
});

eraserButton.addEventListener("click", function () {
  changeMode(this);
});

rainbowButton.addEventListener("click", function () {
  changeMode(this);
});

darkeningButton.addEventListener("click", function () {
  changeMode(this);
});
