// Exemplos da aula organizados em blocos independentes.
// Cada bloco tem seu próprio escopo para as constantes.

// 1. Soma, subtração e multiplicação com dois números iguais.
{
  const primeiroValor = 5;
  const segundoValor = 5;

  console.log('5 + 5:', primeiroValor + segundoValor); // 10
  console.log('5 - 5:', primeiroValor - segundoValor); // 0
  console.log('5 * 5:', primeiroValor * segundoValor); // 25
}

// 2. Número e string: + concatena; - e * fazem conversão numérica.
{
  const primeiroValor = 5;
  const segundoValor = '5';

  console.log("5 + '5':", primeiroValor + segundoValor); // '55' (string)
  console.log("5 - '5':", primeiroValor - segundoValor); // 0
  console.log("5 * '5':", primeiroValor * segundoValor); // 25
}

// 3. Operações com os números 5 e 2.
{
  const primeiroValor = 5;
  const segundoValor = 2;

  console.log('5 + 2:', primeiroValor + segundoValor); // 7
  console.log('5 - 2:', primeiroValor - segundoValor); // 3
  console.log('5 * 2:', primeiroValor * segundoValor); // 10
}

// 4. Operações com o número 5 e a string '2'.
{
  const primeiroValor = 5;
  const segundoValor = '2';

  console.log("5 + '2':", primeiroValor + segundoValor); // '52' (string)
  console.log("5 - '2':", primeiroValor - segundoValor); // 3
  console.log("5 * '2':", primeiroValor * segundoValor); // 10
}

// 5. Divisão: o resultado pode ter parte decimal.
{
  const primeiroValor = 9;
  const segundoValor = 2;

  console.log('10 / 2:', 10 / segundoValor); // 5
  console.log('9 / 2:', primeiroValor / segundoValor); // 4.5
}

// 6. Resto da divisão e verificação de paridade de números inteiros.
{
  const primeiroValor = 9;
  const segundoValor = 2;

  console.log('9 % 2:', primeiroValor % segundoValor); // 1
  console.log('10 % 2 === 0:', 10 % 2 === 0); // true: 10 é par.
  console.log('7 % 2 === 0:', 7 % 2 === 0); // false: 7 é ímpar.
}

// 7. Complemento: converter a string explicitamente para somar.
{
  const primeiroValor = 5;
  const segundoValor = '2';

  console.log("5 + Number('2'):", primeiroValor + Number(segundoValor)); // 7
  console.log('Tipo original de segundoValor:', typeof segundoValor); // string
}

// 8. Complemento: porcentagem usa multiplicação e divisão, não o operador %.
{
  const valor = 200;
  const taxa = 10;
  const parteDoValor = (valor * taxa) / 100;

  console.log('10% de 200:', parteDoValor); // 20
}
