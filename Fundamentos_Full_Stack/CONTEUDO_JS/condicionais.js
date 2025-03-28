/*
Teste de Velocidade

Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)
*/

let nomeCarroA = window.prompt('Digite a nome do carro do primeiro carro');
let velocidadeCarroA = window.prompt('Digite a velocidade do primeiro carro');
let nomeCarroB = window.prompt('Digite a nome do carro do segundo carro');
let velocidadeCarroB = window.prompt('Digite a velocidade do segundo carro');
if (velocidadeCarroA > velocidadeCarroB) {
  alert(`A velocidade do ${nomeCarroA} é maior do que o ${nomeCarroB}`);
} else if (velocidadeCarroA < velocidadeCarroB) {
  alert(`A velocidade do ${nomeCarroA} é menor do que o ${nomeCarroB}`);
} else {
  alert(`Os carros ${nomeCarroA} e ${nomeCarroB} tem velocidades iguais`);
}

/*
Cálculo de Dano

Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, 
o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.

Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.

Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as 
informações atualizadas de ambos os personagens.
*/

let personagens = [];

function cadastrarPersonagem() {
  let nome = window.prompt('Digite o nome do lutador');
  let vida = parseFloat(window.prompt('Digite os pontos de vida do lutador'));
  let ataque = parseFloat(window.prompt('Qual o poder de ataque?'));
  let defesa = parseFloat(window.prompt('Qual sua defesa?'));
  let escudo = window.prompt('Ele possui escudo? Digite S ou N').toUpperCase();

  let personagem = {
    nome: nome,
    vida: vida,
    ataque: ataque,
    defesa: defesa,
    escudo: escudo === 'S',
  };
  personagens.push(personagem);

  console.log('Personagem criado', personagem);
}

function botaPraBrigar() {
  let danoCausado = 0;

  if (personagens[0].vida > 0 && personagens[1].vida) {
    alert(
      `A luta entre ${personagens[0].nome} e ${personagens[1].nome} começou!`
    );

    if (
      (personagens[1].escudo =
        false && personagens[0].ataque > personagens[1].defesa)
    ) {
      danoCausado = personagens[0].ataque - personagens[1].defesa;
      personagens[1].vida -= danoCausado;
      alert(
        `O ${personagens[1].nome} sofreu ${danoCausado} de dano, sua vida agora é de ${personagens[1].vida} pontos`
      );
    } else if (
      (personagens[1].escudo =
        true && personagens[0].ataque > personagens[1].defesa)
    ) {
      danoCausado = (personagens[0].ataque - personagens[1].defesa) / 2;
      danoCausado = personagens[0].ataque - personagens[1].defesa;
      personagens[1].vida -= danoCausado;
      alert(
        `O ${personagens[1].nome} sofreu ${danoCausado} de dano, sua vida agora é de ${personagens[1].vida} pontos`
      );
    } else {
      danoCausado === 0;
      alert(
        `O ${personagens[1].nome} não sofreu dano pois sua defesa é maior que o ataque, sua vida é de ${personagens[1].vida} pontos`
      );
    }
  }

  console.log(
    `${personagens[0].nome} ainda tem ${personagens[0].vida} pontos de vida`
  );
  console.log(
    `${personagens[1].nome} ainda tem ${personagens[1].vida} pontos de vida`
  );
}

cadastrarPersonagem();
cadastrarPersonagem();
botaPraBrigar();
