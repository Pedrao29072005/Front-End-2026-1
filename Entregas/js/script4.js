let timeLeft = 25 * 60; // 25 minutos em segundos
let timerId = null;

const display = document.getElementById('timer');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    // Formatando para sempre ter dois dígitos (ex: 05:09)
    display.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startInterval() {
    // Safety check: se já tiver um timer rodando, não faz nada
    if (timerId !== null) return;

    timerId = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft === 0) {
            clearInterval(timerId);
            timerId = null;
            alert("Tempo esgotado! Hora de um descanso.");
        }
    }, 1000);
}

function pauseInterval() {
    clearInterval(timerId);
    timerId = null; // Liberamos o ID para poder dar start de novo
}

function resetInterval() {
    pauseInterval();
    timeLeft = 25 * 60;
    updateDisplay();
}

// Inicia o display zerado corretamente
updateDisplay();