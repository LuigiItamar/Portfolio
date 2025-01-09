document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const shrinkThreshold = 50; // Altura em pixels para ativar o efeito de encolhimento

    document.addEventListener("scroll", function () {
        if (window.scrollY > shrinkThreshold) {
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }
    });
});
