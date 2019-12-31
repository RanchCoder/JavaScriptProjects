var textBox = document.getElementById('filtering');

var listItem = document.querySelector('ul');

textBox.addEventListener('keyup', textBoxFilter);


function textBoxFilter(e) {

    // to collect all the list items
    var li = listItem.getElementsByTagName('li');
    console.log(li);

    var text = e.target.value.toLowerCase();
   
    //all the li is converted to array
    Array.from(li).forEach(function(item) {
        var element = item.firstChild.textContent;
        console.log(element);
        
        if(element.toLowerCase().indexOf(text) != -1){

            item.style.display = 'block';

        }else{
            item.style.display  = 'none';
        }



    })




}