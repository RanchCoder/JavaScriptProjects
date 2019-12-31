//listen for form submit
document.getElementById('myForm').addEventListener('submit',saveBookmark);

// function saveBookmark(e){

//     //get form values
//     var siteName = document.getElementById('siteName').value;
//     console.log(siteName);
    

//     var siteUrl = document.getElementById('siteUrl').value;
    
    


//     if(!validateForm(siteName,siteUrl)){
//         return false;
//     }


//     var bookmark = {
//         name : siteName,
//         url  : siteUrl
//     }

    
   

//     //Test if bookmark is null
//     if(localStorage.getItem('bookmarks') === null){
//         //
//         var bookmarks = [];
//         //Add to array
//         bookmarks.push(bookmark);

//         //Set to localStorage
//         localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

//     }else{
//         var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
//         //add bookmark to array

//         bookmarks.push(bookmark);

//         //re-set it to local Storage
//         localStorage.setItem('bookmarks',JSON.stringify(bookmarks));


//     }


//     document.getElementById('myForm').reset();
     
//     fetchBookmarks();

//     e.preventDefault();
//     console.log('it works');


// }
 
 function saveBookmark(e){

    e.preventDefault();


    var userName = document.getElementById('siteName').value;
    var userUrl = document.getElementById('siteUrl').value;

    if(!validateForm(userName,userUrl)){

        return false;
    }


    //create bookmark object
    var Bookmark = {
        name : userName,
        url  : userUrl
    }

    //check local storage
    if(localStorage.getItem('bookmarks') === null){
        bookmarks = [];

        bookmarks.push(Bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));


    }else{
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(Bookmark);

        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }

    document.getElementById('myForm').reset();
  
    fetchBookmarks();
    

 }






//delete bookmark
function deleteBookmark(url){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //loop through bookmarks

    for(var i = 0 ; i < bookmarks.length; i++){
        if(bookmarks[i].url == url){
            //remove from local storage
            bookmarks.splice(i,1);
        }
    }

    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
     //re fetch bookmarks

     fetchBookmarks();
}

//fetch Bookmarks
function fetchBookmarks(){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    //get output id
    var bookmarkresult = document.getElementById('bookmarkResults');

    //build our output
    bookmarkresult.innerHTML = '';

    for(var i = 0 ; i < bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarkresult.innerHTML += '<div class="well">'+
                                     '<h3>'+name+
                                     '</h3><a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> '+
                                     '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" target="" href="#">delete</a>'+
                                     '</h3>'+
                                     '</div>';
    }
   
}


function validateForm(siteName,siteUrl){
   

    if(!siteName || !siteUrl){
        alert('please fill in the form');
        return false;
    }
   

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);


    if(!siteUrl.match(regex)){
        alert('Please use a valid URL');
        return false;
    }

    return true;
}