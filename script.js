let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.readStatus = function() {
    if(this.read){
        this.read = false;
    }else{
        this.read = true;
    }
}


function addBookToLibrary() {
  // do stuff here
}