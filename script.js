document.addEventListener('DOMContentLoaded', function () {
    // Adiciona eventos de clique para os links de navegação
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Evita que o link recarregue a página
            loadPage(this.getAttribute('data-page')); // Carrega a nova página
        });
    });
});

function loadPage(page) {
    // Redireciona para a página especificada
    window.location.href = `${page}.html`;
}

function criarConta() {
    alert('Conta criada com sucesso!');
}

function fazerLogin() {
    alert('Login bem-sucedido!');
}
