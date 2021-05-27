// array of books

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
        read: "unread",
        title: "1Q84",
     }




];




const bookList = document.getElementById('bookList');
const bookTable = document.getElementById('bookTable');
const addBookButton = document.getElementById('addBookButton');

const form = document.getElementById('bookForm');
const submit = document.getElementById('submitButton');
const closeButton = document.getElementById('closeButton');



//Open Sidebar
addBookButton.addEventListener('click', function () {
    document.getElementById('formContainer').style.width = '400px';
    document.getElementById('main').style.marginLeft = '400px';
});


//Close Sidebar
closeButton.addEventListener('click', function () {
    document.getElementById('formContainer').style.width = '0px';
    document.getElementById('main').style.marginLeft = '0px';
});




submit.addEventListener('click', function () {

    let newBook =
        new book(form.title.value, form.author.value, form.pages.value, form.read.value)

    addBookToLibrary(newBook)
    removeChildNodes(bookTable)
    displayLibrary()
    form.reset()


})






//Remove all children
function removeChildNodes(parent) {
    while (parent.children[1]) {
        parent.removeChild(parent.children[1]);
    }
}



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
        let bookRow = document.createElement('tr');
        bookTable.appendChild(bookRow);

        let title = document.createElement('td');
        title.textContent = myLibrary[i].title;
        bookRow.appendChild(title);

        let author = document.createElement('td');
        author.textContent = myLibrary[i].author;
        bookRow.appendChild(author);

        let pages = document.createElement('td');
        pages.textContent = myLibrary[i].pages;
        bookRow.appendChild(pages);

        let read = document.createElement('td');
        read.textContent = myLibrary[i].read;
        bookRow.appendChild(read);




    }
}
