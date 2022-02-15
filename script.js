
//Produtos animação seta

var produtos = document.querySelector("#produtos");
var setaDosProdutos = document.querySelector(".setaDosProdutos");

produtos.addEventListener("mouseover", function() {
    setaDosProdutos.style.transform = "rotate(-180deg)";
    setaDosProdutos.style.transition = "0.4s";
});

produtos.addEventListener("mouseout", function(){
    setaDosProdutos.style.transform = "rotate(0deg)";
    setaDosProdutos.style.transition = "0.4s";
});


//Companhia animação seta

var companhia = document.querySelector("#companhia");
var setaDaCompanhia = document.querySelector(".setaDaCompanhia");

companhia.addEventListener("mouseover", function(){
    setaDaCompanhia.style.transform = "rotate(-180deg)";
    setaDaCompanhia.style.transition = "0.4s";
});
companhia.addEventListener("mouseout", function(){
    setaDaCompanhia.style.transform = "rotate(0deg)";
    setaDaCompanhia.style.transition = "0.4s";
});

//Contatos animação seta

var contatos = document.querySelector("#contatos");
var setaDosContatos = document.querySelector(".setaDosContatos");

contatos.addEventListener("mouseover", function(){
    setaDosContatos.style.transform = "rotate(-180deg)";
    setaDosContatos.style.transition = "0.4s";
});
contatos.addEventListener("mouseout", function(){
    setaDosContatos.style.transform = "rotate(0deg)";
    setaDosContatos.style.transition = "0.4s";
});



const botaoAbrirMenu = document.getElementById('botaoAbrirMenu');
const botaoFecharMenu = document.getElementById('botaoFecharMenu');

function aoClicar() {
    const menuPrincipal = document.getElementById('menuPrincipal');
    menuPrincipal.classList.toggle('ativado');
    botaoAbrirMenu.classList.toggle('botaoAbrirMenuAtivado');
    botaoFecharMenu.classList.toggle('botaoFecharMenuAtivado');
}

botaoAbrirMenu.addEventListener('click', aoClicar);
botaoFecharMenu.addEventListener('click', aoClicar);






