function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let sorteados = [];
    let numero;
    if ( de > ate) {
       exibirTextoNaTela("resultado", `O valor 'de' deve ser menor que o valor 'até'.`);
       trocaClasse("btn-reiniciar", "container__botao", false);
    } else if (quantidade <=  0) {
        exibirTextoNaTela("resultado", `O valor 'quantidade' deve ser um número positivo maior que 0.`);
        trocaClasse("btn-reiniciar", "container__botao", false);
    } else if (quantidade > ate - de + 1) {
        exibirTextoNaTela("resultado", `O valor 'quantidade' deve ser um número menor ou igual à diferença entre 'até' e 'de'.`);
        trocaClasse("btn-reiniciar", "container__botao", false);
    } else {
    for (let i = 0; i < quantidade; i++) {
        numero = sortearNumeros(de, ate);
        while (sorteados.includes(numero)) {
            numero = sortearNumeros(de, ate);
        }        sorteados.push(numero);
    }       exibirTextoNaTela ('resultado', `Os numeros sorteados foram: ${sorteados}`);
trocaClasse("btn-reiniciar", "container__botao", false);
} 

}

function sortearNumeros(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function exibirTextoNaTela(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = `<label class="texto__paragrafo">${texto}</label>`;
}
function reiniciar() {
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';
    exibirTextoNaTela("resultado", 'nenhum até agora');
    trocaClasse("btn-reiniciar", "container__botao-desabilitado", true); // ← volta pro estado desabilitado   
}
function trocaClasse(id, classe, desativar) {
    let botao = document.getElementById(id);
    let tipo = botao.classList;
    botao.className = botao.className.replace(tipo, classe);
    botao.disabled = desativar;
    }