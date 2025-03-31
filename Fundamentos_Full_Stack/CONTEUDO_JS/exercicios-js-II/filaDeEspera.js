/*Fila de Espera

Escreva um programa em javascript para simular uma fila de espera em um consultório médico. 

O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). 
O menu também deve permitir escolher entre as opções:
- “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), 
- “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e 
- “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
*/

let fila = [];
let paciente;

let atendimento;

function adicionarPaciente() {
  paciente = window.prompt('Digite o nome do paciente.');
  fila.push(paciente);

  posicao = fila.indexOf(paciente);

  return window.alert(
    `O paciente ${paciente} foi adicionado a fila na ${posicao + 1} posição.`
  );
}
function removerPaciente() {
  if (fila.length > 0) {
    paciente = fila.shift();
    window.alert(`O Paciente ${paciente} foi removido`);
  } else {
    window.alert(`A fila está vazia.`);
  }
}

while (atendimento !== 3) {
  let listaPacientes = '';
  for (let i = 0; i < fila.length; i++) {
    listaPacientes += `${i + 1}º ${fila[i]}\n`;
  }
  atendimento = parseInt(
    window.prompt(
      `Atualmente os pacientes na fila são:\n${listaPacientes}\n\nDigite a opção desejada:\n\n1 - Novo Paciente\n2 - Consultar Paciente\n3 - Sair`
    )
  );
  switch (atendimento) {
    case 1:
      adicionarPaciente();
      break;
    case 2:
      removerPaciente();
      break;
    case 3:
      window.alert('Encerrando o programa.');
      break;
    default:
      window.alert('Opção inválida');
  }
}
