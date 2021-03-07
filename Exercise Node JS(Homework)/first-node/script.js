const fs = require('fs');

function addText(text, path) {
    fs.writeFileSynx(path, text, function(error){
        if(error) {
            console.log('Error: ', error);
        } else {
            console.log('The text was written in the file successfully!');
        }
    });
}


function appendText(text, path) {
    fs.appendFileSync(path, text, function(error){
        if(error) {
            console.log("Error: ", error);
        } else {
            console.log('The text was appended in the file successfully');
        }
    });
}


function readText(path) {
    return fs.readFileSync(path, { encoding: 'utf-8' })
}

module.exports = {
    addText,
    appendText,
    readText
}