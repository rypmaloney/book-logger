const bookList = document.getElementById('bookList');
const container = document.getElementById('container');
const addBookButton = document.getElementById('addBookButton');




let myLibrary = [
    {
        author: "Haruki Murakami",
        pages: 370,
        read: "read",
        title: "Colorless Tsukuru Tazaki and His Years of Pilgrimage",
     },
    {
        author: "Haruki Murakami",
        pages: 1100,
        read: "read",
        title: "1Q84",
     }




]; // array of books

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
    for (i = 0; i < myLibrary.length; i++) {
        let bookCard = document.createElement('div');
        bookCard.classList.add('card');
        container.insertBefore(bookCard, addBookButton);
        
        let title = document.createElement('p');
        title.classList.add('title');
        title.textContent = myLibrary[i].title;
        bookCard.appendChild(title);
        
        let author = document.createElement('p');
        author.classList.add('author');
        author.textContent = `by ${myLibrary[i].author}`;
        bookCard.appendChild(author);
        
        let pages = document.createElement('p');
        pages.classList.add('pages');
        pages.textContent = `${myLibrary[i].pages} pages`;
        bookCard.appendChild(pages);
        
  

        
        

    }
}
