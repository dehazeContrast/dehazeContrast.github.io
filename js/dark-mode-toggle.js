//rabbit logo interaction
document.addEventListener("DOMContentLoaded", () => {
    const rabbit = document.getElementById("rabbit-icon");

    rabbit.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});

//showing and hiding sidebar
function showSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    const hideOnMobile = document.querySelector('.hideOnMobile')
    hideOnMobile.style.display = 'none'
}
function hideSideBar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
let toggle = true;
document.getElementById("hamburger").addEventListener("click", () => {
    if (toggle) {
        showSideBar();
    } else {
        hideSideBar();
    }
    toggle = !toggle;
});

