let myLibrary = [];
let elements = {
  openFormButton: document.querySelector('.openForm'),
  overlay: document.querySelector('.overlay'),
  form: document.querySelector('form'),
  remove: document.querySelector('.removeBook')
}





elements.openFormButton.addEventListener('click', openForm)

elements.overlay.addEventListener('click', closeForm)
 

function openForm(){
  elements.form.style.transform = 'scale(1)';  
  elements.overlay.classList.add('overlay-active');
}

function closeForm(){
  elements.form.style.transform = 'scale(0)';  
  elements.overlay.classList.remove('overlay-active');
}





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