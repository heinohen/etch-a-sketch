
// create page structure
const setup = document.querySelector("#setup");
const mainContainer = document.querySelector("#mainContainer");
const container = document.createElement('div');
container.setAttribute('id', 'grid')
container.setAttribute('class','grid')
mainContainer.appendChild(container);
const controls = document.querySelector('#conts')
const footer = document.querySelector('#footer');


// setup
const headText = document.createElement('h3');
headText.innerHTML = "ETCH - A - SKETCH!";
setup.appendChild(headText);

// submit button
const resizeButton = document.createElement('button');
resizeButton.setAttribute('id', 'submit');
resizeButton.innerHTML = "RESIZE!";
resizeButton.addEventListener('click', resizeGrid);
controls.appendChild(resizeButton);

// rainbow button

const rainbowButton = document.createElement('button');
rainbowButton.setAttribute('id', 'rainbow');
rainbowButton.innerHTML = "RaInBoW!"
rainbowButton.addEventListener('click', rainbowBrush);
controls.appendChild(rainbowButton);

// reset button
const resetButton = document.createElement('button');
resetButton.setAttribute('id', 'reset');
resetButton.innerHTML = "RESET!";
resetButton.addEventListener('click', resetGrid);
controls.appendChild(resetButton);



// create grid
let size = 16; // default size!
creationOfGrid(size, "blue");

function creationOfGrid(size, choice) {
    for (let i = 0; i < size; i++) {
        const colorlist = [
            "red",
            "green",
            "blue",
            "yellow",
            "black",
            "brown",
            "cyan"
        ]
        const rowContainer = document.createElement('div');
        rowContainer.setAttribute('class', 'row');
        rowContainer.setAttribute('id','rowID');
        container.appendChild(rowContainer)
    
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.setAttribute('id', 'theDiv');
            if (choice == "rainbow") {
                let rndm = randomNumber(colorlist.length)
                div.addEventListener("mouseenter", function(e) {
                    let tiil = colorlist[rndm];
                    e.target.style.background = tiil;
                });
            } else {
                div.addEventListener("mouseenter", function(e) {
                    e.target.style.background = choice;
                });
            }
            
            rowContainer.appendChild(div);
        }   
    }
}

//rainbow brush
function rainbowBrush() {
    removeAll()
    creationOfGrid(size, "rainbow");
}



function randomNumber(max) {
    return Math.floor(Math.random() * max);
}



//reset grid
function resetGrid() {
    removeAll()
    const squares = document.querySelectorAll('#theDiv');
    squares.forEach((square) => {
        square.style.background = "white";
    });
    creationOfGrid(size, "blue")
    
}

//helper function for resizeGrid, removes all elements in grid
function removeAll() {
    const childs = document.querySelectorAll('#rowID');
    childs.forEach((child) => {
        container.removeChild(child);
    });
}


//function of resize button

function resizeGrid() {
    removeAll();
    let answer = prompt("Give length of side. Maximum is 64. Minimum is 2. Default is 16.");

    if (isNaN(answer) || answer < 2 || answer > 64) {
        alert("you did not follow instructions! Resetting to default.")
        size = 16
        creationOfGrid(size, "blue");
    } else {
        size = answer
        creationOfGrid(size, "blue");
    }
}
    




// footer

const footerLegal = document.createElement('p');
footerLegal.innerHTML = "ⓒ heinohen 2022"
footer.appendChild(footerLegal);
const footerGitlin = document.createElement('img');
footerGitlin.setAttribute('id', 'gitLink');
footerGitlin.src = "./images/GitHub-Mark-32px.png";


footer.appendChild(footerGitlin);
document.getElementById('gitLink').onclick = function () {
    window.location = "https://github.com/heinohen";
}



