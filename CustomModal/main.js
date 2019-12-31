//get modal elements
var modal = document.getElementById('simpleModal');

//  get open modal button
var modalBtn = document.getElementById('modalBtn');

//get close button
var closeBtn = document.getElementById('closeBtn');

//listen click
modalBtn.addEventListener('click',openModal);

//listen for close click
closeBtn.addEventListener('click',closeModal);


//listen  for outside click
window.addEventListener('click',clickOutside);

// function to close modal if clicked outside of it , i.e on window
function clickOutside(e){
    if(e.target == modal){

        modal.style.display = 'none';
    }
    
}

//open modal
function openModal(){
   modal.style.display = 'block';
}

//close modal
function closeModal(){
    modal.style.display = 'none';
}

