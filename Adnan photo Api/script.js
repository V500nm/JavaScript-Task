const images = document.getElementById('images');
const list = document.getElementById('list');
const url = 'https://some-random-apis.herokuapp.com/images/';

function random() {
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            data.data.map(element => {
                var image = `${element.imagePath}`
                var text = `${element.name}`
                images.innerHTML = `<img src="${url}${image}"/>`
                list.innerHTML = text;
            });
        });
}

fetch(url)
    .then(response => response.json())
    .then((data) => {
        var liItems = "";
        data.data.forEach(element => {

            liItems += `<li onclick="random()" class="listStyle">${element.name}</li>`;


        });
        document.getElementById('dataItems').innerHTML = liItems;

    });

function refresh() {
    return location.reload()
}