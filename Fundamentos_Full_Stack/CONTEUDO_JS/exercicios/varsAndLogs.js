function iniciarCadastro() {
  let nome;
  let sobrenome;
  let nascimento;
  let estudo;

  nome = window.prompt('Digite seu nome');
  sobrenome = window.prompt('Digite seu sobrenome');
  nascimento = window.prompt('Digite sua data de nascimento (dd/mm/aaaa)');
  estudo = window.prompt('Digite seu campo de estudo.');

  console.log('Cadastro realizado...');
  console.log('Nome: ' + nome);
  console.log('Sobrenome: ' + sobrenome);
  console.log('Data de Nascimento: ' + nascimento);
  console.log('Campo de Estudo: ' + estudo);
  window.alert('Cadastro realizado com sucesso!');
  window.alert(
    'Nome: ' +
      nome +
      '\n' +
      'Sobrenome: ' +
      sobrenome +
      '\n' +
      'Data de Nascimento: ' +
      nascimento +
      '\n' +
      'Campo de Estudo: ' +
      estudo
  );
}

function iniciarCcalculadora() {
  let num1 = parseFloat(window.prompt('Digite o primeiro número'));
  let num2 = parseFloat(window.prompt('Digite o segundo número'));
  let operacao = window.prompt('Escolha a operação: +, -, *, /');
  let resultado;

  switch (operacao) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      resultado = num1 / num2;
      break;
    default:
      window.alert('Operação inválida!');
      return;
  }
  window.alert('Resultado: ' + resultado);
}
