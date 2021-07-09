window.onload = function() {
    //Global
    const linePalette = document.querySelector('#color-palette'); //div da paleta de cores
    const arrayOfColors = ['black', 'red', 'orange', 'green']; //array de cores
    let getColor = document.getElementsByClassName('color')


    //Requisito 2 - Cria paleta de quatro cores distintas
    //Requisito 3 - Adiciona a cor preta como a primeira cor da paleta através da ordem do arrayOfColors 
    function createColorPalette() {
        for (let index = 0; index < 4; index += 1) {
            const line = document.createElement('div');
            line.classList.add('color');
            line.style.backgroundColor = arrayOfColors[index];
            linePalette.appendChild(line);
        }
    }
    createColorPalette();


    //Requisito 4 - Cria quadro de pixels com 25 pixels
    //Requisito 5 - Estilo dos quadros pixel

    function createPixelBoard(value) {
        const pixelBoardArea = document.querySelector('#pixel-board');
        for (let index = 0; index < value; index += 1) {
            const pixelItem = document.createElement('div');
            pixelItem.className = 'pixel';
            pixelItem.style.width = '40px';
            pixelItem.style.height = '40px';
            pixelItem.style.border = '1px solid black';
            pixelItem.style.backgroundColor = 'white';
            pixelBoardArea.appendChild(pixelItem);
        }
    }
    createPixelBoard(5 * 5);

    // Requisito 6 - Adiciona a classe selected a cor preta - O querySelector trás o primeiro elemento com a classe .color. A partir dele adiciono a classe .selected.

    function setFirstColorBlack() {
        getColor[0].classList.add('selected');
    }
    setFirstColorBlack()


    //Requisito 7

    function changePalette(event) {
        for (let i = 0; i < getColor.length; i += 1) {
            getColor[i].classList.remove('selected');
            event.target.classList.add('selected');
            getColor[i] = event.target;
        }
    }

    function clickColor() {
        for (const arrayOfColors of getColor) {
            arrayOfColors.addEventListener('click', changePalette);
        }
    }
    clickColor();

    function pickPixelColor() {
        let getPixel = document.querySelectorAll('#color-palette .color');
        for (let index = 0; index < getPixel.length; index += 1) {
            getPixel[index].addEventListener('click', (event) => {
                document.querySelector('.selected').classList.remove('selected');
                event.target.classList.add('selected');
            });
        }
    }
    pickPixelColor()


    function paintPixelBoard() {
        const paint = function(event) {
            const click = event;
            const pickColor = document.querySelector('.selected').style.backgroundColor;
            if (event.target.className === 'pixel') {
                click.target.style.backgroundColor = pickColor;
            }
        }
        document.querySelector('#pixel-board').addEventListener('click', paint);
    }
    paintPixelBoard()


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