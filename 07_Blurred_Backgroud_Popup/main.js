const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const popup_container = document.querySelector(".popup-container");

const closeIcon = document.querySelector(".close-icon");

// button click
btn.addEventListener("click", () => {
    // add active class
    container.classList.add("active");
    // remove active class
    popup_container.classList.remove("active");
});

// close icon click
closeIcon.addEventListener("click", () => {
    // remove active class
    container.classList.remove("active");
    // add active class
    popup_container.classList.add("active");
});