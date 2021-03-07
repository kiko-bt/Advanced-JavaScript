let input1 = $('#text');
let input2 = $('#color');
let button = $('#btn');
let textHeader = $('#header');


button.on('click', function(){
    if (input1.value === '') {
        alert('Write text and select a color')
    }
    else {
        textHeader.html(`<h1 style="color: ${color.value}">${text.value}</h1>`)
    }
});



