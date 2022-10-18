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

        list.appendChild(booklistrow);

    }
})

function deleteTask(e){
    if(e.target.textContent == 'X'){
        if(confirm('Are you sure to delete this task?')){
            e.target.parentElement.parentElement.remove()
        }
    }
}


