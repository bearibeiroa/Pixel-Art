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

    function createPixelBoard() {
        const pixelBoardArea = document.querySelector('#pixel-board');
        for (let index = 0; index < 25; index += 1) {
            const pixelItem = document.createElement('div');
            pixelItem.className = 'pixel';
            pixelItem.style.width = '40px';
            pixelItem.style.height = '40px';
            pixelItem.style.border = '1px solid black';
            pixelItem.style.backgroundColor = 'white';
            pixelBoardArea.appendChild(pixelItem);
        }
        const firstDiv = document.querySelector('.pixel');
        firstDiv.classList.add('quadradaum');

    }
    createPixelBoard();

    // Requisito 6 - Adiciona a classe selected a cor preta - O getElementsByClassName (linha 5) trás os elementos com a classe .color. A partir dele adiciono a classe .selected na posição 0.

    function setFirstColorBlack() {
        getColor[0].classList.add('selected');
    }
    setFirstColorBlack()


    //Requisito 7 
    //Usei o exercício de fixação do 5.3 como referência.

    function changeSelected(event) {
        const selectedElement = document.querySelector('.selected');
        selectedElement.classList.remove('selected');
        event.target.classList.add('selected');
    }
    const divona = document.querySelector('#color-palette');
    divona.addEventListener('click', changeSelected);

    //Requisito 8 

    function paintPixelBoard(event) {
        const corSelecionada = document.querySelector('.selected');
        event.target.style.backgroundColor = corSelecionada.style.backgroundColor
    }
    const paiDosQuadradaum = document.querySelector('#pixel-board');
    paiDosQuadradaum.addEventListener('click', paintPixelBoard);


    //Requisito 9
    function
    clearBoardColors() {
        const pixel = document.querySelectorAll('.pixel');
        const button = document.querySelector('#clear-board');
        button.addEventListener('click', function() {
            for (index = 0; index < pixel.length; index += 1) {
                pixel[index].style.backgroundColor = 'white';
            }
        });
    }
    clearBoardColors()
}