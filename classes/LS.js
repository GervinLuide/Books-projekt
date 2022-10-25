class LS {
    addBook(book){
        // vaata, kas LS sisaldab juba midagi
        let books;
        if(localStorage.getItem("books") === null){
            // ei sisaldanud, tühi
            books = [];
        } else {
            // sisaldas, ime sisse
            books = JSON.parse(localStorage.getItem("books"));
        }
        // lükka uus raamat järjendisse
        books.push(book);
        // kupata kogu jura uuesti LSi
        localStorage.setItem("books", JSON.stringify(books));
        //log to console that task is added to LS
        book.addedToLS();
    }

}