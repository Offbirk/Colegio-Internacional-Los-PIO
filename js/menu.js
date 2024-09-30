/*Este script permite remover las propiedades de un item del menú y agregarselas al item clickeado.*/
let links = document.querySelectorAll('nav a');
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        links.forEach((otherLink) => {
            otherLink.classList.remove('active');
        });
        e.target.classList.add('active');
    });
});