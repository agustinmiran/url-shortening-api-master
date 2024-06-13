const nav_menu = document.querySelector("[data-menu='true']");
const nav_open = document.querySelector("[data-open='false']");

nav_menu.addEventListener("click", () => {
    nav_open.classList.toggle("hidden");
    nav_open.classList.toggle("open");
    let data_actual = nav_open.dataset.open;
    nav_open.dataset.open = data_actual === 'true' ? 'false' : 'true'
});