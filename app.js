ui = new UI();
ls = new LS();

// event elements
const form = document.querySelector("#lisa-raamat");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");
const bookList = document.querySelector(".book-list")

// tasklist x click event
bookList.addEventListener("click", deleteBook)


//events
//form submit event
form.addEventListener("click", addBook);

function addBook(e){
    //create a new object book with input value
    const book = new Book(titleInput.value, authorInput.value, isbnInput.value);
    console.log(book)
    //add task value to the visual by UI object
    ui.addBook(book.title, book.author, book.isbn);
    book.addedToUI()
    // add task value to the LS by LS object

    ls.addBook(book);
    e.preventDefault();

}

function deleteBook(e){
    console.log("töötab app.js")
    let book = e.target.parentElement.parentElement;
    console.log(book)
    ui.deleteBook(book);

    let bookISBN = e.target.parentElement.previousElementSibling
    let bookAuthor = bookISBN.previousElementSibling
    let bookTitle = bookAuthor.previousElementSibling
    const books = new Book(bookTitle.textContent, bookISBN.textContent, bookAuthor.textContent)
    console.log(books)
    ls.deleteBook(books);

}
