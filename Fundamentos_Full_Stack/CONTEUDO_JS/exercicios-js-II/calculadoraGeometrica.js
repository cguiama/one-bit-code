/*
Calculadora Geométrica

Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. 

As opções devem ser:

- área do triângulo: base * altura / 2
- área do retângulo: base * altura
- área do quadrado: lado²
- área do trapézio: (base maior + base menor) * altura / 2
- área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. 
O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.
*/

function triangulo() {
  const base = parseFloat(prompt('Digite o valor da base'));
  const altura = parseFloat(prompt('Digite o valor da altura'));
  const area = (base * altura) / 2;

  return alert(`O valor da área do seu triangulo é ${area}`);
}
function retangulo() {
  const base = parseFloat(prompt('Digite o valor da base'));
  const altura = parseFloat(prompt('Digite o valor da altura'));
  const area = base * altura;

  return alert(`O valor da área do seu retangulo é ${area}`);
}
function quadrado() {
  const lado = parseFloat(prompt('Digite o valor do lado'));
  const area = lado ** 2;

  return alert(`O valor da área do seu quadrado é ${area}`);
}
function trapezio() {
  const baseMaior = parseFloat(prompt('Digite o valor da base maior'));
  const baseMenor = parseFloat(prompt('Digite o valor da base menor'));
  const altura = parseFloat(prompt('Digite o valor da altura'));
  const area = (baseMaior + baseMenor) * (altura / 2);

  return alert(`O valor da área do seu trapezio é ${area}`);
}
function circulo() {
  const raio = parseFloat(prompt('Digite o valor do raio'));
  const area = 3.14 * raio ** 2;

  return alert(`O valor da área do seu circulo é ${area}`);
}

let opcao;
function exibirMenu() {
  return prompt(`Bem vindo a calculadora de áreas de formas geométricas!\n\nDigite a opção desejada:\n
1 - Triangular
2 - Retangular
3 - Quadrado
4 - Trapezio
5 - Circulo
6 - Sair`);
}

function executar() {
  let opcao = '';

  do {
    opcao = parseInt(exibirMenu());

    switch (opcao) {
      case 1:
        triangulo();
        break;
      case 2:
        retangulo();
        break;
      case 3:
        quadrado();
        break;
      case 4:
        trapezio();
        break;
      case 5:
        circulo();
        break;
      case 6:
        alert('Fechando a calculadora');
        break;
      default:
        alert('valor digitado não é válido.');
    }
  } while (opcao !== 6);
}
