function calcularEncargos() {
  var salario = parseFloat(document.getElementById("salario").value);
  var encargos = salario * 0.5;
  document.getElementById("encargos").value = encargos.toFixed(2);
  calcularDespesas();
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
    calcularHoraTecnicaColaborador + calcularHoraTecnicaEmpresa / 2;

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
    gastoFixoH.toFixed(0);
}
