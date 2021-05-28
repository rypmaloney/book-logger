/******VARIABLES*****/
let myLibrary = []; // array of books
const bookList = document.getElementById('bookList');
const bookTable = document.getElementById('bookTable');
const addBookButton = document.getElementById('addBookButton');
const form = document.getElementById('bookForm');
const submit = document.getElementById('submitButton');
const closeButton = document.getElementById('closeButton');
const validStatement = document.createElement('p');


/*******FUNCTIONS******/

//Submit form function
function formSubmit() {
    let readStatus = 'unread';

    //FormValidation goes here
    if (form.title.value.length <= 1 || form.author.value <= 1 ) {
        validStatement.textContent = '*Finish filling out the form'
        validStatement.classList.add('validation');
        form.appendChild(validStatement);



    } else {
        if (form.read.checked) {
            readStatus = 'read'
        };
        let newBook = new book(
            form.title.value,
            form.author.value,
            form.pages.value,
            readStatus
        );
        addBookToLibrary(newBook);
        displayLibrary();
        form.reset();
        form.removeChild(validStatement);
    }
}

//Read button clicked or Delete button clicked
function readOrDelete(e) {

    let indexNumber = e.target.getAttribute("data") //associates row with index of book in array

    //delete button
    if (e.target.classList.contains('delete')) {
        myLibrary.splice(indexNumber, 1);

        //Mark as read/unread button
    } else if (e.target.classList.contains('readbutton')) {
        if (myLibrary[indexNumber].read === 'read') {
            myLibrary[indexNumber].read = 'unread'
        } else {
            myLibrary[indexNumber].read = 'read'
        }
    }
    displayLibrary();
}



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
        readBtn.classList.add('readbutton');


        if (myLibrary[i].read === 'read') {
            bookRow.classList.add('rowRead')
            readBtn.textContent = 'Mark as unread';
            readBtn.classList.add('unread');
            readBtn.classList.add('read');

        } else {
            bookRow.classList.remove('rowRead')
            readBtn.textContent = 'Mark as read';
            readBtn.classList.remove('read');
            readBtn.classList.add('unread');
        }

        bookRow.appendChild(readBtn)

        let deletebtn = document.createElement('button');
        deletebtn.setAttribute('data', i);
        deletebtn.classList.add('delete');
        deletebtn.textContent = 'Delete';
        bookRow.appendChild(deletebtn)




    }
}


/******EVENT LISTENERS*****/

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
    formSubmit()
})

//Buttons on the table - event listener
bookTable.addEventListener('click', function (e) {
    readOrDelete(e)
})
