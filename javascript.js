
// create page structure
const setup = document.querySelector("#setup");
const container = document.querySelector("#container");
const footer = document.querySelector('#footer');


// setup
const headText = document.createElement('h3');
headText.innerHTML = "HELLO!";
setup.appendChild(headText);

// submit button
const submitButton = document.createElement('button');
submitButton.setAttribute('id', 'submit');
submitButton.innerHTML = "SUBMIT!";
setup.appendChild(submitButton);

// reset button
const resetButton = document.createElement('button');
resetButton.setAttribute('id', 'reset');
resetButton.innerHTML = "RESET!";
resetButton.addEventListener('click', resetGrid);
setup.appendChild(resetButton);

// create grid
let size = 16; // default size!

for (let i = 0; i < size; i++) {
    console.log('creating rows...', i);
    const rowContainer = document.createElement('div');
    rowContainer.setAttribute('class', 'row');
    container.appendChild(rowContainer)

    for (let j = 0; j < size; j++) {
        console.log('creating cols...', j);


        const div = document.createElement('div');
        div.setAttribute('id', 'theDiv');
        div.addEventListener("mouseenter", function(e) {
            e.target.style.background = "blue";
        });
        rowContainer.appendChild(div);
    }
    
}

//reset grid
function resetGrid() {
    const squares = document.querySelectorAll('#theDiv');
    squares.forEach((square) => {
        square.style.background = "white";
    });
    
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



