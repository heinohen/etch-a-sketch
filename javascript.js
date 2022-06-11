
// create page structure
const setup = document.querySelector("#setup");
const container = document.querySelector("#container");
const footer = document.querySelector('#footer');


// setup
const headText = document.createElement('h3');
headText.innerHTML = "HELLO!";
setup.appendChild(headText);

// submit button
const resizeButton = document.createElement('button');
resizeButton.setAttribute('id', 'submit');
resizeButton.innerHTML = "RESIZE!";
resizeButton.addEventListener('click', resizeGrid);
setup.appendChild(resizeButton);

// reset button
const resetButton = document.createElement('button');
resetButton.setAttribute('id', 'reset');
resetButton.innerHTML = "RESET!";
resetButton.addEventListener('click', resetGrid);
setup.appendChild(resetButton);

// create grid
let size = 16; // default size!
creationOfGrid(size);

function creationOfGrid(size) {
    for (let i = 0; i < size; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.setAttribute('class', 'row');
        rowContainer.setAttribute('id','rowID');
        container.appendChild(rowContainer)
    
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.setAttribute('id', 'theDiv');
            div.addEventListener("mouseenter", function(e) {
                e.target.style.background = "blue";
            });
            rowContainer.appendChild(div);
        }   
    }
}


//reset grid
function resetGrid() {
    const squares = document.querySelectorAll('#theDiv');
    squares.forEach((square) => {
        square.style.background = "white";
    });
    
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
        creationOfGrid(16);
    } else {
        creationOfGrid(answer);
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



