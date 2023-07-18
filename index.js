const button = document.querySelector('.button');
const color = document.querySelector('.color');

const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function randomNum() {
    return Math.floor(Math.random() * hex.length);
};

function randomHex() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomNum()];
    };

    return hexColor;
};

button.addEventListener('click', () => {
    let hexColor = randomHex();
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});
