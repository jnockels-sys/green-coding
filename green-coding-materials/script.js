const phrases = [
    "Aurea mediocritas.",
    "Tempus fugit.",
    "Lorem ipsum dolor sit amet.",
    "Lux et umbra."
];

function changeBackground() {
    const colors = ["#101010","#202020","#303030","#404040"];
    document.body.style.background = colors[Math.floor(Math.random()*colors.length)];
}

function generateMessage() {
    const box = document.getElementById("message-box");
    const phrase = phrases[Math.floor(Math.random()*phrases.length)];
    box.innerHTML = phrase;
}
