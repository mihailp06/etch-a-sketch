const container = document.querySelector('.container');

function createGrid(cells) {
    container.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${cells}, 1fr)`;
    for (let i = 0; i < cells *  cells; i++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'green';
        })
        container.appendChild(div);
    }
}

createGrid(16);


const button = document.querySelector('button');
button.addEventListener('click', () => {
    container.innerHTML = '';
    let userInput = parseInt(prompt('Number of squares:'));
    createGrid(userInput);
});