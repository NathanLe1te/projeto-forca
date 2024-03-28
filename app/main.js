var botoesModal = document.querySelectorAll('.botao-menu');
var btnFecharModal = document.querySelector('.botao-fechar-modal')
// Adiciona um evento de clique a cada botão
botoesModal.forEach(function(botao) {
    botao.addEventListener('click', function() {
        // Obtém o ID do modal associado ao botão clicado
        var modalID = botao.getAttribute('data-modal');
        
        // Abre o modal correspondente
        var modal = document.getElementById(modalID);
        if (modal) {
            modal.showModal();
        }
    });
});

var botoesFecharModal = document.querySelectorAll('.botao-fechar-modal');
botoesFecharModal.forEach(function(botao) {
    botao.addEventListener('click', function() {
        // Obtém o modal pai do botão clicado
        var modalPai = botao.parentNode;
        // Obtém o avô do botão clicado
        var avoDoBotao = modalPai.parentNode;
        
        // Fecha o modal
        if (avoDoBotao) {
            avoDoBotao.close();
        }
    });
});
