import './moves.js'
import './details/piece.js'
import { handleSquareClick } from './moves.js';
import './details/positon.js'
import './details/effect.js'


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
createNumbers()

export function createBlock() {
    let blockCont = document.querySelector(".js-inside-cont")

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let square = document.createElement("div")
            let columnLetter = String.fromCharCode(65 + j)
            let rowNumber = 8 - i;
            let position = columnLetter + rowNumber
            square.id = position;
            console.log(square.id)

            square.addEventListener('click', () => {
                handleSquareClick(position)
            })
     
            if ((i + j) % 2 === 0 ) {
                square.style.backgroundColor = "white"
            } else {
                square.style.backgroundColor = "black"
            }
            square.style.width = "12.5%"
            square.style.height = "12.5%"
            square.style.float = "left"
            
            blockCont.appendChild(square)  
        }
    }
}
createBlock()



