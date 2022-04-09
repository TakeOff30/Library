//Library

const library = document.querySelector(".library");
const userInput = document.querySelector(".userInp");
const bookInput = document.querySelector("#book");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const toLibrary = document.querySelector(".toLib");
const overlay = document.querySelector("#overlay");
let i = 0;
let myLibrary = [];

toLibrary.addEventListener('click', () => {
    addBookToLibrary();
});

const showForm = document.querySelector(".showF");
showForm.addEventListener('click', () => {
    displayForm();
});

const closeForm = document.querySelector(".close-button");
closeForm.addEventListener('click', () => {
    removeForm();
});

function displayForm(){
    userInput.classList.add("active");
    overlay.classList.add("active");
}

function removeForm(){
    userInput.classList.remove("active");
    overlay.classList.remove("active");

    bookInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
}


function Book(name, author, pages, ){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.displayed = false;
}

function addBookToLibrary(){

    let book = new Book(bookInput.value, authorInput.value, pagesInput.value);
    myLibrary.push(book);

    myLibrary.forEach(book => {
        if(!book.displayed){
            displayBook(book);
            book.displayed = true;
        }
    });

    removeForm();

}

function displayBook(book){

    //create a div element with a card class
    //set the data-index attrubute and give it the i value
    //increment the i value for the next book
    //add a child element to the div h2 book name and do the same for author and pages
    //add the div to the library div

    let card = document.createElement("div");
    let bookName = document.createElement("h2");
    let authorName = document.createElement("h2");
    let pagesName = document.createElement("h2");
    let labelRead = document.createElement("label");
    let readButn = document.createElement("input");
    let remButn = document.createElement("button");

    card.classList.add("card");

    card.setAttribute("data-index", i);
    
    bookName.textContent = book.name;
    authorName.textContent = book.author;
    pagesName.textContent = book.pages;
    remButn.textContent = "Remove book";
    remButn.setAttribute("data-index", i);

    labelRead.textContent = "Currently reading:";
    labelRead.setAttribute("for", "reading");
    readButn.setAttribute("id", "reading");
    readButn.setAttribute("type", "checkbox");

    card.appendChild(bookName);
    card.appendChild(authorName);
    card.appendChild(pagesName);
    card.appendChild(labelRead);
    card.appendChild(readButn);
    card.appendChild(remButn);

    i++;

    remButn.addEventListener('click', () => {
        removeBook(remButn.getAttribute("data-index"));
    });

    library.appendChild(card);

}

function removeBook(bookIndex){

    //remove the book from the array depending on the book index
    //look at array managing and how to remove an element efficiently
    //than the choice is between re-rendering all the books from the new array 
    //or finding a way just to remove the book and make the other books adapt

    let card = document.querySelector('[data-index="'+bookIndex+'"]');

    card.style.transform = "scale(0)";
    card.style.display = "none";

    myLibrary.splice(parseInt(bookIndex));

    
    
}

overlay.addEventListener('click', () => {
    removeForm();
});