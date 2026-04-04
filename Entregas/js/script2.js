const produtos = {"123": {"nome": "Suco de Tamarindo", "preco": 10.5},
		 		  "456": {"nome": "Guarana Jesus", "preco": 20.5},
		          "789": {"nome": "Barreado de pato branco", "preco": 1},
		          "147": {"nome": "Goiaba", "preco": 1.5},
				};
const audio = new Audio("bip.mp3");
let carrinho = [];

window.onload = () => {
	document.getElementById("cod").focus();
}
function addProduto(){
	const codElemento = document.getElementById("cod");
	const qtdElemento = document.getElementById("qtd");

	const codValue = codElemento.value;
	const qtdValue = qtdElemento.value;

	if(!produtos[codValue]){
		alert("Produto não cadastrado");
		return;
	}

	const produtoBase = produtos[codValue];

	const item = {
		nome: produtoBase.nome, 
		preco: produtoBase.preco,
		quantidade: qtdValue,
		subTot: produtoBase.preco * qtdValue
	};
	carrinho.push(item);
	audio.currentTime = 0;
	audio.play();
}
function atualizaTotal(){
	let total = 0;
	const list = document.getElementById("lista");
	carrinho.forEach((item, index) => {
		total += item.subTot;
		const li = document.createElement("li");
		li.className = "list-group-item";
		
		li.innerHTML = `<div>${item.nome}
		${item.quantidade} x ${item.preco} =
		${item.subTot} </div>`;

		lista.appendChild(li);
	});
	document.getElementById("total").innerText = `Total: R$ ${total}`;
}