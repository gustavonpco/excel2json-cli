# excel2json-cli

<div align="center">
  <a href="https://pixmeacoffee.vercel.app/gustavonpco" target="_blank">
    <img src="https://pixmeacoffee.vercel.app/logo-blue.svg" alt="Doe um café para o criador" width="50" />
  </a>
  <p>Gostou deste projeto? Considere <a href="https://pixmeacoffee.vercel.app/gustavonpco" target="_blank">pagar um café para o criador</a>!</p>
</div>

![npm](https://img.shields.io/npm/v/excel2json-cli)
![license](https://img.shields.io/npm/l/excel2json-cli)

## Descrição

**excel2json-cli** é uma ferramenta de linha de comando (CLI) para converter arquivos Excel (`.xlsx`) em arquivos JSON, agrupando os dados por abas. Ideal para quem precisa transformar planilhas em dados estruturados para uso em sistemas, integrações ou análises.

## Instalação

Recomenda-se o uso do [pnpm](https://pnpm.io/):

```bash
pnpm install -g excel2json-cli
```

Ou, para uso local no projeto:

```bash
pnpm add -D excel2json-cli
```

## Uso

```bash
excel2json <arquivo.xlsx> [opções]
```

### Argumentos

- `<arquivo.xlsx>`: Caminho para o arquivo Excel a ser convertido.

### Opções

- `-o, --output <arquivo>`: Caminho do arquivo de saída para salvar o JSON gerado. Se omitido, o resultado será impresso no console.

### Exemplos

Converter um arquivo e imprimir o resultado no console:

```bash
excel2json planilha.xlsx
```

Converter e salvar o resultado em um arquivo:

```bash
excel2json planilha.xlsx -o resultado.json
```

## Como funciona

- Cada aba da planilha é convertida em um array de objetos JSON.
- O resultado final é um objeto onde cada chave é o nome da aba e o valor é o array de dados daquela aba.

Exemplo de saída:

```json
{
  "Aba1": [
    { "Coluna1": "valor1", "Coluna2": "valor2" }
  ],
  "Aba2": [
    { "ColunaA": "valorA", "ColunaB": "valorB" }
  ]
}
```

## Dependências

- [commander](https://www.npmjs.com/package/commander)
- [xlsx](https://www.npmjs.com/package/xlsx)

## Licença

MIT

## Autor

Gustavo Napomuceno