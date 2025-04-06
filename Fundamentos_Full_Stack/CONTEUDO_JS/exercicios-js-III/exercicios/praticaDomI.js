// Quando clicar no botão, o texto do parágrafo deve mudar para "Você clicou no botão!".
const botao = document.getElementById('meuBotao');
const paragrafo = document.getElementById('mensagem');

botao.addEventListener('click', function () {
  paragrafo.textContent =
    paragrafo.textContent === 'Você clicou no botão!'
      ? 'Texto original'
      : 'Você clicou no botão!';
});

// Criar um botão que mostra ou esconde uma imagem ao ser clicado (efeito toggle).

const botaoImg = document.getElementById('toggleBtn');
const imagem = document.getElementById('minhaImagem');

botaoImg.addEventListener('click', function () {
  imagem.style.display = imagem.style.display === 'block' ? 'none' : 'block';
});

// Ao digitar algo no input e clicar no botão, o item é adicionado a uma lista <ul>.
const inputavel = document.getElementById('novoItem');
const botaoAdd = document.getElementById('addItem');
const ul = document.getElementById('lista');

botaoAdd.addEventListener('click', () => {
  if (inputavel.value !== '') {
    const li = document.createElement('li');
    li.textContent = inputavel.value;
    ul.appendChild(li);
  }
});

//Criar um formulário com campos obrigatórios e mostrar erros visuais se estiverem vazios.
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('input');
const msgErro = document.getElementById('mensagemErro');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  inputs.forEach((input) => {
    if (input.value !== '') {
      msgErro.style.color = 'green';
      msgErro.textContent = 'Formulário enviado com sucesso!';
      input.value = '';
    } else {
      msgErro.textContent = 'Por favor, preencha todos os campos.';
    }
  });
});
