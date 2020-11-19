
let ids = ["1Pl-RxZXzsh-6kg1sQA8XqdSNeOX7Y5cT"]
let baseurl = "https://drive.google.com/uc?export=view&id="
const exemplos = ["bb1.jpg", "bb2.jpg"];
let controle = []
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

function limpaRoot() {
    //let root = document.getElementById('root')
    // root.removeChild(root.childNodes[0])
    document.getElementById('play').id = "inv"

}
function adicionaPlay() {
    let root = document.getElementById('root')
    let img = document.createElement("SPAN");
    let id = document.createAttribute("id");
    let onclk = document.createAttribute("onclick")
    onclk.value = "play()"
    id.value = "play"
    img.setAttributeNode(id);
    root.appendChild(img);
}
function adicionaquadroImagens() {
    let img = document.createElement("IMG");
    let id = document.createAttribute("id");
    id.value = "imagem"
    img.setAttributeNode(id);
    document.getElementById('root').appendChild(img);
}

function trocaImagem() {
    if (controle.length === exemplos.length) {
        controle = []; console.log("reset");
    }

    let index = Math.floor(Math.random() * exemplos.length)
    while (controle.includes(index)) {
        index = Math.floor(Math.random() * exemplos.length)
    }
    controle.push(index)
    console.log("index", index);

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
    limpaRoot()
    adicionaquadroImagens()
    slide()
}