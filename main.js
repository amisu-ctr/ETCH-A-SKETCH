let color = 'black'

document.addEventListener("DOMContentLoaded", function() {
    let selectBtn = document.querySelector("#popup")
    selectBtn.addEventListener('click' ,function() {
        let size = getSize();
        createBoard(size)
    })
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
        div.addEventListener(('mouseover', () => {
            div.style.backgroundColor = "yellow" 
        })) // background color of element created
        board.insertAdjacentElement("beforeend", div) // insert created element on our board
    }
}

function getSize() {
    let input = prompt("What will be the size of the boardd")
    let message = document.querySelector(".message")
    if(input === '') {
        message.innerHTML = 'Please enter a number'
    } else if(input < 1) {
        message.innerHTML = 'Enter a number greater than 0'
    } else {
        message.innerHTML = 'Now you play'
        return input // returned input here not outside the if statement so that when
        // the condition is false this function doesnt return a size
    }
}



