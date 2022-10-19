const titlein = document.querySelector("#title")
const authorin = document.querySelector("#author")
const isbnin = document.querySelector("#isbn")
const submit = document.querySelector(".btn")
const list = document.querySelector(".book-list")

list.addEventListener('click', deleteTask)

submit.addEventListener("click", function (){
    if (titlein.value == "" && authorin.value == "" && isbnin.value == ""){
        alert("please fill all");
    } else {

        const booklistrow = document.createElement("tr");

        const newTitle = document.createElement("td");
        newTitle.innerHTML = titlein.value;
        booklistrow.appendChild(newTitle);

        const newAuthor = document.createElement("td");
        newAuthor.innerHTML = authorin.value;
        booklistrow.appendChild(newAuthor);

        const newibms = document.createElement("td");
        newibms.innerHTML = isbnin.value;
        booklistrow.appendChild(newibms);

        const td_x = document.createElement("td")
        const a = document.createElement("a")
        a.appendChild(document.createTextNode("X"))
        a.setAttribute("href", "#")
        td_x.appendChild(a)
        booklistrow.appendChild(td_x);
        addBookLS(titlein.value, authorin.value, isbnin.value)

        list.appendChild(booklistrow);

    }
})

function deleteTask(e){
    if(e.target.textContent == 'X'){
        if(confirm('Are you sure to delete this task?')){
            e.target.parentElement.parentElement.remove()
            let bookIsbn = e.target.parentElement.previousElementSibling
            let bookAuthor = bookIsbn.previousElementSibling
            let bookTitle = bookAuthor.previousElementSibling
            let book = [bookTitle.textContent, bookAuthor.textContent, bookIsbn.textContent]

            deleteBookLS(book)
        }
    }
}



function addBookLS(title, author, isbn) {
    const andmetelist = [title, author, isbn]

    let books
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.push(andmetelist)
    localStorage.setItem('books', JSON.stringify(books))
}

function deleteBookLS(book) {
    const andmetelist = [title, author, isbn]
    let books
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.forEach((bookLS, bookIndex) => {
                if(JSON.stringify(bookLS) === JSON.stringify(book)){
                    books.splice(bookIndex, 1)
                }
            })
            localStorage.setItem('books', JSON.stringify(books))
}




