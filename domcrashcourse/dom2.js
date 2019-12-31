/* Events with dom manipulation */

var butt = document.getElementById('button').addEventListener('click',buttonClick);
function buttonClick(e){
    // document.getElementById('header-title').textContent = 'changed';
    // document.querySelector('#main').style.backgroundColor = 'red';
 
    // console.log(e);

    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);

    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>'+e.target.id+'</h3>';

    // console.log(e.type);
    //console.log(e.clientX);

    // console.log(e.offsetY);

    //console.log(e.shiftKey);


    

  


}

/**  MOUSE EVENTS  */

 var butt1 = document.getElementById('button');
 // butt1.addEventListener('dblclick',mouseEvent);
 // butt1.addEventListener('mousedown',mouseEvent);
 // butt1.addEventListener('mouseup',mouseEvent);

 var box = document.getElementById('box');
 //box.addEventListener('mouseenter',mouseEvent);
 //box.addEventListener('mouseleave',mouseEvent);
 //box.addEventListener('mouseover',mouseEvent);
   box.addEventListener('mousemove',mouseEvent);
function mouseEvent(e){
    output.innerHTML = '<h3>mouseX: '+ e.offsetX + '</h3<h3>MouseY: '+e.offsetY+'</h3>';
    

    document.body.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',40)';
}

/**   KEYBOARD EVENTS */

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');

//itemInput.addEventListener('keydown',runEvent);
//itemInput.addEventListener('keyup',runEvent);
//itemInput.addEventListener('keypress',runEvent);
//  itemInput.addEventListener('focus',runEvent);
//  itemInput.addEventListener('cut',runEvent);
function runEvent(e){
    console.log('event type :: '+e.type);

    console.log(e.target.value);
    document.getElementById('output').textContent ='<h1>'+ e.target.value + '</h1>';
    
}


var select = document.querySelector('select');
select.addEventListener('change',changeEv);
function changeEv(e){

    console.log(e.target.value);

}


var form = document.querySelector('form');

form.addEventListener('submit',submitEvent);
function submitEvent(e){

    e.preventDefault();
    console.log('Event type :: ' + e.type);

}

var select1 = document.querySelector('select');
select1.addEventListener('change',consol);

function consol(e){
    alert(e.target.value);
}


