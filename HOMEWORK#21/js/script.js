let table = $('#table');
let button = $('#btn');
let button2 = $('#btn2');
let button3 = $(`#btn3`);


button.on('click', () => {
    $.ajax({
        url:`https://swapi.co/api/planets/?page=1&format=json`,
        method:"GET",
        dataType:"json",
        success: function(url){
            table.html(``);
            for(let planets of url.results) {
                table.append(`<tr><td>${planets.name}</td>
                <td>${planets.population}</td>
                <td>${planets.climate}</td>
                <td>${planets.gravity}</td></tr>`);
            }
        }
    })
})



button2.on('click', () => {
    $.ajax({
        url:`https://swapi.co/api/planets/?format=json&page=2`,
        method: "GET",
        dataType: "JSON",
        success: function(url2) {
            table.html(``);
            for(let planets of url2.results) {
                table.append(`<tr><td>${planets.name}</td>
                <td>${planets.population}</td>
                <td>${planets.climate}</td>
                <td>${planets.gravity}</td></tr>`)
            }
            button2.hide();
            button3.show();
        }
        
    })
});



button3.on('click', () => {
     button2.show();
     $.ajax({
         url: `https://swapi.co/api/planets/?page=1&format=json`,
         method: "GET",
         dataType: "JSON",
         success: function(previous) {
             table.html(``);
             for(let planets of previous.results){
                 table.append(`<tr><td>${planets.name}</td>
                 <td>${planets.population}</td>
                 <td>${planets.climate}</td>
                 <td>${planets.gravity}</td></tr>`)
             }
             button3.hide();
             button2.show();
         }
     })
     
});



