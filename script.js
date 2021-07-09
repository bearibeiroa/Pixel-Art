window.onload = function() {

    function createColorPalette() {
        const linePalette = document.querySelector('#color-palette');
        const arrayOfColors = ['black', 'red', 'orange', 'green'];
        for (let index = 0; index < 4; index += 1) {
            const line = document.createElement('div');
            line.classList.add('color');
            line.style.backgroundColor = arrayOfColors[index];
            linePalette.appendChild(line);
        }
    }
    createColorPalette();


    const firstColor = document.querySelector('.color');
    firstColor.classList.add('selected');


    function createPixelBoard(value) {
        const pixelBoardArea = document.querySelector('#pixel-board');
        for (let index = 0; index < value; index += 1) {
            const pixelItem = document.createElement('div');
            pixelItem.className = 'pixel';
            pixelBoardArea.appendChild(pixelItem);
        }
    }
    createPixelBoard(5 * 5);


    function pickColor(color) {
        console.log(color);
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('pixel')) {
                event.target.style.backgroundColor = `${color}`;
            }
        }, false);
    }
    pickColor('orange')

    function getPalleteColor() {
        const pallete = document.querySelector('#color-palette');
        const colors = document.querySelectorAll('.color');
        pallete.addEventListener('click', (event) => {
            colors.forEach((color) => {
                color.classList.remove('selected');
            });
            if (event.target.classList.contains('color')) {
                event.target.classList.add('selected');
                pickColor(event.target.classList[1]);
            } else {
                colors[0].classList.add('selected');
                pickColor('black');
            }
        });
    }
    getPalleteColor();

    function clearBoardColors() {
        const pixels = document.querySelectorAll('.pixel');
        const button = document.querySelector('#clear-board');
        button.addEventListener('click', () => {
            pixels.forEach((pixel) => {
                pixel.style.backgroundColor = 'white';
            });
        });
    }
    clearBoardColors();

}