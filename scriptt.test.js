// Exercício 1: Cálculo de Média
// Função para somar 4 notas
function somarNotas(nota1, nota2, nota3, nota4) {
    return nota1 + nota2 + nota3 + nota4;
}

// FUnção calcula a média do aluno 
function calcularMedia(somaDasNotas, quantidadeDeNotas) {

    const media = somaDasNotas / quantidadeDeNotas;
    const status = media >= 6 ? "Aprovado" : "Reprovado";
    return {media, status};
}

//TESTE 1
describe("Exercício 1", function () {
    it("Deve calcular a soma correta de quatro notas", function(){
        const soma = somarNotas(7, 6, 6, 9);
        expect(soma).toBe(28);
    });

       //TESTE 2 
       it("Deve calcular a média correta e aprovar o aluno", function(){
        const soma = somarNotas(7, 6, 6, 9);
        const resultado = calcularMedia(soma, 4);
        expect(resultado.media).toBe(7);
        expect(resultado.status).toBe("Aprovado");
    });

    //TESTE 3
    it("Deve calcular a média correta e reprovar o aluno", function(){
        const soma = somarNotas (5, 4, 6, 5);
        const resultado = calcularMedia(soma, 4);
        expect(resultado.media).toBe(5);
        expect (resultado.status).toBe("Reprovado");
    });
});


//Exercício 2: Triplo do Número
//Função para Multiplica dois números
function multiplicar (a, b){
    return a * b;
}
//Função para calcular o triplo de um número
function calcularTriplo (valor) {
    return valor* 3;
}

//TESTE 1
describe("Exercício 2", function (){
    it("Deve calcular o triplo da multiplicação de dois números positivos", function(){
    const multiplicacao = multiplicar(2, 3);
    const triplo = calcularTriplo(multiplicacao);
    expect(triplo).toBe(18);
});

//TESTE 2
it("Deve calcular o triplo da multiplicação de dois números negativos", function(){
    const multiplicacao = multiplicar (-2, -3);
    const triplo = calcularTriplo(multiplicacao);
    expect(triplo).toBe(18);
});

//TESTE 3
it("Deve calcular o triplo da multiplicação de um número positivo e um negativo", function(){
    const multiplicacao = multiplicar (-2, 3);
    const triplo = calcularTriplo(multiplicacao);
    expect(triplo).toBe(-18);
});
});


//Exercício 3: Cálculo de Desconto
//Função para calcular o desconto baseado no valor total.
function calcularDesconto(valorTotal) {
    if (valorTotal <= 100) {
        return valorTotal * 0.05;
    }else if (valorTotal <= 500) {
        return valorTotal * 0.10;
    }else{
        return valorTotal * 0.15;
    }
}
//Função para aplicar o desconto
function aplicarDesconto(valorTotal, desconto) {
    return valorTotal - desconto;
}

// TESTE 1
describe("Exercício 3", function (){
it("Deve calcular e aplicar corretamente o desconto de 5% para compras de até R$ 100", function () {
    const valorTotal = 100;
    const desconto = calcularDesconto(valorTotal);
    const valorComDesconto = aplicarDesconto(valorTotal, desconto);
    expect(desconto).toBe(5);
    expect(valorComDesconto).toBe(95);
});
// TESTE 2
it("Deve calcular e aplicar corretamente o desconto de 10% para compras entre R$ 101 e R$ 500", function () {
    const valorTotal = 300;
    const desconto = calcularDesconto(valorTotal); 
    const valorComDesconto = aplicarDesconto(valorTotal, desconto); 
    expect(desconto).toBe(30);
    expect(valorComDesconto).toBe(270);
});

// TESTE 3
it("Deve calcular e aplicar corretamente o desconto de 15% para compras acima de R$ 500", function () {
    const valorTotal = 600;
    const desconto = calcularDesconto(valorTotal);
    const valorComDesconto = aplicarDesconto(valorTotal, desconto);
    expect(desconto).toBe(90);
    expect(valorComDesconto).toBe(510);
});
});