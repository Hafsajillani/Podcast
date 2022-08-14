'use strict';
const elemToggleFunc = function(elem) {
    elem.classList.toggle("active");
}
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navToggleBtn, overlay];

for (let i = 0; i < navElemArr.length; i++){
    navElemArr[i].addEventListener("click", function(){
        elemToggleFunc(navbar);
        elemToggleFunc(overlay);
    })
}

const header = document.querySelector("[data-header]");
let lastScrollPosition = 0;

window.addEventListener("scroll", function(){

    let scrollPosition = window.pageYOffset;

    if (scrollPosition > lastScrollPosition) {
        header.classList.remove("active");
    } else {
        header.classList.add("active");
    }
    lastScrollPosition = scrollPosition  < 0 ? 0 : scrollPosition;
});

const input = document.querySelector("[data-input]");
const submitBtn = document.querySelector("[data-submit]");

input.addEventListener("input", function (){
    if (input.checkValidity()){
        submitBtn.removeAttribute("disabled");
    } else {
        submitBtn.setAttribute("disabled", "")
    }
})

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
    this.window.scrollY > 200 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");
})