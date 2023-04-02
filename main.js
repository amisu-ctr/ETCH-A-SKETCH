let color = 'yellow'
let click = false;

document.addEventListener("DOMContentLoaded", function() {
    createBoard(16)// immeditely this function populates the board with a new 16by16 divs

    document.querySelector("body").addEventListener("click", function(e) {
        if(e.target.tagName != 'BUTTON') {
            click = !click;
            let draw = document.querySelector("#draw")
            if(click) {
                draw.innerHTML = "Now you Can Draw"
            }
            else {
                draw.innerHTML = "You're Not allowed to draw"
            }
        }
    })

    let selectBtn = document.querySelector("#popup")
    selectBtn.addEventListener('click' ,function() {
        let size = getSize();
        createBoard(size)
    })
    console.log('come')
})


// 1. SET THE grid styles for the GRID element  on the html which is the div with the class of Board
function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns =  `repeat(${size}, 1fr)`; //set grid template for board which is the parent based upon size parameter
    board.style.gridTemplateRows =  `repeat(${size}, 1fr)`; // which is going to be the input from user when it is called 

    let numDivs = size * size; // 

    // 1a. Create a div and append it to the grid board element upon each iteration
    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv) 
        board.insertAdjacentElement("beforeend", div) 
    }
}


// 2. get input from user through prompt
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


// 3. Depending on the button clicked setColor function sets the color variables value to its argument value from the onclick event on the html 
//the colorDiv function then styles the divs based on the color value from the setColor function with an if statement . its then attached to the mouseover event listener of each div created
// on the grid board
function colorDiv() {
    if(click) {
        if(color == 'random') {
            this.style.backgroundColor =  `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else {
            this.style.backgroundColor = 'black'
        }
    }
}

//resets value of color 
function setColor(colorChoice) {
    color = colorChoice;
}


function resetBoard() {
    let divs = document.querySelectorAll("div")
    divs.forEach(element => { element.style.backgroundColor= 'white'
        
    });
}



