AOS.init();

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