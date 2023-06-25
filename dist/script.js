const etchASketch = document.querySelector(".etch-a-sketch");

function makeSquare(size) {
  let move = false;

  const newSquare = document.createElement("div");

  newSquare.style.width = `calc(100% / ${size})`;
  newSquare.style.height = `calc(100% / ${size})`;

  newSquare.classList.add("square");
  etchASketch.append(newSquare);

  newSquare.addEventListener("mousedown", function () {
    newSquare.style.backgroundColor = "white";
    moved = true;
  });

  newSquare.addEventListener("mousemove", function () {
    if (moved) {
      newSquare.style.backgroundColor = "white";
    }
  })

  newSquare.addEventListener("mouseup", function () {
    moved = false;
  });
  
}

function makeGrid(squares) {
  for (let i = 4500; i > 0; i--) {
    makeSquare(squares);
  }
}

makeGrid(30);
