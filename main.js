
let ids = ["1Pl-RxZXzsh-6kg1sQA8XqdSNeOX7Y5cT"]
let baseurl = "https://drive.google.com/uc?export=view&id="
const exemplos = ["bb1.jpg", "bb2.jpg"];
let elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function removeImgPlay(){
    let inv = document.createAttribute("id");
    let play = document.getElementById("play").id = "inv"
}
function adicionaquadroImagens(){
    let img = document.createElement("IMG");
    let id = document.createAttribute("id");
    id.value = "imagem"
    img.setAttributeNode(id);
    document.getElementById('root').appendChild(img);
}

function trocaImagem() {
    let index = Math.floor(Math.random() * exemplos.length)
    document.getElementById("imagem").src = `${exemplos[index]}`
}
function slide() {
    trocaImagem()
    setInterval(() => {
        trocaImagem()
    }
        , 4000)
}
function play() {
    openFullscreen()
    removeImgPlay()
    adicionaquadroImagens()
    slide()
}