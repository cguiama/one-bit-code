/*
Cadastro de Imóveis

Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel - ok
- O menu também deve ter a opção de mostrar todos os imóveis salvos.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.

*/
let imoveis = [];
let opcao;
function salvarImovel() {
  let imovel = {
    proprietario: prompt('Digite o nome do proprietário'),
    quartos: parseInt(prompt('Digite a quantidade de quartos:')),
    banheiros: parseInt(prompt('Digite a quantidade de banheiros:')),
    garagem:
      prompt('O imóvel possui garagem? (Sim/Não):').toLowerCase() === 'sim',
  };

  const confirma = confirm(`
    Salvar este imóvel?\n
    Proprietário: ${imovel.proprietario}
    Quartos: ${imovel.quartos}
    Banheiros: ${imovel.banheiros}
    Garagem: ${imovel.garagem ? 'Sim' : 'Não'}
    `);

  if (confirma) {
    imoveis.push(imovel);
  }
}

function mostrarImoveis() {
  if (imoveis.length != 0) {
    for (let i = 0; i < imoveis.length; i++) {
      window.alert(`${i + 1}º Imóvel:\n
                Proprietário: ${imoveis[i].proprietario}
                Quartos: ${imoveis[i].quartos}
                Banheiros: ${imoveis[i].banheiros}
                Garagem: ${imoveis[i].garagem ? 'Sim' : 'Não'}
            `);
    }
  } else {
    window.alert('Não há imóveis cadastrados.');
  }
}

do {
  opcao = parseInt(
    prompt(`Imóveis cadastrados: ${imoveis.length}\n
    Digite a opção desejada
    1 - Salvar imóvel
    2 - Mostrar imóveis
    3 - Sair`)
  );

  switch (opcao) {
    case 1:
      salvarImovel();
      break;
    case 2:
      mostrarImoveis();
      break;
    case 3:
      window.alert('Encerrando programa.');
      break;
    default:
      window.alert('Opção digitada é inválida.');
  }
} while (opcao !== 3);
