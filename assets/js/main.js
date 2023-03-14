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
//Kontaktai
let colorRed = document.getElementById('color');
 console.log(colorRed.lastChild);
 colorRed.lastChild.style.color = 'orange';


 //Accordion
 const accordion = document.getElementsByClassName('card-body');

 for (i = 0; i< accordion.length; i++ ) {
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
 };