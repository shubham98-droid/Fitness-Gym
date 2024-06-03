const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-links");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".a-navs").forEach(n=>n
    .addEventListener("click",()=>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
)

//form js

document.addEventListener('DOMContentLoaded', function() {
    var joinBtn = document.querySelector('.join-btn');
    var formPopup = document.getElementById('form-popup');
    var closeBtn = document.querySelector('.close-btn');

    joinBtn.addEventListener('click', function() {
        formPopup.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        formPopup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == formPopup) {
            formPopup.style.display = 'none';
        }
    });
});
