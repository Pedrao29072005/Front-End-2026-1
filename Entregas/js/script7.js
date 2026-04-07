function rolaDado() {
    return Math.floor(Math.random() * 6) + 1;
}

function gera() {
    const numero = rolaDado();
    document.getElementById('numero').innerText = numero;
}