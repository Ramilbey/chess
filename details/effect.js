import {pieceHtml} from "./positon.js"

document.querySelector('.js-blocks').innerHTML = pieceHtml;

const nameDisplay = document.createElement('div')
nameDisplay.classList.add('.selected-name')
document.body.appendChild(nameDisplay);
document.querySelectorAll('.image-piece').forEach((img) => {
    img.addEventListener('click', () => {
        img.classList.toggle('selected');
      
        const name = img.previousElementSibling?.textContent;

        if (img.classList.contains('selected')) {
            nameDisplay.textContent =  name;
        } else {
            nameDisplay.textContent = '';
        }
    });
});