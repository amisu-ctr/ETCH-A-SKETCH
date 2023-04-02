document.addEventListener("DOMContentLoaded", function() {
    createBoard(32)
    getSize()
    console.log('come')
})

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns =  `repeat(${size}, 1fr)`; //set grid template for board which is the parent
    board.style.gridTemplateRows =  `repeat(${size}, 1fr)`; // same here

    let numDivs = size * size; // 

    //
    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement("div"); //create div element
        div.style.backgroundColor = "yellow"  // background color of element created
        board.insertAdjacentElement("beforeend", div) // insert created element on our board

    }
}

function getSize() {
    let input = prompt("What will be the size of the boardd")
}


