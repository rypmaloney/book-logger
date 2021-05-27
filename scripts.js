// array of books

let myLibrary = [];


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



//Submitting a new book
submit.addEventListener('click', function () {
    let readStatus = 'unread';
    if (form.read.checked) {
        readStatus = 'read'
    }


    let newBook =
        new book(form.title.value, form.author.value, form.pages.value, readStatus)

    addBookToLibrary(newBook);
    displayLibrary();
    form.reset();


})

//Buttons on the table - event listener
bookTable.addEventListener('click', function (e) {
    let indexNumber = e.target.getAttribute("data")

    //delete button
    if (e.target.classList.contains('delete')) {

        myLibrary.splice(indexNumber, 1);
        displayLibrary();
        
    } else if (e.target.classList.contains('read')) {
        if( myLibrary[indexNumber].read === 'read') {
            myLibrary[indexNumber].read = 'unread'
        }else {
            myLibrary[indexNumber].read = 'read'
        }
        
        
        displayLibrary();

    }


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
    removeChildNodes(bookTable)
    for (i = 0; i < myLibrary.length; i++) {
        let bookRow = document.createElement('tr');
        bookRow.setAttribute('data', i);
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

        let readBtn = document.createElement('button');
        readBtn.setAttribute('data', i);
        readBtn.classList.add('read');

        if (myLibrary[i].read === 'read') {
            readBtn.textContent = 'Mark as unread';
        } else {
            readBtn.textContent = 'Mark as read';
        }

        bookRow.appendChild(readBtn)

        let deletebtn = document.createElement('button');
        deletebtn.setAttribute('data', i);
        deletebtn.classList.add('delete');
        deletebtn.textContent = 'Delete';
        bookRow.appendChild(deletebtn)




    }
}
