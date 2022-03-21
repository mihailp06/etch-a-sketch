const container = document.querySelector('.container');

function createGrid(cells) {
    for (let i = 0; i < cells; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        container.appendChild(div);
    }
}

createGrid(256);

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('mouseover', () => {
    cell.style.backgroundColor = 'green';
}));

const button = document.querySelector('button');
button.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
});