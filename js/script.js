// SCROLL REVEAL
window.sr = ScrollReveal({ reset: true });
sr.reveal('header', {duration: 2000});
sr.reveal('section.inicio .interface', {duration: 2000});
sr.reveal('section.sobre .interface', {duration: 2000});
sr.reveal('section.localizacao .interface', {duration: 2000});
sr.reveal('section.redes-sociais .interface', {duration: 2000});
sr.reveal('footer', {duration: 2000});

// OPEN MENU
let btnMenu = document.querySelector(".open-menu");
let menu = document.querySelector(".menu-mobile");
let overlay = document.querySelector(".overlay-menu")


btnMenu.addEventListener("click", ()=> {
    menu.classList.add("abrir-menu");
});

menu.addEventListener("click", ()=> {
    menu.classList.remove("abrir-menu");
});

overlay.addEventListener("click", ()=> {
    menu.classList.remove("abrir-menu");
});