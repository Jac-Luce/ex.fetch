// https://striveschool-api.herokuapp.com/api/deezer/search?q=INSERISCIQUIUNAQUERY

/*Fetch per inserire gli album di Eminem*/

let eminemDiv = document.getElementById("eminem");
eminemDiv.classList.remove("d-none");

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
.then((response) => response.json())
.then((json) => {
    let music = json.data
    for (let i = 0; i < music.slice(0, 4).length; i++){
        let element = music[i]
        let eminemSection = document.getElementById('eminemSection');
        let card = document.createElement('div');
        card.classList=['card'];
        let cardBody = document.createElement('div');
        cardBody.classList = ['card-body p-0'];
        let image = document.createElement('img');
        image.src = element.album.cover;
        cardBody.appendChild(image);
        card.appendChild(cardBody);
        eminemSection.appendChild(card);
    }
})
.catch((err) => console.log("Error detected: ", err));

/*Fetch per inserire gli album dei Metallica */

let metallicaDiv = document.getElementById("metallica");
metallicaDiv.classList.remove("d-none");

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
.then((response) => response.json())
.then((json) => {
    let music = json.data
    for (let i = 0; i < music.slice(0, 4).length; i++){
        let element = music[i]
        let metallicaSection = document.getElementById('metallicaSection');
        let card = document.createElement('div');
        card.classList=['card'];
        let cardBody = document.createElement('div');
        cardBody.classList = ['card-body p-0'];
        let image = document.createElement('img');
        image.src = element.album.cover;
        cardBody.appendChild(image);
        card.appendChild(cardBody);
        metallicaSection.appendChild(card);
    }
})
.catch((err) => console.log("Error detected: ", err));

/*Fetch per inserire gli album dei Queen */

let queenDiv = document.getElementById("queen");
queenDiv.classList.remove("d-none");

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
.then((response) => response.json())
.then((json) => {
    let music = json.data
    for (let i = 0; i < music.slice(0, 4).length; i++){
        let element = music[i]
        let queenSection = document.getElementById('queenSection');
        let card = document.createElement('div');
        card.classList=['card'];
        let cardBody = document.createElement('div');
        cardBody.classList = ['card-body p-0'];
        let image = document.createElement('img');
        image.src = element.album.cover;
        cardBody.appendChild(image);
        card.appendChild(cardBody);
        queenSection.appendChild(card);
    }
})
.catch((err) => console.log("Error detected: ", err));