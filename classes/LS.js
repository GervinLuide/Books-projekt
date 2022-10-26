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

}