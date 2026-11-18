# Operadores matemáticos

Anotações de estudo sobre cálculos com JavaScript: soma, subtração, multiplicação, divisão e resto da divisão. Esta aula está organizada separadamente das anteriores.

## Operadores apresentados

| Operador | Operação | Exemplo | Resultado |
| --- | --- | --- | --- |
| `+` | Adição, quando os dois valores são números | `5 + 5` | `10` |
| `-` | Subtração | `5 - 2` | `3` |
| `*` | Multiplicação | `5 * 2` | `10` |
| `/` | Divisão | `9 / 2` | `4.5` |
| `%` | Resto da divisão | `9 % 2` | `1` |

A divisão não descarta a parte decimal: `10 / 2` retorna `5`, enquanto `9 / 2` retorna `4.5`.

## Números e strings nas operações

Nos exemplos da aula, `5` é um número e `'5'` é uma string. Essa diferença muda o comportamento de `+`:

```javascript
console.log(5 + 5);   // 10: soma de dois números.
console.log(5 + '5'); // '55': concatenação, ou união dos textos.
```

Já `-` e `*` convertem implicitamente as strings numéricas dos exemplos para realizar os cálculos. Essa conversão durante a operação não altera o valor original da variável.

| Primeiro valor | Segundo valor | Resultado de `+` | Resultado de `-` | Resultado de `*` |
| --- | --- | --- | --- | --- |
| `5` | `5` | `10` | `0` | `25` |
| `5` | `'5'` | `'55'` (string) | `0` | `25` |
| `5` | `2` | `7` | `3` | `10` |
| `5` | `'2'` | `'52'` (string) | `3` | `10` |

Para somar um número a uma string numérica, podemos converter explicitamente a string com `Number`:

```javascript
const primeiroValor = 5;
const segundoValor = '2';

console.log(primeiroValor + Number(segundoValor)); // 7
console.log(typeof segundoValor); // string: a variável original continua igual.
```

Nem toda string representa um número: por exemplo, `Number('texto')` resulta em `NaN`, que indica um valor numérico inválido.

## Resto da divisão e paridade

O operador `%` calcula o **resto da divisão**, não a porcentagem.

```javascript
console.log(9 % 2); // 1: 9 = 2 * 4 + 1.
```

Para números inteiros, podemos verificar se o número é par comparando o resto da divisão por dois com zero:

```javascript
console.log(10 % 2 === 0); // true: 10 é par.
console.log(7 % 2 === 0);  // false: 7 não é par; é ímpar.
```

O resultado de `%` é numérico; a comparação `=== 0` produz o resultado booleano.

## Complemento: calculando uma porcentagem

Para encontrar uma porcentagem de um valor, use multiplicação e divisão:

```javascript
const valor = 200;
const taxa = 10;
const parteDoValor = (valor * taxa) / 100;

console.log(parteDoValor); // 20: corresponde a 10% de 200.
```

## Como executar

O arquivo [exemplos.js](./exemplos.js) reúne as variações de valores apresentadas na aula. Cada exemplo está em um bloco separado para evitar redeclarar as mesmas constantes no mesmo escopo. A conversão explícita e a porcentagem foram adicionadas como complementos.

Com uma versão atual do Node.js instalada, execute na pasta do repositório:

```bash
node exemplos.js
```

## Para praticar

- Antes de executar, tente prever os resultados de `5 + '2'` e `5 - '2'`.
- Troque os valores de uma das divisões e observe a parte decimal e o resto.
- Use `% 2 === 0` para verificar se outros números inteiros são pares.
- Calcule 15% de 300 usando multiplicação e divisão.
