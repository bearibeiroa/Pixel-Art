window.onload = function() {

    function createColorPalette() {
        const linePalette = document.querySelector('#color-palette');
        let arrayOfColors = ['black', 'red', 'orange', 'green'];
        for (let index = 0; index < 4; index += 1) {
            const line = document.createElement('div');
            line.classList.add('color');
            line.style.backgroundColor = arrayOfColors[index];
            linePalette.appendChild(line);
        }
    }
    createColorPalette();

    let firstColor = document.querySelector('.color');
    firstColor.classList.add('selected');

    function createPixelBoard(value) {
        const pixelBoardArea = document.querySelector('#pixel-board');
        for (let i = 0; i < value; i += 1) {
            const pixelItem = document.createElement('div');
            pixelItem.className = 'pixel';
            pixelBoardArea.appendChild(pixelItem);
        }
    }
    createPixelBoard(5 * 5);


}