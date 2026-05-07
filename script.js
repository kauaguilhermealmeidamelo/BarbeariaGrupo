AOS.init();

const cards = document.getElementById('cards');

cards.addEventListener('scroll', () => {
 const isAtEnd = cards.scrollLeft + cards.clientWidth >= cards.scrollWidth - 10
 if (isAtEnd){
    setTimeout(() => {
        cards.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    },200);
 }


})

function scrollLeftCards(){
    cards.scrollBy({
        left: -320,
        behavior: "smooth"
    });
}

function scrollRightCards(){

    cards.scrollBy({
        left: 320,
        behavior: "smooth"
    });
}
    

function abrirCarrinho() {
  document.getElementById("cartSidebar").classList.add("active");
  document.getElementById("cartOverlay").classList.add("active");
}

function fecharCarrinho() {
    document.getElementById("cartSidebar").classList.remove("active");
    document.getElementById("cartOverlay").classList.remove("active");
}

function finalizar() {
    window.alert("seu carrinho está vazio !!! " )
}
