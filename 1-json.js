const fs = require('fs')
// const book = {
//     title:'Book',
//     description:'This is test book'
// }

// fs.writeFileSync('1-json.json',JSON.stringify(book))

// const ss = fs.readFileSync('1-json.json')
// const parsedData = JSON.parse(ss)
// console.log(parsedData.title)

const fileData = fs.readFileSync('1-json.json');
const parsedData = JSON.parse(fileData);
console.log(parsedData);
parsedData.name = 'pugazh'
parsedData.age = 27

const dataToBeSaved = JSON.stringify(parsedData)
fs.writeFileSync('1-json.json',dataToBeSaved)


