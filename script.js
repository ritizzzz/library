let myLibrary = [];



document.querySelector('.openForm').addEventListener('click', ()=>{
  document.querySelector('form').style.transform = 'scale(1)';  
  document.querySelector('.overlay').classList.add('overlay-active');
})

document.querySelector('.overlay').addEventListener('click', ()=>{
  document.querySelector('form').style.transform = 'scale(0)';  
  document.querySelector('.overlay').classList.remove('overlay-active');
})
 


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