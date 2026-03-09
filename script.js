// Quando a página carregar completamente, executa o código
document.addEventListener('DOMContentLoaded', function() {

    // ===== EFEITO 1: Mostrar impacto ambiental =====
    // Pegamos o botão e o parágrafo oculto pelo ID
    const btnImpacto = document.getElementById('btnImpacto');
    const impactoOculto = document.getElementById('impactoOculto');

    // Adiciona um "ouvinte" de clique ao botão
    btnImpacto.addEventListener('click', function() {
        // Alterna a classe 'oculto' (se tiver, remove; se não tiver, adiciona)
        // Isso faz o texto aparecer ou desaparecer
        impactoOculto.classList.toggle('oculto');
    });

    // ===== EFEITO 2: Mostrar dica sustentável =====
    const btnDica = document.getElementById('btnDica');
    const dicaOculta = document.getElementById('dicaOculta');

    btnDica.addEventListener('click', function() {
        dicaOculta.classList.toggle('oculto');
    });

    // ===== (OPCIONAL) Efeito extra: mudar cor do cartão ao clicar duas vezes =====
    // Pega todos os elementos com a classe 'cartao'
    const cartoes = document.querySelectorAll('.cartao');
    cartoes.forEach(function(cartao) {
        cartao.addEventListener('dblclick', function() {
            // Alterna uma classe de fundo diferente (criada dinamicamente)
            this.classList.toggle('cartao-destaque');
        });
    });

    // (Para o efeito acima, precisamos definir a classe .cartao-destaque no CSS)
    // Se quiser usar, adicione no CSS:
    // .cartao-destaque { background-color: #c8e6c9; border: 2px solid #2e7d32; }
});