// navbar
var toggleStatus = 1;
function toggleMenu() {
    if (toggleStatus == 1) {
        document.getElementById("menu").style.left = "-30vw";
        toggleStatus = 0;
    }
    else if (toggleStatus == 0) {
        document.getElementById("menu").style.left = "0";
        toggleStatus = 1;
    }
}
// scroll suave 
// peganmdo todos os botões de classe menu
var menuItens = document.querySelectorAll('.menu a[href^="#"]');
console.log(menuItens);
// verificando cada item
menuItens.forEach(function (iten) {
    // adicionando o evento de click
    iten.addEventListener('click', ScrollSmooth);
});
// função scroll suave que trabalha evento
// function ScrollSmooth(event) {
//     // anula os eventos padrões
//     event.preventDefault();
//     // pega o elemento alvo
//     const element = event.target;
//     // pega o atributo
//     const id = element.getAttribute('href');
//     // pega o id e a posição em relação ao topo
//     const to = document.querySelector(id).offsetTop;
//     // console.log(to);
//     window.scroll({
//         top: to,
//         behavior: 'smooth'
//     });
// }
// função que executa scroll suave
function ScrollSmooth(event) {
    // anula evenmtos originais
    event.preventDefault();
    // a função que pega o valor de height de acordo com o limk
    var to = getScrolltoHref(event.target);
    // executa o scrool da janela para o valor de altura (to) com o efeito suave
    window.scroll({
        top: to,
        behavior: 'smooth'
    });
}
// onde capturamos o valor de altura do elmento
function getScrolltoHref(element) {
    // pegamos o id do atributo href referente á ancora ou seja o link de destino
    var id = element.getAttribute('href');
    // console.log(id);
    // usamos o id da ancora para colher a altura de acordo com o id da ancora clicada
    return document.querySelector(id).offsetTop;
}
