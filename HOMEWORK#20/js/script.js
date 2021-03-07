let table = $('#table');
let button = $('#btn');
let tbody = $('#characters');



button.on('click', function(){
    function printCharacters(printC, element){
        $.ajax({
            url: `${printC}`,
            success: function(data) {
                let characters = $(`#id_${element}`)
                characters.html(`${data.name}`)
            }
        })
    }    
    $.ajax({
        url:`https://swapi.co/api/films/`,
        method: "GET",
        dataType: "json",
        success: function(data) {
            for(let name of data.results) {
                table.append(`<tr><td>${name.title}</td>
                <td>${name.director}</td>
                <td>${name.producer}</td>
                <td>${name.episode_id}</td>
                <td>${name.url}</td>
                <td>${name.characters.length}</td>
                <td>${name.planets.length}</td>
                <td>${name.starships.length}</td>
                <td>${name.vehicles.length}</td>
                <td>${name.species.length}</td>
                <td id="id_${name.episode_id}">${printCharacters(name.characters[0], name.episode_id)}</td></tr>`);
            }
        }
    })
});





