import {pieceHtml} from "./positon.js"

document.querySelector('.js-blocks').innerHTML = pieceHtml;

const nameDisplay = document.createElement('div')
nameDisplay.classList.add('.selected-name')
document.body.appendChild(nameDisplay);
document.querySelector('.js-blocks').innerHTML = pieceHtml;

document.querySelectorAll('.image-piece').forEach((img) => {
    img.addEventListener('click', () => {
        const wrapper = img.parentElement; // .pawn-block
        const nameTag = wrapper.querySelector('.js-text');

        img.classList.toggle('selected');
        nameTag.classList.toggle('visible-name');
    });
});
