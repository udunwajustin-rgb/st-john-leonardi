document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menuButton");
    const mainNav = document.getElementById("mainNav");

    if (menuButton && mainNav) {

        menuButton.addEventListener("click", function () {

            mainNav.classList.toggle("show");

            if (mainNav.classList.contains("show")) {
                menuButton.innerHTML = "✕";
            } else {
                menuButton.innerHTML = "☰";
            }

        });

    }


    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll("#mainNav a");

    navLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

});