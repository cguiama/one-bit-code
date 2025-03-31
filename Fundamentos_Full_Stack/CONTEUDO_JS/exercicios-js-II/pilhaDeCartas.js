/*
Pilha de Cartas

Escreva um programa em javascript para simular um baralho de cartas. 
O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho
e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. 

Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. 
Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. 
O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
*/

let baralho = [];
let opcao;

do {
  opcao = parseInt(
    window.prompt(`Baralho: ${baralho.length} cartas\n\n
    Escolha uma opção:\n
    1 - Adicionar uma carta\n
    2 - Puxar uma carta\n
    3 - Sair`)
  );

  switch (opcao) {
    case 1:
      adicionarCarta();
      break;
    case 2:
      puxarCarta();
      break;
    case 3:
      window.alert('Encerrando o programa.');
      break;
    default:
      window.alert('Opção inválida. Tente novamente.');
  }
} while (opcao !== 3);

function adicionarCarta() {
  const carta = window.prompt('Digite o nome da carta:');
  baralho.push(carta);
  window.alert(`A carta "${carta}" foi adicionada ao topo do baralho.`);
}

function puxarCarta() {
  if (baralho.length > 0) {
    const cartaRemovida = baralho.pop();
    window.alert(`Você puxou a carta "${cartaRemovida}".`);
  } else {
    window.alert('O baralho está vazio.');
  }
}
