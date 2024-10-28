

const hamMenu = document.querySelector(".hammenu");

const offScreenMenu = document.querySelector(".offscreenmenu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});