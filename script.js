let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offSet = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offSet && top < offSet + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
}

const loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})

gsap.from("header", {
    y:-40,
    duration:1,
    delay:0.5,
    opacity:0
});

gsap.from(".home-content" ,{
    x:-800,
    duration:1,
    delay:0.5,
    scale:0.2
});

gsap.from(".home-img" ,{
    x:800,
    duration:1,
    delay:0.5,
    scale:0.2
})