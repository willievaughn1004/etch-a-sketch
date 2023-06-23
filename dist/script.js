// const newSquare = document.createElement("div");
const newSquare1 = document.createElement("div");
// newSquare.style.cssText = "background-color: black; height: 10%; width: 10%;";
newSquare1.style.cssText = "background-color: black; height: 10%; width: 10%;";
const etchASketch = document.querySelector(".etch-a-sketch");

// etchASketch.append(newSquare);

// for (let i = 0; i < 5; i++) {
//   etchASketch.append(newSquare);
//   etchASketch.append(newSquare1);
// }

// etchASketch.append(newSquare);
// etchASketch.append(newSquare);

function makeSquare() {
  const newSquare = document.createElement("div");
  newSquare.style.cssText = "background-color: black; height: 10%; width: 10%;";

  etchASketch.append(newSquare);
}

function makeSquares(squares) {
  for (let i = squares; i > 0; i--) {
    makeSquare()
  }
}

makeSquares(50)
