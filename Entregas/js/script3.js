const transactionList = document.getElementById('transaction-list');
const balanceDisplay = document.getElementById('balance');
let transactions = [];

function updateBalance() {
    // Aqui usamos o reduce para somar tudo (Lógica pura!)
    const total = transactions.reduce((acc, item) => acc + item.amount, 0);
    balanceDisplay.innerText = `R$ ${total.toFixed(2)}`;
}

function addTransaction() {
    const desc = document.getElementById('desc').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (desc === '' || isNaN(amount)) return alert("Preenche direito aí!");

    const transaction = { id: Date.now(), desc, amount };
    transactions.push(transaction);

    // Criando o elemento na tela (DOM)
    const li = document.createElement('li');
    li.innerHTML = `${transaction.desc} <span>${transaction.amount > 0 ? '+' : ''}${transaction.amount}</span>`;
    li.style.borderLeft = transaction.amount > 0 ? "4px solid #10b981" : "4px solid #ef4444";
    
    transactionList.appendChild(li);
    updateBalance();

    // Limpa os inputs
    document.getElementById('desc').value = '';
    document.getElementById('amount').value = '';
}