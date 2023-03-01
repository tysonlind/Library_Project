console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

class Book {

    id;
    title;
    author;
    isRead;

    constructor (title, author, isRead) {
        this.id = Math.round((Math.random()*1000)+(Math.random()*10000));
        this.title = title;
        this.author = author;
        this.isRead = isRead;
    }
}

class Library {
    constructor (bookCount, books){
        this.bookCount = bookCount;
        this.books = books;
    }
    markRead = function (checkBox, id){
       this.books.array.forEach( book => {
            if (book.id == id){
                book.isRead = true;
                checkBox.checked = true;
                checkBox.disabled = true;
            }
       });
    };
    addBook = function (){
       const inputTitle = document.querySelector("#title");
       const inputAuthor =  document.querySelector("#author");
       const bookIsRead = document.querySelector("#isRead");
       const tableBodyElement = document.querySelector("#bookTable");

       const book = new Book(inputTitle.value, inputAuthor.value,bookIsRead.checked);
       this.books.push(book);

       //create elements
       const tr = document.createElement("tr");
       tr.setAttribute("class",book.id);
       const tdTitle = document.createElement("td");
       tdTitle.textContent = book.title;
       const tdAuthor = document.createElement("td");
       tdAuthor.textContent = book.author;
       const tdIsRead = document.createElement("td");
       tdIsRead.type = "checkbox";
       const buttonTd = document.createElement("button");
       buttonTd.value = book.id;
       buttonTd.textContent = "Delete";
       buttonTd.addEventListener("click", () => {
        const row = document.getElementsByClassName(buttonTd.value);
        if (row){
            row[0].remove();
        }
       })


        const inputIsRead = document.createElement("input");
        inputIsRead.type = "checkbox";
        inputIsRead.checked = book.isRead;
        inputIsRead.disabled = false;

       //appending table divs
       tdIsRead.append(inputIsRead);
       tr.append(tdTitle);
       tr.append(tdAuthor);
       tr.append(tdIsRead);
       tr.append(buttonTd);
       tableBodyElement.append(tr);

       console.log(book.id);

        this.bookCount++;

        //reset input fields
        inputTitle.value = "";
        inputAuthor.value = "";
        bookIsRead.checked = false;

        console.log(this.books);

}}

const bookLibrary = new Library(1,[new Book("Name of the Wind", "Patrick Rothfuss", true)]);

//const addBookButton = document.querySelector("#newBookForm > button");
const newBookForm = document.querySelector("#newBookForm");
newBookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    bookLibrary.addBook();
});