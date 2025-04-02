// Create numbers and letters on the chessboard
function createNumbers() {
    let container = document.querySelector(".num-cont");

    // Add numbers (1-8) on the left side
    for (let i = 0; i < 8; i++) {
        let num = document.createElement("div");
        num.classList.add("chess-number", "left-numbers");
        num.textContent = 8 - i;
        num.style.top = `${(i * 520) / 8 + 65}px`; // Adjusted for proper placement
        container.appendChild(num);
    }

    // Add letters (A-H) at the bottom
    for (let i = 0; i < 8; i++) {
        let letter = document.createElement("div");
        letter.classList.add("chess-number", "bottom-letters");
        letter.textContent = String.fromCharCode(65 + i); // A to H
        letter.style.left = `${(i * 520) / 8 + 62}px`; // Adjusted for proper placement
        container.appendChild(letter);
    }
}

// Call function to generate the numbers and letters
createNumbers();

// Create the chessboard blocks (squares)
function createBlock() {
    let blockCont = document.querySelector(".js-inside-cont");

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let square = document.createElement("div");
            square.classList.add('chess-square');

            // Alternate colors for the squares
            if ((i + j) % 2 === 0) {
                square.style.backgroundColor = "white";
            } else {
                square.style.backgroundColor = "black";
            }

            blockCont.appendChild(square);
        }
    }
}
createBlock();

// Define pieces
import { piece } from './details/piece';

let pieceHTML = "";
piece.forEach((pieces) => {
    pieceHTML += `
    <p class="js-text">${pieces.name}</p>
    <img src="${pieces.image}" alt="${pieces.name}" class="bishop-image js-bishop">
    `;
});
document.querySelector(".blocks").innerHTML = pieceHTML;

function placePieces() {
    const pieceContainer = document.querySelector(".js-inside-cont");
    piece.forEach((pieces) => {
        const pieceElement = document.createElement("div");
        pieceElement.classList.add('chess-piece');
        pieceElement.innerHTML = `
            <p class="js-text">${pieces.name}</p>
            <img src="${pieces.image}" alt="${pieces.name}" class="bishop-image js-bishop">
        `;
        // Find the square by piece position (example: "a1")
        const position = pieces.id; // "a1", "b2", etc.
        const row = 8 - parseInt(position[1]); // Rows are 1 to 8, so reverse for grid
        const col = position.charCodeAt(0) - 97; // Converts 'a' to 'h' to 0 to 7
        pieceElement.style.gridRow = row + 1;
        pieceElement.style.gridColumn = col + 1;
        
        pieceContainer.appendChild(pieceElement);
    });
}

placePieces();
