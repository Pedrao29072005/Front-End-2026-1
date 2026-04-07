function troca(params) {
    const lampada = document.getElementById('lampada');
    const body = document.body;
    if (lampada.src.match('desligada')) {
        lampada.src = './img/ligada.png';
        body.style.backgroundColor = "#555";
    } else {
        lampada.src = './img/desligada.png';
        body.style.backgroundColor = "#222";
    }
}