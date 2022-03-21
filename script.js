const container = document.querySelector('.container');

function createGrid(cells) {
    for (let i = 0; i < cells; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
    }
}

createGrid(256);