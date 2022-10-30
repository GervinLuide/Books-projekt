class LS {

    getData(title, author, isbn){
        let data;
        if(localStorage.getItem(title, author, isbn) === null){
            data = [];
        } else {
            data = JSON.parse(localStorage.getItem(title, author, isbn));
        }
        return data
    }

    setData(name, data){
        localStorage.setItem(name, JSON.stringify(data));
    }



    addBook(book){
        let books = this.getData("books");
        books.push(book);
        this.setData("books", books);
        book.addedToLS();
    }

  deleteBook(book){
        console.log("ls delete tootab")
        let books = this.getData("books");
        books.forEach(function (booksElement, booksIndex){
            console.log(booksElement.title)
            if(booksElement.title === book.title){
                books.splice(booksIndex, 1);

                }
        })
        this.setData("books", books);
  }
}



