function menutoggle(ev) {
    document.querySelector("#main-menu").classList.toggle("show");
}

document
    .querySelector(".menu-icon")
    .addEventListener("click", menutoggle);