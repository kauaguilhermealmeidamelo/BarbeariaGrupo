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
    
    
