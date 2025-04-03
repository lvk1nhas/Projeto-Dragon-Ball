document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll('.botao'); // Todos os botões
    const personagens = document.querySelectorAll('.personagem'); // Todos os personagens

    botoes.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            // Remove a classe "selecionado" de todos os botões
            botoes.forEach(botao => botao.classList.remove('selecionado'));

            // Adiciona a classe "selecionado" no botão clicado
            botao.classList.add('selecionado');

            // Remove a classe "selecionado" de todos os personagens
            personagens.forEach(personagem => personagem.classList.remove('selecionado'));

            // Adiciona a classe "selecionado" no personagem correspondente
            personagens[index].classList.add('selecionado');
        });
    });
});
