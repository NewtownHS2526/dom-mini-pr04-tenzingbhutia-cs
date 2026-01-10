console.log("Script Running");

// Create a helper function that moves a penguin across the grid
// The function should accept a penguin element and a column position
// Only allow movement while the column is less than or equal to 6
function movePenguin(penguin, column) {
  if (column <= 6) {
    penguin.style.transform = `translateX(${(column - 1) * 100}px)`;
  }
}

// Create position variables for each penguin and set them all to 1
let tuxPosition = 1;
let daisyPosition = 1;
let rockyPosition = 1;

// Query selectors for all buttons and penguins go here
const tuxButton = document.querySelector("#tux-button");
const daisyButton = document.querySelector("#daisy-button");
const rockyButton = document.querySelector("#rocky-button");

const tuxPenguin = document.querySelector("#tux-penguin");
const daisyPenguin = document.querySelector("#daisy-penguin");
const rockyPenguin = document.querySelector("#rocky-penguin");

const winnerDiv = document.querySelector("#winner");


// Write the function that moves Tux forward
// Increase the tux position
// Call the helper function to update the penguin position
// Call the winner check function
function moveTux() {
  tuxPosition++;
  movePenguin(tuxPenguin, tuxPosition);
  checkWinner("Tux", tuxPosition);
}

// Write the function that moves Daisy forward
function moveDaisy() {
  daisyPosition++;
  movePenguin(daisyPenguin, daisyPosition);
  checkWinner("Daisy", daisyPosition);
}

// Write the function that moves Rocky forward
function moveRocky() {
  rockyPosition++;
  movePenguin(rockyPenguin, rockyPosition);
  checkWinner("Rocky", rockyPosition);
}

// Write a function that checks if a penguin reached column 6
// If so, display the winner message (example: "Tux got the fish! 🐟")
// Disable all buttons when a winner is found
function checkWinner(name, position) {
  if (position >= 6) {
    winnerDiv.textContent = `${name} got the fish! 🐟`;
    tuxButton.disabled = true;
    daisyButton.disabled = true;
    rockyButton.disabled = true;
  }
}

// Add event listeners for each button
// Each button should trigger its own movement function
tuxButton.addEventListener("click", moveTux);
daisyButton.addEventListener("click", moveDaisy);
rockyButton.addEventListener("click", moveRocky);
