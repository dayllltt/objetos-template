//c/onst estudante = {
  //  nome: "Daylton",
 //   sobrenome: "Arau",
  //  numeroMatricula: "1234",
 //   notasSemestre:[3,10,5],
//}
//console.log (estudante)

//notação de ponto
//estudante.modulo = 1

//notação de colchetes
//estudante["modulo"]= 1

//console.log(estudante.nome)
//console.log(estudante["nome"])

//console.log(estudante.notasSemestre[1])
//console.log(estudante.modulo)

//const copiaEstudante = {
//    ...estudante,
//   nome: "Astrodev",
//    notasSemestre:[...estudante.notasSemestre, 9],
 //   modulo: estudante.modulo+1,
//}

const carrinho = {
    nome: "pessoadocarrinh",
    formaDePagamento: "pix",
    endereco: "BEM ali",
    compras: [{nome: "bacalhau", preço: 232.2, quantidade: 10}]
}

 
console.log(`Quantidade array:`, carrinho.compras.length)

const carrinhoPresente= {
    ...carrinho,
    nome: "pessoaSemCarrinh",
    formaDePagamento:"cartão presente",
}
console.log(carrinho)
console.log(carrinhoPresente)

