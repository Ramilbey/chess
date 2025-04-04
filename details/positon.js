import { piece } from "../details/piece.js"



piece?.forEach((item) => {
    let smth  = `  <p class="js-text">${item.name}</p>
    <img src="${item.image}">`
})