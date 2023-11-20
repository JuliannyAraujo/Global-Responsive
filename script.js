function loadPage(page) {
    const contentSection = document.getElementById('content');

    fetch(`${page}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar ${page}.html`);
            }
            return response.text();
        })
        .then(data => {
            contentSection.innerHTML = data;
            // Adiciona um evento de clique para os links na nova página carregada
            document.querySelectorAll('nav a').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault(); // Evita que o link recarregue a página
                    loadPage(this.getAttribute('data-page')); // Carrega a nova página
                });
            });
        })
        .catch(error => console.error(error));
}

function criarConta() {
    alert('Conta criada com sucesso!');
}

function fazerLogin() {
    alert('Login bem-sucedido!');
}