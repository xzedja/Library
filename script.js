let myLibrary = []

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        return name + " " + author + " " + pages + " " + read;
    }
}

let TKAMB = new Book("To Kill a Mockingbird", "Harper Lee", 234, true);
myLibrary.push(TKAMB);


console.log(myLibrary[0].info());

function addBookToLibrary() {
    
}