var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

var filter = document.getElementById('filter');

filter.addEventListener('keyup',filterItems);
// submit event

form.addEventListener('submit',addItem);

//deleteEvent

itemList.addEventListener('click',removeItem);

function removeItem(e){

    //check if button is clicked
    if(e.target.classList.contains('delete')){

        if(confirm('are you sure')){
            
            var liItem = e.target.parentElement;
            console.log(liItem);

            itemList.removeChild(liItem);
            

        }
    }
}


//add item

function addItem(e){

    e.preventDefault();

    
    // getInput value

    var newItem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');
    // add className
    li.className = 'list-group-item';
    console.log(li);
    li.appendChild(document.createTextNode(newItem));
    
    //create delete button
    var del = document.createElement('button');
    del.className = 'btn btn-danger btn-sm float-right delete';
    del.appendChild(document.createTextNode('X'));

    //append button to the list
    li.appendChild(del);

    itemList.appendChild(li);


}

//filter items

function filterItems(e){
    // convert text to lowercase

    var textTillNow = e.target.value.toLowerCase();
    console.log(textTillNow);

    var items = itemList.getElementsByTagName('li');
    console.log(items);

    //convert to an array

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        console.log('text content ' +itemName);
        if(itemName.toLowerCase().indexOf(textTillNow) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
       
    })
}