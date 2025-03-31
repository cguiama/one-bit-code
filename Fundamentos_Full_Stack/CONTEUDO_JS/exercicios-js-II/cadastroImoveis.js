/*
Cadastro de Imóveis

Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- O menu também deve ter a opção de mostrar todos os imóveis salvos.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.

*/
let opcao;
do(){
    opcao = parseFloat(window.prompt(`Digite a opção desejada\n\n
    1 - Salvar imóvel\n
    2 - Mostrar imóveis\n
    3 - Sair    `)
    );
}
while(opcao !== 3){

}