const form = document.getElementById('form-numero');
const corpoTabela = document.querySelector('tbody');
const resultado = document.querySelector('.resultado');

function atualizarContador() {
    const numLinhas = corpoTabela.rows.length;
    resultado.textContent = numLinhas;

    if (numLinhas > 0) {
        resultado.classList.remove('vazio');
        resultado.classList.add('preenchido');
    } 
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeDoContato = document.getElementById('Nome-do-contato');
    const inputNúmeroDoContato = document.getElementById('Número-do-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeDoContato.value}</td>`;
    linha += `<td>${inputNúmeroDoContato.value}</td>`;
    linha += '</tr>';

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML += linha;

    // Atualizar contador de contatos salvos
    const resultado = document.querySelector('.resultado');
    resultado.textContent = corpoTabela.rows.length;

    inputNomeDoContato.value = '';
    inputNúmeroDoContato.value = '';
    
    atualizarContador();
});

atualizarContador();
