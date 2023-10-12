const valor = document.getElementById("value");
const counter = document.getElementById("counter");
const game = document.getElementById("game");
const clear = document.getElementById("clear");
const eraser = document.getElementById("Eraser");
const buttoncolor =  document.getElementById("buttoncolor");
const colorpicker = document.getElementById("colorpicker");
const raimbowmode = document.getElementById("raimbowmode");

let isEraserMode = false; 

function createGrid(gridSize) {
    valor.textContent = `${gridSize} x ${gridSize}`;
    game.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    game.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        game.appendChild(square);

        square.addEventListener("mousedown", () => {
            isMouseDown = true;
            if (isEraserMode) {
                square.style.backgroundColor = "white";
            } else {
                square.style.backgroundColor = `${colorpicker.value}`;
            }
        });
        
        square.addEventListener("mouseover", () => {
            if (isMouseDown) {
                if (isEraserMode) {
                    square.style.backgroundColor = "white";
                } else {
                    square.style.backgroundColor = `${colorpicker.value}`;
                }
            }
        });
        
        square.addEventListener("mouseup", () => {
            isMouseDown = false;
        });
        clear.addEventListener("click", () => {
            square.style.backgroundColor = "white";
        });
    }
}

window.onload = function() {
    createGrid(16);
};

counter.addEventListener("input", () => {
    const gridSize = counter.value;
    game.innerHTML = '';
    createGrid(gridSize);
});

eraser.addEventListener("click", () => {
    eraser.style.backgroundColor = "#333333";
    eraser.style.color = "white";
    raimbowmode.style.backgroundColor = "white"
    raimbowmode.style.color = "#333333"
    buttoncolor.style.backgroundColor = "white";
    buttoncolor.style.color = "#333333";
    

    isEraserMode = true;
});
buttoncolor.addEventListener("click", () => {
    eraser.style.backgroundColor = "white";
    eraser.style.color = "#333333";
    buttoncolor.style.backgroundColor = "#333333";
    buttoncolor.style.color = "white";
    raimbowmode.style.backgroundColor = "white"
    raimbowmode.style.color = "#333333"
    isEraserMode = false;
})
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

raimbowmode.addEventListener("click", () => {
    raimbowmode.style.backgroundColor= "#333333";
    raimbowmode.style.color = "white"
    eraser.style.backgroundColor = "white";
    eraser.style.color = "#333333";
    buttoncolor.style.backgroundColor = "white";
    buttoncolor.style.color = "#333333";


    isEraserMode = false;

    rainbowInterval = setInterval(() => {
        colorpicker.value = getRandomColor(); 
    }, 1); 
});

buttoncolor.addEventListener("click", () => {
    eraser.style.backgroundColor = "white";
    eraser.style.color = "#333333";
    buttoncolor.style.backgroundColor = "#333333";
    buttoncolor.style.color = "white";

    isEraserMode = false; 

    clearInterval(rainbowInterval); 
});