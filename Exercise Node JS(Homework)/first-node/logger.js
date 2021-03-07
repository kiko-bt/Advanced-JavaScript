const show = require('./script');
const fs = require('fs');


const dataFile = "./books.json";
const resultFile = "filteredByAuthor.txt";
const resultFileTwo = "filteredByBook.txt";
const resultFileThree = "conniesBooks.txt";


fs.readFile(dataFile, "utf-8", function(error, data){
    try {
        data = JSON.parse(data);
        console.log(data);
        data.forEach((book, index) => {
            if(book.author.includes('China')) {
               const text = `${index + 1}. Author: ${book.author} Title: ${book.title} \n`;
               show.appendText(text, resultFile);
            } 
            })
    } catch(error) {
        console.log(error);
    }
});




fs.readFile(dataFile, "utf-8", function(error, data){
    try {
        data = JSON.parse(data);
        console.log(data);
        data.forEach((book, index) => {
            if(book.title[0] === 'T') {
               const text = `${index + 1}. Author: ${book.author} Title: ${book.title} \n`;
               show.appendText(text, resultFileTwo);
            } 
            })
    } catch(error) {
        console.log(error);
    }
});



fs.readFile(dataFile, "utf-8", function(error, data){
    try {
        data = JSON.parse(data);
        console.log(data);
        data.forEach((book, index) => {
            if(book.author.includes('Connie Willis')) {
               const text = `${index + 1}. ${book.title} \n`;
               show.appendText(text, resultFileThree);
            } 
            })
    } catch(error) {
        console.log(error);
    }
});




fs.readFile(resultFileThree, "utf-8", function(error, data){
    try {
        data.sort((a, b) => b - a);
    } catch (error) {
        console.log('ERROR' + error)
    }
});










