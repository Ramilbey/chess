import { piece } from "../details/piece.js"

export let pieceHtml = '';
piece?.forEach((item) => {
    if (item.pawn_name) {
        pieceHtml += `
            <div class="pawn-block">
                <p class="js-text">${item.pawn_name}</p>
                <img src="${item.pawn_image}" class="image-piece"  onclick = "this.classList.toggle("nameOfPiece")">
            </div>
        `;
    }
});

document.querySelector('.js-blocks').innerHTML = pieceHtml;
