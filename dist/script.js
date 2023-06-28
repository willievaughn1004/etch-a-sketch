// Variables

const etchASketch = document.querySelector(".etch-a-sketch");

const colorButton = document.querySelector(".color-mode");
const rainbowButton = document.querySelector(".rainbow-mode");
const eraserButton = document.querySelector(".eraser");
const clearButton = document.querySelector(".clear");
const darkeningButton = document.querySelector(".darkening-mode");

const rangeDisplay = document.querySelector(".range-display");
const rangeSlider = document.querySelector(".range-slider");
const colorInput = document.querySelector(".color-input");

let moved = false;
let eraserMode = false;
let colorMode = true;
let rainbowMode = false;
let darkeningMode = false;
let opacity = 0.1;

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
    moved = true;

    if (colorMode) {
      newSquare.style.backgroundColor = `${colorInput.value}`;
    }

    if (eraserMode) {
      newSquare.style.backgroundColor = `white`;
    }

    if (rainbowMode) {
      const randomR = Math.floor(Math.random() * 256);
      const randomG = Math.floor(Math.random() * 256);
      const randomB = Math.floor(Math.random() * 256);
      newSquare.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }

    if (darkeningMode) {
      newSquare.style.opacity = `${opacity}`;
      newSquare.style.backgroundColor = `${colorInput.value}`;

      if (opacity < 1) {
        opacity += 0.1;
        console.log(opacity);
      }
    }
  });

  newSquare.addEventListener("mouseover", function () {
    if (moved) {
      if (colorMode) {
        newSquare.style.backgroundColor = `${colorInput.value}`;
      }

      if (eraserMode) {
        newSquare.style.backgroundColor = `white`;
      }

      if (rainbowMode) {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        newSquare.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
      }

      if (darkeningMode) {
        newSquare.style.opacity = `${opacity}`;
        newSquare.style.backgroundColor = `${colorInput.value}`;

        if (opacity < 1) {
          opacity += 0.1;
          console.log(opacity);
        }
      }
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
  colorMode = true;
  eraserMode = false;
  rainbowMode = false;
  darkeningMode = false;
  opacity = 0.1;
});

eraserButton.addEventListener("click", function () {
  colorMode = false;
  eraserMode = true;
  rainbowMode = false;
  darkeningMode = false;
  opacity = 0.1;
});

rainbowButton.addEventListener("click", function () {
  colorMode = false;
  eraserMode = false;
  rainbowMode = true;
  darkeningMode = false;
  opacity = 0.1;
});

darkeningButton.addEventListener("click", function () {
  colorMode = false;
  eraserMode = false;
  rainbowMode = false;
  darkeningMode = true;
  opacity = 0.1;
});
