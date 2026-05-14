const guestInput = document.getElementById('guestInput');
const addBtn = document.getElementById('addBtn');
const guestList = document.getElementById('guestList');

// Função principal para adicionar convidado
function addGuest() {
    const name = guestInput.value.trim(); // Dica: Evita strings vazias

    if (name === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    const li = document.createElement('li');

    li.innerHTML = `
        <span class="guest-name">${name}</span>
        <div class="actions">
            <button class="btn-done">Concluir</button>
            <button class="btn-edit">Editar</button>
            <button class="btn-delete">Excluir</button>
        </div>
    `;

    // Eventos dos botões internos
    const nameSpan = li.querySelector('.guest-name');
    const doneBtn = li.querySelector('.btn-done');
    const editBtn = li.querySelector('.btn-edit');
    const deleteBtn = li.querySelector('.btn-delete');

    // Concluir (Toggle de classe)
    doneBtn.addEventListener('click', () => {
        nameSpan.classList.toggle('concluido');
    });

    // Editar (Uso de Prompt)
    editBtn.addEventListener('click', () => {
        const newName = prompt("Editar nome do VIP:", nameSpan.innerText);
        if (newName && newName.trim() !== "") {
            nameSpan.innerText = newName.trim();
        }
    });

    // Excluir (Remove o elemento do DOM)
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    // Adiciona o item à lista e limpa o input
    guestList.appendChild(li);
    guestInput.value = "";
    guestInput.focus();
}

// Escuta o clique e a tecla Enter
addBtn.addEventListener('click', addGuest);
guestInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addGuest();
});