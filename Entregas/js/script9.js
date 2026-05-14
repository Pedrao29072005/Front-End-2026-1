document.getElementById("btnCalcular").addEventListener("click", function() {
    const packageValue = parseFloat(document.getElementById("package").value);
    const quantity = parseInt(document.getElementById("quantity").value);

    if (isNaN(quantity) || quantity <= 0) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }
    const custoBruto = packageValue * quantity;
    const taxaServico = custoBruto * 0.10;
    const totalComTaxa = custoBruto + taxaServico;
    let disconto = 0;
    if (quantity > 100) {
        disconto = totalComTaxa * 0.05;
    }
    const totalFinal = totalComTaxa - disconto;
    document.getElementById('resBruto').innerText = `R$ ${custoBruto.toFixed(2)}`;
    document.getElementById('resTaxa').innerText = `R$ ${taxaServico.toFixed(2)}`;
    document.getElementById('resDesconto').innerText = `- R$ ${disconto.toFixed(2)}`;
    document.getElementById('resTotal').innerText = `R$ ${totalFinal.toFixed(2)}`;
    document.getElementById('resultado').classList.remove('hidden');
});