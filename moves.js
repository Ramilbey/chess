import { piece } from './details/piece.js'

const bishop = document.querySelector('.js-bishop')

export function handleSquareClick(position) {
    console.log("Clicked on:", position);

    const square = document.getElementById(position);
    // square.classList.toggle("selected")    

}
