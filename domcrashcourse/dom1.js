//examine the document object

//console.dir(document);

console.log(document.domain);

console.log(document.URL);

console.log(document.title);

document.title = 'Title | changed';

console.log(document.doctype);
console.log(document.head);
console.log(document.body);

console.log(document.all);

console.log(document.all[10]);


//document.all[10].textContent = 'hello';

console.log(document.forms);
console.log(document.links);
console.log(document.images);

//selectors __________________________________!!!


//getElementById
var title = document.getElementById('header-title');
console.log(title);

//textContent does not pay attention to inner style
title.textContent = 'hello';

//innerText pays attention to the inner style
title.innerText = 'goodbye';

//innerHTML will not change the original tag
// rather it will append it as the child tag to the called tag
title.innerHTML = '<h3> HELLO </h3>';

var mainHeader  = document.getElementById('main-header');
mainHeader.style.borderBottom = 'solid 3px black';

//GET ELEMENT BY CLASS NAME -----------------!!

var items = document.getElementsByClassName('list-group-item');
console.log(items);


//console.log(typeof(items));
for(var i = 0 ; i < items.length ; i++){
    items[i].style.color = 'white';
}



items[0].style.backgroundColor = 'indigo';
items[1].style.backgroundColor = 'crimson';
items[2].style.backgroundColor = 'yellow';
items[3].style.backgroundColor = 'green';


//GET ELEMENT BY TAG NAME

var tagName = document.getElementsByTagName('li');

console.log(tagName);


//QUERY SELECTOR

var headerNew = document.querySelector('#main-header');
headerNew.style.borderBottom = 'solid 4px grey';

var input = document.querySelector('input');
input.value = 'Hello world';

var submit = document.querySelector('input[type="submit"]');

submit.value = "send";

var item = document.querySelector('.list-group-item');
item.style.color= 'red';

//to fetch last child in the list
var lastChild = document.querySelector('.list-group-item:last-child');
lastChild.style.color = 'blue';

// fetch nth child

var nthChild = document.querySelector('.list-group-item:nth-child(3)');
nthChild.style.color = 'black';

//ALL QUERY SELECTOR

var querySelectorAll = document.querySelectorAll('.list-group-item');

console.log(querySelectorAll);

querySelectorAll[0].style.color  = 'black';
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0 ; i < odd.length ; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
}

var even = document.querySelectorAll('li:nth-child(even)');
for(var i = 0 ; i < even.length ; i++){
    even[i].style.backgroundColor =  '#ccc';
    even[i].style.color = 'black';
}

// Traversing the dom !----------------------------- -----------------------!

//looking at parent node

var itemList = document.querySelector('#items');

// use of parentNode property

console.log(itemList.parentNode);
// will change the background color of the parent i.e main 
itemList.parentNode.style.backgroundColor = '#999';

// to find parent of parent node
console.log(itemList.parentNode.parentNode);

// parent element
console.log(itemList.parentElement);

// childNodes
console.log(itemList.childNodes);

//children
console.log(itemList.children);

// access a specific children
console.log(itemList.children[0]);

itemList.children[0].style.backgroundColor = 'yellow';

//firstChild property
console.log(itemList.firstChild);

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'firstChild';

//lastChild
console.log(itemList.lastChild);

// siblings
// nextSibling

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

// to get previous sibling (element)
console.log(itemList.previousElementSibling);

itemList.previousElementSibling.style.color = 'green';

// creating dom elements now !---------------------------------- -------------------------------------!

//createElement

//create div
var newDiv = document.createElement('div');
console.log(newDiv);

newDiv.className = 'hello';
newDiv.id = 'createdDiv';

//add attribute
newDiv.setAttribute('title','hello div');
console.log(newDiv);


// textNode
 var newDivText = document.createTextNode('Vishal');

 //add this text to div

 newDiv.appendChild(newDivText);
 console.log(newDiv);


 // inserting our div inside our html form

var inserting = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

// insertBefore('what to insert ', 'before what');
inserting.insertBefore(newDiv,h1);

// change the font size

newDiv.style.fontSize = '50px';

var documentNew = document.createElement('p');
var textC = document.createTextNode('self created Text Node');
documentNew.appendChild(textC);
console.log(documentNew);

var insertA = document.querySelector('form');
var insertBe = document.querySelector('form .mr-2');

insertA.insertBefore(documentNew,insertBe);











