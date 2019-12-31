// Book class : represents a Book

class Book {
    constructor(title, author, isbn) {

        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }
}

// UI class : Handle UI tasks

class UI {
    static displayBooks() {



        const books = Store.getBooks();
        console.log(books);
        books.forEach((book) => UI.addBookToList(book));
    }


    static addBookToList(book) {

        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');
        row.innerHTML = `<td>${book.title}</td>
                         <td>${book.author}</td>
                         <td>${book.isbn}</td>
                         <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;
        list.appendChild(row);
        //UI.setSuccess();
    }

    static showAlert(message, className) {


        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        //vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000)
    }

    // static successMessage(message,className){


    //     const div =document.createElement('div');
    //     div.className = `alert alert-${className}`;
    //     div.appendChild(document.createTextNode(message));

    //     const container = document.querySelector('.container');
    //     const form = document.querySelector('#book-form');
    //     container.insertBefore(div,form);

    //     //vanish in 3 seconds
    //     setTimeout(()=> document.querySelector('.alert').remove(),3000)
    // }

    

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';

    }

    static deleteBook(el) {

        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
            this.showAlert('successfully deleted from list', 'info');
        }

    }


}

// Store class : Handle Storage

class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
          } else {
            books = JSON.parse(localStorage.getItem('books'));
          }

        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}


// Event : display books

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event : add a book

document.querySelector('#book-form')
    .addEventListener('submit', (e) => {
        // prevent default submit

        e.preventDefault();

        //get form values
        const title = document.querySelector('#title').value;

        const author = document.querySelector('#author').value;

        const isbn = document.querySelector('#isbn').value;


        //validate 

        if (title === '' || author === '' || isbn === '') {

            UI.showAlert('please fill all fields', 'danger');

        } else {

            //instantiate book
            const book = new Book(title, author, isbn);
            console.log(book);

            //add book to list
            UI.addBookToList(book);

            //add book to store
            Store.addBook(book);

            //show success message
            UI.showAlert('successfully added to the list', 'success');

            // to clear fields after submit
            UI.clearFields();

        }


    });

// Event : remove a book

document.querySelector('#book-list').addEventListener('click', (e) => {

    //console.log(e.target);
    UI.deleteBook(e.target);
    

    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    //show delete message
    // UI.showAlert();


});


