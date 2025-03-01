document.addEventListener("DOMContentLoaded", function() {
    console.log("Strona załadowana - Skrypt działa!");

    // Example of a small interaction
    const btns = document.querySelectorAll(".btn");
    btns.forEach(btn => {
        btn.addEventListener("mouseover", function() {
            btn.style.backgroundColor = "#ff3300";
        });
        btn.addEventListener("mouseout", function() {
            btn.style.backgroundColor = "#ff6600";
        });
    });
});

function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
}