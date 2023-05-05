// // 1. Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.

function exercicio1() {
    let numero1 = Number(prompt("Informe um número:"));
    let numero2 = Number(prompt("Informe um segundo número:"));

    if (numero1 > numero2) {
        alert("O maior número é: " + numero1);
    }
    else if (numero1 < numero2) {
        alert("O número maior é: " + numero2);
    }
    else {
        alert(" Os números são iguais.");
    }
}

exercicio1()

// // 2. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.

function exercicio2() {
    let numero = Number(prompt("Digite um número:"));

    if (numero > 0) {
        alert("O número é positivo.");
    }
    else if (numero < 0) {
        alert(" O número é negativo.");
    }
    else {
        alert("O número é zero.");
    }
}

exercicio2()

// // //3. Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

function exercicio3() {
    let valor1 = parseFloat(prompt("Informe o primeiro valor: "));
    let valor2 = parseFloat(prompt("Informe o segundo valor: "));
    let valor3 = parseFloat(prompt("Informe o terceiro valor: "));

    if (valor1 > valor2 && valor1 > valor3) {
        alert("O maior valor é: " + valor1);
    } else if (valor2 > valor1 && valor2 > valor3) {
        alert("O maior valor é: " + valor2);
    } else {
        alert("O maior valor é: " + valor3);
    }
}

exercicio3()

// // 4. Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

function exercicio4() {
    let valor1 = parseInt(prompt("Digite o primeiro número"));
    let valor2 = parseInt(prompt("Digite o segundo número"));
    let valor3 = parseInt(prompt("Digite o terceiro número"));
    let soma
    if (valor1 > valor2 && valor2 > valor3) {
        soma = valor1 + valor2
        alert('O resultado da soma dos dois maiores números é: ' + soma);
    }
    else if (valor2 > valor1 && valor3 > valor2) {
        soma = valor2 + valor3
        alert('O resultado da soma dos dois maiores números é: ' + soma);
    }
    else if (valor3 > valor1 && valor1 > valor2) {
        soma = valor3 + valor1
        alert('O resultado da soma dos dois maiores números é: ' + soma)
    }
}

exercicio4()

// 5.  Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.

function exercicio5() {
    let valor1 = parseInt(prompt('Digite seu primeiro valor'));
    let valor2 = parseInt(prompt('Digite seu segundo valor'));
    let valor3 = parseInt(prompt('Digite seu terceiro valor'));
    let valor4 = parseInt(prompt('Digite seu quarto valor'));
    let valor5 = parseInt(prompt('Digite seu quinto valor'));
    let valor6 = parseInt(prompt('Digite seu sexto valor'));
    let media = (valor1 + valor2 + valor3 + valor4 + valor5 + valor6) / 6

    alert(`Os números informados foram:   ${valor1} + ${valor2} + ${valor3} + ${valor4} + ${valor5} + ${valor6}. \n E a média aritmética é:  ${media}`)
}

exercicio5()

// // 6. Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes)

function exercicio6() {
    alert('Nos informe 4 valores:')
    let valor1 = Number(prompt('Digite aqui o primeiro número'));
    let valor2 = Number(prompt('Digite aqui o segundo número'));
    let valor3 = Number(prompt('Digite aqui o terceiro número'));
    let valor4 = Number(prompt('Digite aqui o quarto número'));
    let maiorValor;
    if (valor2 > valor3 && valor2 > valor1 && valor2 > valor4) {
        maiorValor = valor2
    }
    else if (valor3 > valor2 && valor3 > valor1 && valor3 > valor4) {
        maiorValor = valor3
    }
    else if (valor4 > valor2 && valor4 > valor1 && valor4 > valor3) {
        maiorValor = valor4
    }
    else if (valor1 > valor2 && valor1 > valor3 && valor1 > valor4) {
        maiorValor = valor1
    }

    alert(`O primeiro número é:  ${valor1}.\n Já o último informado é:  ${valor4}.\n Por fim, o maior dentre os quatro valores informados é:  ${maiorValor} `);
}

exercicio6()

// // 7. Faça um programa que leia 6 números que o usuário vai informar.Todos os números lidos com valor inferior a 72 devem ser somados.Escreva o valor final da soma efetuada e também todos valores que o usuário informou.

function exercicio7() {
    let Listadenumeros = []
    let number1 = parseInt(prompt('Insira aqui o 1º número'));
    let number2 = parseInt(prompt('Insira aqui o 2º número'));
    let number3 = parseInt(prompt('Insira aqui o 3º número'));
    let number4 = parseInt(prompt('Insira aqui o 4º número'));
    let number5 = parseInt(prompt('Insira aqui o 5º número'));
    let number6 = parseInt(prompt('Insira aqui o 6º número'));
    Listadenumeros.push(number1, number2, number3, number4, number5, number6);
    let soma = 0;
    for (let numero = 0; numero < Listadenumeros.length; numero++) {
        if (Listadenumeros[numero] < 72) {
            soma += Listadenumeros[numero]
        }
    }
    alert(`O valor final da soma é: ${soma}. \nE os números informados foram:  ${number1},  ${number2},  ${number3},  ${number4},  ${number5},  ${number6}.`);
}

exercicio7()

// // 8. Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"

function exercicio8() {
    let Nota1 = Number(prompt("Digite o primeiro número:"));
    while (Nota1 < 0 || Nota1 > 10) {
        Nota1 = Number(prompt("Por favor, insira um número entre 0 e 10:"));
    }
    let Nota2 = Number(prompt("Digite o segundo número:"));
    while (Nota2 < 0 || Nota2 > 10) {
        Nota2 = Number(prompt("Por favor, insira um número entre 0 e 10:"));
    }
    let Nota3 = Number(prompt("Digite o terceiro número:"));
    while (Nota3 < 0 || Nota3 > 10) {
        Nota3 = Number(prompt("Por favor, insira um número entre 0 e 10:"));
    }
    let Nota4 = Number(prompt("Digite o quarto número:"));
    while (Nota4 < 0 || Nota4 > 10) {
        Nota4 = Number(prompt("Por favor, insira um número entre 0 e 10:"));
    }

    let Media = (Nota1 + Nota2 + Nota3 + Nota4) / 4;

    if (Media >= 5) {
        alert("Uhulll, você passou no teste!!");
    } else {
        alert("Que pena, você reprovou no teste :(");
    }
}

exercicio8()

// 9. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano(não é necessário considerar o mês em que ela nasceu).

function exercicio9() {
    let anoatual = Number(prompt("Em que ano estamos?"));
    let anodeNascimento = Number(prompt("Qual o seu ano de nascimento? "));
    let verificador = anoatual - anodeNascimento;

    if (verificador >= 16) {
        alert("Você pode votar!!")
    }

    else {
        alert("Você não pode votar!! ")
    }
}

exercicio9()

//10. Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:

// Para homens :(72.7*h) - 58.
// Para mulheres :(62.1*h) - 44.7
// obs: Altura = h (na fórmula acima):

function exercicio10() {
    let gênero = Number(prompt("\nPor favor, informe seu gênero: \n\n 1- Masculino \n 2- Feminino \n\n( Aqui nos referimos apenas para o gênero biológico )"));
    let altura = parseFloat(prompt("\n Qual sua altura ? \n \n obs: ( Informe sua altura em números decimais para que possamos calcular seu peso ideal )"));
    let Masculino = (72.7 * altura) - 58;
    let Feminino = (62.1 * altura) - 44.7;


    if (gênero === 1) {

        alert(`Seu peso ideal é:  ${Masculino}`)
        console.log(`a peso "ideal" do ${gênero} é ${Masculino} `)
    }

    if (gênero === 2) {

        alert(`Seu peso ideal é:  ${Feminino}`)
        console.log(`a peso "ideal" do ${gênero} é ${Feminino}`)
    }


}

exercicio10()

// 11. Uma micro calculadora
// Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação).
// O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. 

function exercicio11() {
    let operacao = parseInt(prompt('Escolha uma das operações sendo:\n 1. Adição\n 2. Subtração\n 3. Divisão\n 4. Multiplicação'));
    let v1 = parseInt(prompt('Informe um número:'));
    let v2 = parseInt(prompt('Informe um número:'));
    
    if (operacao == 1) {
        alert(`A soma é: ${v1 + v2}`)
    }
    if (operacao == 2) {
        alert(`A subtração é: ${v1 - v2}`)
    }
    if (operacao == 3) {
        alert(`A divisão é: ${v1 / v2}`)
    }
    if (operacao == 4) {
        alert(`A multiplicação é: ${v1 * v2}`)
    }
}

exercicio11()

// Menu
function Menu() {
    const mensagem = parseInt(prompt(`
    Bem vindo ao hora de codar 2. Por favor escolha um exercício abaixo

    1 = Exercicio 1
    2 = Exercicio 2
    3 = Exercicio 3
    4 = Exercicio 4
    5 = Exercicio 5
    6 = Exercicio 6
    7 = Exercicio 7
    8 = Exercicio 8
    9 = Exercicio 9
    10 = Exercicio 10
    11 = Exercicio 11
    `))

}

// Menu()