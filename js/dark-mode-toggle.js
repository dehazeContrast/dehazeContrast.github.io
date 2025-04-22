document.addEventListener("DOMContentLoaded", () => {
    const rabbit = document.getElementById("rabbit-icon");

    rabbit.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});