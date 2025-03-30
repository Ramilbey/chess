function createNumbers() {
    let container = document.querySelector(".num-cont");

    // Add numbers (1-8) on the left side
    for (let i = 0; i < 8; i++) {
        let num = document.createElement("div");
        num.classList.add("chess-number", "left-numbers");
        num.textContent = 8 - i;
        num.style.top = `${(i * 500) / 8 + 65}px`; // Adjusted for proper placement
        container.appendChild(num);
    }

    // Add letters (A-H) at the bottom
    for (let i = 0; i < 8; i++) {
        let letter = document.createElement("div");
        letter.classList.add("chess-number", "bottom-letters");
        letter.textContent = String.fromCharCode(65 + i); // A to H
        letter.style.left = `${(i * 500) / 8 + 70}px`; // Adjusted for proper placement
        container.appendChild(letter);
    }
}

// Call function to generate the numbers and letters
createNumbers();

function createBlock() {
    let blockCont = document.querySelector(".js-inside-cont")

    for(let i = 0)
}