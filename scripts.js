document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offset = 160;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: elementPosition,
                behavior: "smooth"
            });
        }
    });
});

window.addEventListener("scroll", function () {
    const profilePicture = document.querySelector(".profile-tilt img");

    if (profilePicture) {
        const scrollPosition = window.scrollY;
        const maxZoom = 1.3;
        const minZoom = 1.2;

        const zoom = maxZoom - (scrollPosition / window.innerHeight) * (maxZoom - minZoom);

        profilePicture.style.transform = `scale(${zoom})`;
    }
});