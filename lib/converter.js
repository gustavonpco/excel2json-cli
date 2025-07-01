const XLSX = require('xlsx');

function convertExcelToJson(filePath) {
  const workbook = XLSX.readFile(filePath);
  const resultado = {};

  workbook.SheetNames.forEach(sheetName => {
    const worksheet = workbook.Sheets[sheetName];
    const json = XLSX.utils.sheet_to_json(worksheet, { defval: '' });
    resultado[sheetName] = json;
  });

  return resultado;
}

module.exports = {
  convertExcelToJson
};