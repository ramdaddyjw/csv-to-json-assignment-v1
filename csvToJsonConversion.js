const path = require('path')
let csvToJson = require('convert-csv-to-json')

let fileInput = path.join(__dirname, 'customer-data.csv')
let fileOutput = path.join(__dirname, 'customer-data.json')

csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInput, fileOutput)

module.exports = 'csvToJsonConversion.js'
