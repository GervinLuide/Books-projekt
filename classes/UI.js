class UI {
    addBook(title, author, isbn) {
        const list = document.querySelector(".book-list")
        const booklistrow = document.createElement("tr");

        const newTitle = document.createElement("td");
        newTitle.innerHTML = title;
        booklistrow.appendChild(newTitle);
        const newAuthor = document.createElement("td");
        newAuthor.innerHTML = author;
        booklistrow.appendChild(newAuthor);
        const newibms = document.createElement("td");
        newibms.innerHTML = isbn;
        booklistrow.appendChild(newibms);

        //create link
        const newlink = document.createElement("td");
        const link = document.createElement("a");
        link.className = "secondary-content";
        link.appendChild(document.createTextNode("X"));
        link.setAttribute("href", "#");
        //add link to list item
        newlink.appendChild(link);
        booklistrow.appendChild(newlink);
        list.appendChild(booklistrow)

    }

    deleteBook(book){
        let bookIndex = book.rowIndex;
        if(book.lastChild.innerText == "X"){
            if(confirm("Do you want to delete this book?")){
                bookList.deleteRow(bookIndex)
            }
        }

    }
}

