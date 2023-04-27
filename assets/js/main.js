let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click',function(){
    modalContainer.style.display = 'block';

}
);
closeBtn.addEventListener('click',function(){
    modalContainer.style.display = 'none';

});

window.addEventListener('click', function(e){
    if(e.target === modalContainer){
        modalContainer.style.display = 'none';

    }
});



 //Accordion
 const accordion = document.getElementsByClassName('card-body');

 for (i = 0; i< accordion.length; i++ ) {
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
 };


 //hamburger

 const hamburger = document.querySelector(".hamburger");
 const navMenu = document.querySelector(".nav-menu");

 hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
 })

 document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
 }))