const btnSi = document.querySelector("#btn-si");
const btnNo = document.querySelector("#btn-no");
const gifContainer = document.querySelector("#gif-container");
const question = document.querySelector("#question");
const message = document.querySelector("#message");

let clickCount = 0;

// Lista de mensajes para el botón "NO"
const noTexts = [
    "¿Estás segura? 😥",
    "Piénsalo bien... 🥺",
    "¡Serás mía a las buenas o a las malas! 😈",
    "¡Anda, di que sí! ❤️",
    "Me vas a romper el corazón... 💔"
];

const gifs = [
    "https://media.tenor.com/18148463711766725559/peach-cat-crying.gif", // Triste
    "https://media.tenor.com/21443416/white-cat-cats.gif", // Malvado
    "https://media.tenor.com/11000679121036284802/khanov1.gif" // Final feliz
];

btnNo.addEventListener("mouseenter", () => {
    // Mover aleatoriamente
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    
    btnNo.style.position = "absolute";
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;

    // Cambiar texto del botón
    btnNo.innerText = noTexts[clickCount % noTexts.length];
    
    // Hacer crecer el botón SÍ
    const currentSize = parseFloat(window.getComputedStyle(btnSi).fontSize);
    btnSi.style.fontSize = `${currentSize + 5}px`;
    btnSi.style.padding = `${parseFloat(btnSi.style.padding || 12) + 2}px ${parseFloat(btnSi.style.paddingLeft || 25) + 5}px`;
    
    clickCount++;
});

btnSi.addEventListener("click", () => {
    question.innerText = "¡Heheheh, lo sabía! ❤️";
    message.innerText = "¡Nos vemos el 14! 🥰";
    gifContainer.innerHTML = `<img src="${gifs[2]}" alt="Happy" width="100%">`;
    btnNo.style.display = "none";
    btnSi.style.fontSize = "1.5rem";
});