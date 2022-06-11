const container = document.querySelector("#container");




for (let i = 0; i < 10; i++) {
    console.log('creating rows...', i);
    const rowContainer = document.createElement('div');
    rowContainer.setAttribute('class', 'row');
    container.appendChild(rowContainer)

    for (let j = 0; j < 10; j++) {
        console.log('creating cols...', j);


        const div = document.createElement('div');
        div.setAttribute('id', 'theDiv');
        rowContainer.appendChild(div);
    }
    
}

