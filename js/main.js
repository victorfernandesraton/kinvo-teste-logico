// valores iniciais
// alerar atributos
function alter_content_by(ref,sheet,value) {
    for (let index = 0; index < document.querySelectorAll(ref).length; index++) {
        document.querySelectorAll(ref)[index].style[sheet] = value;            
    }
}
// navbar atributos
function toggleMenu() {
    if (toggleStatus == null || toggleStatus == 1) {
        document.getElementById("menu").style.left = "-25vw";
        alter_content_by("section","left","5vw");
        alter_content_by("section","width","90vw");
        alter_content_by("section","fontSize","1.2em");
        alter_content_by(".toggleMenu","opacity","0.7");
        alter_content_by(".Questao2","fontSize","1em");
        alter_content_by(".Questao3","fontSize","0.8em");
        alter_content_by(".Questao4","fontSize","0.9em");
        alter_content_by(".modal-content","marginLeft","5vw");
        toggleStatus = 0
    }
    else if (toggleStatus == 0) {
        document.getElementById("menu").style.left = "0";
        alter_content_by("section","left","30vw");
        alter_content_by("section","width","65vw");
        alter_content_by("section","fontSize","1em");
        alter_content_by(".Questao2","fontSize","0.8em");
        alter_content_by(".Questao3","fontSize","0.8em");
        alter_content_by(".Questao4","fontSize","0.8em");
        alter_content_by(".modal-content","marginLeft","30vw");

        toggleStatus = 1;
    }
}
// função que executa scroll suave
function scroll_function() {
        
    var menuItens = document.querySelectorAll('.menu a[href^="#"]');
    menuItens.forEach(function (iten) {
        iten.addEventListener('click', ScrollSmooth);
    });

    function ScrollSmooth(event) {
        event.preventDefault();
        var to = getScrolltoHref(event.target);
        window.scroll({
            top: to,
            behavior: 'smooth'
        });
    }
    function getScrolltoHref(element) {
        var id = element.getAttribute('href');
        return document.querySelector(id).offsetTop;
    }
}

// moldal
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// funçaõ inicializadora
function init() {
    scroll_function();
    alter_content_by("section","left","30vw");
    alter_content_by("section","width","65vw");
    alter_content_by(".modal-content","marginLeft","30vw");
}

// inicializando
init();
// variaveis iniciais
var toggleStatus = 1;