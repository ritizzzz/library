let myLibrary = [];
let elements = {
  openFormButton: document.querySelector('.openForm'),
  overlay: document.querySelector('.overlay'),
  form: document.querySelector('form'),
  remove: document.querySelector('.removeBook'),
  addbook: document.querySelector('.addBook'),
  cardcontainer: document.querySelector('.card-container'),
}

elements.openFormButton.addEventListener('click', openForm)
elements.overlay.addEventListener('click', closeForm)
elements.addbook.addEventListener('click', addBookToLibrary)

let formValues = {
  title: document.querySelector('#title'),
  author: document.querySelector('#author'),
  pages: document.querySelector('#pages'),
  read: document.querySelector('#read')
}



 

function openForm(){
  elements.form.style.transform = 'scale(1)';  
  elements.overlay.classList.add('overlay-active');
}

function closeForm(){
  elements.form.style.transform = 'scale(0)';  
  elements.overlay.classList.remove('overlay-active');
}


function addBookToLibrary() {
  myLibrary.push(new Book(formValues.title.value, formValues.author.value, formValues.pages.value, formValues.read.checked))
  closeForm();
  createCards();
}


function deleteCards(){
  elements.cardcontainer.innerHTML = '';
}

function createCards(){
  deleteCards();
  for(let i = 0; i<= myLibrary.length; i++){
    const div = document.createElement('div');
    div.classList.add('card'); 
    
    const title = document.createElement('h3');
    title.innerText = 'Title:';
    div.appendChild(title);
    
    const ptitle = document.createElement('p');
    ptitle.innerText = myLibrary[i].title;
    div.appendChild(ptitle);
    
    const author = document.createElement('h3');
    author.innerText = 'Author:';
    div.appendChild(author);

    const authorp = document.createElement('p');
    authorp.innerText = myLibrary[i].author;
    div.appendChild(authorp);

    const pages = document.createElement('h3');
    pages.innerText = `Pages:`;
    div.appendChild(pages);

    const pagesp = document.createElement('p');
    pagesp.innerText = myLibrary[i].pages;
    div.appendChild(pagesp);


    const readText = document.createElement('h3');
    readText.innerText = 'Read:';
    div.appendChild(readText);

    const read = document.createElement('input');
    read.setAttribute('type', 'checkbox');
    if(myLibrary[i].read){
      read.checked = true;
    }
    div.appendChild(read);

    const button = document.createElement('button');
    button.innerText = 'Remove';
    button.classList.add('.removeBook');
    div.appendChild(button);

    elements.cardcontainer.appendChild(div);
  } 
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




