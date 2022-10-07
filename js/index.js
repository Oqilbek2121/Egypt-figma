let text = document.getElementById('text');
let img = document.getElementById('img-fluid')

window.addEventListener('scroll', function() {
   let value = window.scrollY;

   text.style.top = 15 + value * -0.5 + '%';
})

            
        /* header navbar */
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
};
            