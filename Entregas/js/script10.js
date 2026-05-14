const btn = document.getElementById('analyzeBtn');
const panel = document.getElementById('panel');

// Mapeamento de IIN (Simulação baseada no primeiro dígito para Setor)
const Setores = {
    1: "Companhias Aéreas",
    2: "Companhias Aéreas / Outros",
    3: "Viagens e Entretenimento (Amex)",
    4: "Bancário e Financeiro (Visa)",
    5: "Bancário e Financeiro (Mastercard)",
    6: "Merchandising e Bancário",
    7: "Petróleo",
    8: "Telecomunicações",
    9: "Atribuição Nacional"
};

function validarLuhn(numero) {
    let sum = 0;
    let shouldDouble = false;
    
    // 1. Percorre de trás para frente (Inversão lógica)
    for (let i = numero.length - 1; i >= 0; i--) {
        let digit = parseInt(numero.charAt(i));

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9; // 2. Subtrai 9 se resultado > 9
        }

        sum += digit; // 3. Soma todos
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0; // Se divisível por 10, True
}

function identificarBandeira(numero) {
    if (/^4/.test(numero)) return "Visa";
    if (/^5[1-5]/.test(numero)) return "Mastercard";
    if (/^3[47]/.test(numero)) return "American Express";
    if (/^6(?:011|5)/.test(numero)) return "Discover";
    return "Desconhecida";
}

btn.addEventListener('click', () => {
    // Processamento: Remove espaços e pontos
    const rawValue = document.getElementById('card-number').value;
    const cleanNumber = rawValue.replace(/[\s.]/g, '');

    // Verificação de tamanho (13 a 16 dígitos)
    if (cleanNumber.length < 13 || cleanNumber.length > 16) {
        alert("O número deve conter entre 13 e 16 dígitos.");
        return;
    }

    const isValid = validarLuhn(cleanNumber);
    const iin = cleanNumber.substring(0, 8); // Pega os 8 primeiros dígitos conforme a ISO
    const primeiroDigito = cleanNumber.charAt(0);

    // Atualização da Interface
    panel.classList.remove('hidden');
    const badge = document.getElementById('statusBadge');
    
    badge.innerText = isValid ? "Válido" : "Inválido";
    badge.style.backgroundColor = isValid ? "var(--success)" : "var(--error)";

    document.getElementById('brand').innerText = identificarBandeira(cleanNumber);
    document.getElementById('sector').innerText = Setores[primeiroDigito] || "Outros";
    document.getElementById('iinCode').innerText = iin;
});