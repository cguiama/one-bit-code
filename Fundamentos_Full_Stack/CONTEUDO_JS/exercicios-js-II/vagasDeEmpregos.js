/*Sistema de Vagas de Emprego

Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

- Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
- Listar vagas disponíveis
- Criar um nova vaga
- Visualizar uma vaga
- Inscrever um candidato em uma vaga
- Excluir uma vaga
- Sair

Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.
*/
let vagas = [];
let candidatos = [];

function iniciar() {
  let opcao;
  do {
    opcao = exibirMenu();
    switch (opcao) {
      case 1:
        listarVagas();
        break;
      case 2:
        criarVaga();
        break;
      case 3:
        visualizarVaga();
        break;
      case 4:
        inscreverCandidato();
        break;
      case 5:
        excluirVaga();
        break;
      case 6:
        alert('Encerrando o cadastro de vagas.');
        break;
      default:
        alert('Opção digitada é inválida');
        break;
    }
  } while (opcao !== 6);
}

function exibirMenu() {
  let opcao = prompt(`Escolha a opção desejada\n
1 - Listar vagas disponíveis
2 - Criar um nova vaga
3 - Visualizar uma vaga
4 - Inscrever um candidato em uma vaga
5 - Excluir uma vaga
6 - Sair`);

  return parseInt(opcao);
}

//A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.*/
function listarVagas() {
  vagas.forEach((vaga, indice) => {
    alert(
      `Indice: ${indice}\nNome: ${vaga.nome}\nCandidatos: ${vaga.candidatos.length}`
    );
  });
}

// A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.

function criarVaga() {
  const nome = prompt('Digite o nome da vaga');
  const descricao = prompt('Informe a descrição da vaga');
  const limite = prompt('Digite a data em que a vaga irá expirar (dd/MM/aaaa)');

  const confirma = confirm(
    `Confirma a criação da vaga ${nome}?\ndescrição:\n${descricao}\nque expira no dia: ${limite}`
  );

  if (confirma) {
    const novaVaga = { nome, descricao, limite, candidatos: [] };
    vagas.push(novaVaga);
    alert('Vaga criada com sucesso.');
  }
}

// A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
function visualizarVaga() {}
// A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
function inscreverCandidato() {}
// A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.
function excluirVaga() {}
