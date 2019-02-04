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
        document.getElementById("menu").style.left = "-30vw";
        alter_content_by("section","left","5vw");
        toggleStatus = 0;
    }
    else if (toggleStatus == 0) {
        document.getElementById("menu").style.left = "0";
        alter_content_by("section","left","35vw");
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
// funçaõ inicializadora
function init() {
    scroll_function();
    alter_content_by("section","left","35vw");
}
// inicializando
init();
// variaveis iniciais
var toggleStatus = 1;