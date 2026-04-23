function revelar(){
    // Dados do jogador Vinícius Júnior
    const jogador = {
        foto: "_vinicius_junior.png", // Imagem real do jogador
        nome: "Vinícius Júnior",
        rank: "10",
        dataNas: "12 de julho de 2000",
        altura: "1,76 m",
        posicao: "Ponta-Esquerda"
    };

    // 1. ALTERAR SRC DA IMAGEM PRINCIPAL
    const img = document.querySelector(".card-img-top");
    if (img) {
        img.src = jogador.foto;
        img.alt = jogador.nome;
    }

    // 2. SUBSTITUIR CONTEÚDO DOS <span> PELOS DADOS REAIS
    const elNome = document.querySelector("#Nome span.placeholder");
    const elRank = document.getElementById("Rank");
    const elData = document.getElementById("Data_Nas");
    const elAltura = document.getElementById("Alutra");
    const elPosicao = document.getElementById("Posição ");

    if (elNome) elNome.textContent = jogador.nome;
    if (elRank) elRank.textContent = jogador.rank;
    if (elData) elData.textContent = jogador.dataNas;
    if (elAltura) elAltura.textContent = jogador.altura;
    if (elPosicao) elPosicao.textContent = jogador.posicao;

    // 3 & 4. REMOVER CLASSES DE PLACEHOLDER E APLICAR ESTILIZAÇÃO FINAL
    
    // Remover .placeholder de todos os <span>
    document.querySelectorAll(".placeholder").forEach(el => {
        el.classList.remove("placeholder");
    });

    // Remover .placeholder-glow dos containers
    document.querySelectorAll(".placeholder-glow").forEach(el => {
        el.classList.remove("placeholder-glow");
    });

    // Aplicar .card-text para finalizar a estilização
    const pCard = document.querySelector(".card-body p");
    if (pCard && !pCard.classList.contains("card-text")) {
        pCard.classList.add("card-text");
    }
}