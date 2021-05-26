const bookList = document.getElementById('bookList');




let myLibrary = []; // array of books

//book constructor
function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
}

//add book to library array
function addBookToLibrary(book) {
    myLibrary.push(book)
}


// loops through myLibrary displaying books
function displayLibrary() {
    for (i = 0; i < myLibrary.length; i++){
        let book = document.createElement('li');
        book.textContent = myLibrary[i].title; 
        bookList.appendChild(book);
        
    }
}