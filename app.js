function sortear() {
  let quantidade = Number(document.getElementById('quantidade').value);
  let de = Number(document.getElementById('de').value);
  let ate = Number(document.getElementById('ate').value);
  let intervalo = ate - de + 1;

  // Validações antes do sorteio
  if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
    alert('Por favor, preencha todos os campos corretamente.');
    reiniciar();
    return;
  }

  if (!Number.isInteger(quantidade) || !Number.isInteger(de) || !Number.isInteger(ate)) {
    alert('Por favor, insira apenas números inteiros nos campos.');
    reiniciar();
    return;
  }

  if (de > ate) {
    alert('O campo "Do número" deve ser menor que o campo "Até o número"');
    reiniciar();
    return;
  }

  if (quantidade > intervalo) {
    alert('A quantidade de números deve ser menor ou igual ao intervalo escolhido!');
    reiniciar();
    return;
  }

  let sorteados = [];

  while (sorteados.length < quantidade) {
    let numero = obterNumeroAleatorio(de, ate);
    if (!sorteados.includes(numero)) {
      sorteados.push(numero);
    }
  }

  sorteados.sort((a, b) => a - b);

  document.getElementById('resultado').innerHTML =
    `<label class="texto__paragrafo">Números sorteados:<br>${sorteados.join(' | ')}</label>`;

  alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
  let botao = document.getElementById('btn-reiniciar');
  botao.classList.toggle('container__botao');
  botao.classList.toggle('container__botao-desabilitado');
}

function reiniciar() {
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').innerHTML =
    '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
  alterarStatusBotao();
}
