function calcularTudo() {
  calcularEncargos();
  calcularDespesas();
  calcularDespesasFuncionario();
  jornadaTrabalhadoFuncionario();
  jornadaTrabalhadoGastosFixos();
  horaTecnica();
  calcularPrecoSugerido();
  showModal();
}

function calcularEncargos() {
  var salario = parseFloat(document.getElementById("salario").value);
  var encargos = salario * 0.5;
  document.getElementById("encargos").value = encargos.toFixed(2);
}

function calcularDespesas() {
  var salario = parseFloat(document.getElementById("salario").value);
  var encargos = parseFloat(document.getElementById("encargos").value);
  var aluguel = parseFloat(document.getElementById("aluguel").value);
  var agua = parseFloat(document.getElementById("agua").value);
  var energia = parseFloat(document.getElementById("energia").value);
  var telefonia = parseFloat(document.getElementById("telefonia").value);
  var internet = parseFloat(document.getElementById("internet").value);
  var iptu = parseFloat(document.getElementById("iptu").value);
  var contador = parseFloat(document.getElementById("contador").value);
  var manutencoes = parseFloat(document.getElementById("manutencoes").value);

  salario = isNaN(salario) ? 0 : salario;
  encargos = isNaN(encargos) ? 0 : encargos;
  aluguel = isNaN(aluguel) ? 0 : aluguel;
  agua = isNaN(agua) ? 0 : agua;
  energia = isNaN(energia) ? 0 : energia;
  telefonia = isNaN(telefonia) ? 0 : telefonia;
  internet = isNaN(internet) ? 0 : internet;
  iptu = isNaN(iptu) ? 0 : iptu;
  contador = isNaN(contador) ? 0 : contador;
  manutencoes = isNaN(manutencoes) ? 0 : manutencoes;

  var totalDespesas =
    salario +
    encargos +
    aluguel +
    agua +
    energia +
    telefonia +
    internet +
    iptu +
    contador +
    manutencoes;

  document.getElementById("totalDespesas").value = totalDespesas.toFixed(2);
}

function calcularDespesasFuncionario() {
  var salarioNominal = parseFloat(
    document.getElementById("salarioNominal").value
  );
  var ferias = (salarioNominal * (1 / 3)) / 12;
  var decimoTerceiro = salarioNominal * 0.0833333333333333;
  var fgts = salarioNominal * 0.08;
  var multa = 0.08 * 0.4 * salarioNominal;
  var ajudaCusto = parseFloat(document.getElementById("ajudaCusto").value);
  var valeRefeicao = parseFloat(document.getElementById("valeRefeicao").value);
  var assistenciaMedica = parseFloat(
    document.getElementById("assistenciaMedica").value
  );

  ferias = isNaN(ferias) ? 0 : ferias;
  decimoTerceiro = isNaN(decimoTerceiro) ? 0 : decimoTerceiro;
  fgts = isNaN(fgts) ? 0 : fgts;
  multa = isNaN(multa) ? 0 : multa;
  ajudaCusto = isNaN(ajudaCusto) ? 0 : ajudaCusto;
  valeRefeicao = isNaN(valeRefeicao) ? 0 : valeRefeicao;
  assistenciaMedica = isNaN(assistenciaMedica) ? 0 : assistenciaMedica;

  var totalDespesas =
    salarioNominal +
    ferias +
    decimoTerceiro +
    fgts +
    multa +
    ajudaCusto +
    valeRefeicao +
    assistenciaMedica;

  document.getElementById("ferias").value = ferias.toFixed(2);
  document.getElementById("decimoTerceiro").value = decimoTerceiro.toFixed(2);
  document.getElementById("fgts").value = fgts.toFixed(2);
  document.getElementById("multa").value = multa.toFixed(2);
  document.getElementById("totalDespesasFuncionario").value =
    totalDespesas.toFixed(2);
}

function jornadaTrabalhadoFuncionario() {
  var despesasFuncionario = document.getElementById("totalDespesasFuncionario");

  var jornadaTrabalhado = parseFloat(
    document.getElementById("jornadaTrabalhado").value
  );

  var totalDespesasFuncionario = parseFloat(despesasFuncionario.value);

  var custoModH = totalDespesasFuncionario / jornadaTrabalhado;

  jornadaTrabalhado = isNaN(jornadaTrabalhado) ? 0 : jornadaTrabalhado;
  custoModH = isNaN(custoModH) ? 0 : custoModH;

  document.getElementById("custoModH").value = custoModH.toFixed(2);
}

function jornadaTrabalhadoGastosFixos() {
  var despesasGastoFixo = document.getElementById("totalDespesas");

  var jornadaTrabalhadoGastos = parseFloat(
    document.getElementById("jornadaTrabalhadoGastos").value
  );

  var totalDespesasGastoFixo = parseFloat(despesasGastoFixo.value);

  var gastoFixoH = totalDespesasGastoFixo / jornadaTrabalhadoGastos;

  jornadaTrabalhadoGastos = isNaN(jornadaTrabalhadoGastos)
    ? 0
    : jornadaTrabalhadoGastos;
  gastoFixoH = isNaN(gastoFixoH) ? 0 : gastoFixoH;

  document.getElementById("gastoFixoH").value = gastoFixoH.toFixed(2);
}

function horaTecnica() {
  var horaTecnicaColaborador = document.getElementById("custoModH");
  var horaTecnicaEmpresa = document.getElementById("gastoFixoH");
  var quantidadeColaborador = parseFloat(
    document.getElementById("quantidadeColaborador").value
  );

  var calcularHoraTecnicaColaborador = parseFloat(horaTecnicaColaborador.value);
  var calcularHoraTecnicaEmpresa = parseFloat(horaTecnicaEmpresa.value);

  var totalHoraTecnicaColaborador =
    calcularHoraTecnicaColaborador +
    calcularHoraTecnicaEmpresa / quantidadeColaborador;

  var totalHoraTecnicaEmpresa =
    calcularHoraTecnicaColaborador * quantidadeColaborador +
    calcularHoraTecnicaEmpresa;

  horaTecnicaColaborador = isNaN(horaTecnicaColaborador)
    ? 0
    : horaTecnicaColaborador;
  horaTecnicaEmpresa = isNaN(horaTecnicaEmpresa) ? 0 : horaTecnicaEmpresa;
  quantidadeColaborador = isNaN(quantidadeColaborador)
    ? 0
    : quantidadeColaborador;

  document.getElementById("horaTecnicaColaborador").value =
    totalHoraTecnicaColaborador.toFixed(2);
  document.getElementById("horaTecnicaEmpresa").value =
    totalHoraTecnicaEmpresa.toFixed(2);
  document.getElementById("quantidadeColaborador").value =
    quantidadeColaborador.toFixed(0);
}

function calcularPrecoSugerido() {
  var valorHoraTecnica = document.getElementById("horaTecnicaEmpresa");
  var materialDireto = document.getElementById("materialDireto");
  var deslocamento = document.getElementById("deslocamento");
  var alimentacao = document.getElementById("alimentacao");
  var boleto = document.getElementById("boleto");
  var comissao = document.getElementById("comissao");
  var taxaCartao = document.getElementById("taxaCartao");
  var imposto = document.getElementById("imposto");
  var porcentagemLucro = document.getElementById("porcentagemLucro");
  var lucro = document.getElementById("lucro");

  var quantidadeHoras = parseFloat(
    document.getElementById("quantidadeHoras").value
  );

  var valorHoraTecnicaValue = parseFloat(valorHoraTecnica.value);
  var materialDireto = parseFloat(materialDireto.value);
  var deslocamento = parseFloat(deslocamento.value);
  var alimentacao = parseFloat(alimentacao.value);
  var boleto = parseFloat(boleto.value);
  var comissao = parseFloat(comissao.value);
  var taxaCartao = parseFloat(taxaCartao.value);
  var imposto = parseFloat(imposto.value);
  var lucro = parseFloat(lucro.value);
  var porcentagemLucro = parseFloat(porcentagemLucro.value);

  var valorTotalHoraTecnica = valorHoraTecnicaValue * quantidadeHoras;

  valorHoraTecnica = isNaN(valorHoraTecnica) ? 0 : valorHoraTecnica;
  quantidadeHoras = isNaN(quantidadeHoras) ? 0 : quantidadeHoras;
  valorTotalHoraTecnica = isNaN(valorTotalHoraTecnica)
    ? 0
    : valorTotalHoraTecnica;
  materialDireto = isNaN(materialDireto) ? 0 : materialDireto;
  deslocamento = isNaN(deslocamento) ? 0 : deslocamento;
  alimentacao = isNaN(alimentacao) ? 0 : alimentacao;
  boleto = isNaN(boleto) ? 0 : boleto;
  comissao = isNaN(comissao) ? 0 : comissao;
  taxaCartao = isNaN(taxaCartao) ? 0 : taxaCartao;
  imposto = isNaN(imposto) ? 0 : imposto;
  porcentagemLucro = isNaN(porcentagemLucro) ? 0 : porcentagemLucro;
  lucro = isNaN(lucro) ? 0 : lucro;

  totalprecoSugerido =
    (valorTotalHoraTecnica +
      materialDireto +
      deslocamento +
      alimentacao +
      boleto) /
    (1 - (0.01 + 0.025 + 0.05 + 0.2));

  totalComissao = totalprecoSugerido * 0.01;
  totalTaxaCartao = totalprecoSugerido * 0.025;
  totalImposto = totalprecoSugerido * 0.05;

  totalLucro =
    totalprecoSugerido -
    valorTotalHoraTecnica -
    materialDireto -
    deslocamento -
    alimentacao -
    boleto -
    totalComissao -
    totalTaxaCartao -
    totalImposto;

  totalPorcentagemLucro = (totalLucro / totalprecoSugerido) * 100;

  document.getElementById("comissao").value = totalComissao.toFixed(2);
  document.getElementById("taxaCartao").value = totalTaxaCartao.toFixed(2);
  document.getElementById("imposto").value = totalImposto.toFixed(2);
  document.getElementById("valorHoraTecnica").value =
    valorHoraTecnicaValue.toFixed(2);
  document.getElementById("valorTotalHoraTecnica").value =
    valorTotalHoraTecnica.toFixed(2);
  document.getElementById("precoSugerido").value =
    totalprecoSugerido.toFixed(2);
  document.getElementById("lucro").value = totalLucro.toFixed(2);
  document.getElementById("porcentagemLucro").value =
    totalPorcentagemLucro + "%";

  // Definir o valor do preço sugerido
  var precoSugerido = document.getElementById("precoSugerido").value;
  precoSugerido = precoSugerido ? parseFloat(precoSugerido) : 0;
  document.getElementById("precoSugeridoResult").textContent =
    "R$" + precoSugerido.toFixed(2);

  var precoHoraTecnica = document.getElementById("valorTotalHoraTecnica").value;
  precoHoraTecnica = precoHoraTecnica ? parseFloat(precoHoraTecnica) : 0;
  document.getElementById("precoHoraTecnica").textContent =
    "R$" + precoHoraTecnica.toFixed(2);

  var materialDireto = document.getElementById("materialDireto").value;
  materialDireto = materialDireto ? parseFloat(materialDireto) : 0;
  document.getElementById("precoMaterialDireto").textContent =
    "R$" + materialDireto.toFixed(2);

  var deslocamento = document.getElementById("deslocamento").value;
  deslocamento = deslocamento ? parseFloat(deslocamento) : 0;
  document.getElementById("precoDeslocamento").textContent =
    "R$" + deslocamento.toFixed(2);

  var alimentacao = document.getElementById("alimentacao").value;
  alimentacao = alimentacao ? parseFloat(alimentacao) : 0;
  document.getElementById("precoAlimentacao").textContent =
    "R$" + alimentacao.toFixed(2);

  var boleto = document.getElementById("boleto").value;
  boleto = boleto ? parseFloat(boleto) : 0;
  document.getElementById("precoBoleto").textContent = "R$" + boleto.toFixed(2);

  var comissao = document.getElementById("comissao").value;
  comissao = comissao ? parseFloat(comissao) : 0;
  document.getElementById("precoComissao").textContent =
    "R$" + comissao.toFixed(2);

  var taxaCartao = document.getElementById("taxaCartao").value;
  taxaCartao = taxaCartao ? parseFloat(taxaCartao) : 0;
  document.getElementById("precoTaxaCartao").textContent =
    "R$" + taxaCartao.toFixed(2);

  var imposto = document.getElementById("imposto").value;
  imposto = imposto ? parseFloat(imposto) : 0;
  document.getElementById("precoImposto").textContent =
    "R$" + imposto.toFixed(2);

  var porcentagemLucro = document.getElementById("porcentagemLucro").value;
  document.getElementById("precoLucroPorcentagem").textContent =
    porcentagemLucro;

  var lucro = document.getElementById("lucro").value;
  lucro = lucro ? parseFloat(lucro) : 0;
  document.getElementById("precoLucro").textContent = "R$" + lucro.toFixed(2);
}

function showModal() {
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];

  // Exibir o modal
  modal.style.display = "block";

  // Fechar o modal ao clicar no 'x'
  span.onclick = function () {
    modal.style.display = "none";
  };

  // Fechar o modal ao clicar fora dele
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
