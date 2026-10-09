let nome = prompt("qual o seu nome:")
let Numpedido = Number(prompt("qual o numero do pedido"))
const nomeLanchonete = "LancheTech"
let nomeProduto = Number("qual o nome do produto")
let preco = Number(prompt("qual o preço do pedido"))
let quantidade = Number(prompt("qual a quantidade:"))
const subtotal = preco * quantidade
let taxaEmbalagem = 2;

let estoqueIncial = 20;
let estoqueInicial - estoqueInicial - quantidade;
let statuspedido;

if (quantidade <= 0 && quantidade > estoqueIncial){
    statusPedido = false;
}else {
    statuspedido = true;
}
let valorTotalDesconto;
if (statuspedido == true && subtotal >= 100){
    valorTotalDesconto;
} else if (statuspedido == true && subtotal >= 50 && subtotal < 100){
    valorTotalDesconto
}else {
    console.log("nao ganha desconto");
    valorTotalDesconto = -subtotal;
}
   
if (statuspedido){
    valorTotal = subtotal - valorTotalDesconto + taxaEmbalagem;console.log("cliente: ", nome);
console.log("numero: ", numpedido);
console.log("produto: ", nimeProduto);
console.log("preço unitario: R$", preco);
console.log("quandtidade:", estoqueFinal);
console.log("valor total: R$", valorTotal.toFixed(2));
} else {
    console.log("Pedido recusado");
}
// exemplos
// let produtos = ~[] //array vazio
// produto = ["sanduiche",4, "Hamburguer",true, "coxinha", "suco"]
// let tamanho = produto.length // tamanho 4
// console.log(produto[2])
let pizza = {
    id: 1 
    sabor: "4 queojos",
    estoque: 10,
    tamanho: ["grande", "media","brotinho"]
}
