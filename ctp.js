document.addEventListener('DOMContentLoaded', function() {
    const avanca = document.querySelectorAll('.btn-proximo');

    avanca.forEach(button => {
        button.addEventListener('click', function() {
            const atual = document.querySelector('.ativo');
            const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

            atual.classList.remove('ativo');
            atual.style.opacity = '0'; // Adiciona transição suave de opacidade

            setTimeout(() => {
                atual.style.display = 'none'; // Esconde o passo atual após a transição
                const proximoElemento = document.getElementById(proximoPasso);
                proximoElemento.classList.add('ativo');
                proximoElemento.style.display = 'block'; // Mostra o próximo passo
                proximoElemento.style.opacity = '1'; // Aplica opacidade completa
            }, 500); // Tempo para a transição
        });
    });
});
