const finalImg = document.getElementById('finalImg');
const list = document.getElementById('list');
const url = 'https://some-random-apis.herokuapp.com/images/';
const dataItems = document.getElementById('dataItems');

function getRandom() {
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            data.data.map(element => {
                var image = `${element.imagePath}`
                finalImg.innerHTML = `<img src="${url}${image}"/>`
            });
        });
}

fetch(url)
    .then(response => response.json())
    .then((data) => {
        var liItems = "";
        data.data.forEach(element => {
            liItems += `<li onclick="getRandom()" class="listStyle">${element.name}</li>`;
        });
        dataItems.innerHTML = liItems;
    });

function refresh() {
    return location.reload()
}