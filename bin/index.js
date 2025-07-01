#!/usr/bin/env node

const { program } = require('commander');
const path = require('path');
const { convertExcelToJson } = require('../lib/converter');
const fs = require('fs');

program
  .name('excel2json')
  .description('Converte arquivos Excel (.xlsx) para JSON agrupando por abas')
  .argument('<arquivo>', 'Caminho para o arquivo Excel')
  .option('-o, --output <arquivo>', 'Arquivo de saída JSON')
  .helpOption('-h, --help', 'Exibe ajuda detalhada')
  .addHelpText('after', `

Exemplos:
  $ excel2json planilha.xlsx
  $ excel2json planilha.xlsx -o resultado.json
`)
  .action((arquivo, options) => {
    try {
      const filePath = path.resolve(arquivo);
      if (!fs.existsSync(filePath)) {
        console.error(`\u274C Arquivo não encontrado: ${filePath}`);
        process.exit(1);
      }
      const resultado = convertExcelToJson(filePath);
      if (options.output) {
        const outputPath = path.resolve(options.output);
        try {
          fs.writeFileSync(outputPath, JSON.stringify(resultado, null, 2), 'utf-8');
          console.log(`\u2705 JSON gerado com sucesso em: ${outputPath}`);
        } catch (err) {
          console.error(`\u274C Erro ao salvar o arquivo de saída: ${err.message}`);
          process.exit(2);
        }
      } else {
        console.log(JSON.stringify(resultado, null, 2));
      }
    } catch (err) {
      if (err.message.includes('Unsupported file')) {
        console.error('\u274C Formato de arquivo não suportado. Utilize arquivos .xlsx válidos.');
      } else {
        console.error(`\u274C Erro ao processar o arquivo: ${err.message}`);
      }
      process.exit(3);
    }
  });

if (process.argv.length <= 2) {
  program.help();
}

program.parse();