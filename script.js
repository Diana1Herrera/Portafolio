/*typing animate*/

var typed = new Typed(".typing",{
    strings:["Desarrolladora Web FullStack","Desarrolladora Backend","Desarrolladora Frontend","Apasionada por la tecnología"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true

})
// Maneja el aside
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar elementos
    const navToggler = document.querySelector(".nav-toggler"); // Botón de hamburguesa
    const asideMenu = document.querySelector(".aside"); // Menú lateral
    const navLinks = document.querySelectorAll(".nav li a"); // Enlaces del menú

    // Mostrar/Ocultar el menú al hacer clic en el botón de hamburguesa
    navToggler.addEventListener("click", () => {
        asideMenu.classList.toggle("open");
    });

    // Ocultar el menú al hacer clic en un enlace del menú
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            asideMenu.classList.remove("open");
        });
    });
});
