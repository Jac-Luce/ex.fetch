// https://striveschool-api.herokuapp.com/api/deezer/search?q=INSERISCIQUIUNAQUERY
let eminemH2 = document.getElementById("eminem");
eminemH2.classList.remove("d-none");


fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
.then((response) => response.json())
.then((json) => console.log(json))
.catch((err) => console.log("Error detected: ", err));


let eminemSection = document.getElementById('eminemSection');
let card = document.createElement('div');
card.classList=['card'];
let cardBody = document.createElement('div');
cardBody.classList = ['card-body p-0'];
let image = document.createElement('img');
image.src = json.album.cover;
cardBody.appendChild(image);
card.appendChild(cardBody);
eminemSection.appendChild(card);





//edoardo midali  su youtube per js

/*
function artista(){
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=")
    .then((response) => response.json())
    .then((json) => console.log(json));
}
artista();
function creaCard (artista, json) {
    let container = document.getElementById(artista);
    container.classList=['d-flex flex-column'];
    let div = document.getElementById(artista+'Section');

    let card = document.createElement('div');
    card.classList = ['card'];
    let cardBody = document.createElement('div');
    cardBody.classList = ['card-body p-0'];
    let image = document.createElement('img');
    image.src = json.album.cover;
    cardBody.appendChild(image);
    card.appendChild(cardBody);
    div.appendChild(card);
}
creaCard(eminem, json);


function album() {
    const artisti = ['eminem', 'metallica', 'queen'];
    for (const artista of artisti) {
        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=${artista}")
        .then(response => response.json())
        .then(json => {
            for (let i = 0; i < 4; ++i) {
                console.log(json.data[i])
                creaCard(artista, json.data[i]);
            }
        });
    }
} */