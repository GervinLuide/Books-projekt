ui = new UI();
ls = new LS();

// event elements
const form = document.querySelector("#lisa-raamat");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");

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

