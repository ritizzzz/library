let myLibrary = [];
let elements = {
  openFormButton: document.querySelector('.openForm'),
  overlay: document.querySelector('.overlay'),
  form: document.querySelector('form'),
  addbook: document.querySelector('.addBook'),
  cardcontainer: document.querySelector('.card-container'),
  inputs: document.querySelectorAll('input')
}

let patterns = {
  title:  /^.{1,500}$/,
  author: /^\w[\w\ ]{0,20}$/,
  pages:  /^\d{1,5}$/
}

let formValues = {
  title: document.querySelector('#title'),
  author: document.querySelector('#author'),
  pages: document.querySelector('#pages'),
  read: document.querySelector('#read')
}

elements.openFormButton.addEventListener('click', openForm)
elements.overlay.addEventListener('click', closeForm)
elements.addbook.addEventListener('click', addBookToLibrary)

elements.inputs.forEach(input => {

  input.addEventListener('keyup', ()=>{
    
    if(!validate(input, patterns[input.name])){
      input.style.border = '1px solid red'; 
    }else{
      input.style.border = '1px solid #999';
    }
   
    if(!validate(formValues.title, patterns.title) || !validate(formValues.author, patterns.author) || !validate(formValues.pages, patterns.pages)){
      elements.addbook.disabled = true;
    }else{
      elements.addbook.disabled = false;  
    }

  })

});


function validate(field, regex){
  return regex.test(field.value);
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

function changeReadStatus(event){
  myLibrary[event.target.parentNode.getAttribute('data-index')].readStatus();
}

function deleteCards(){
  elements.cardcontainer.innerHTML = '';
}

function removeCard(event){
  myLibrary.splice(event.target.parentNode.getAttribute('data-index'), 1);
  event.target.parentNode.remove();
  createCards();
}


function createCards(){
  deleteCards();
  for(let i = 0; i< myLibrary.length; i++){
    let div = document.createElement('div');
    div.classList.add('card');
    div.dataset.index = i; 
    
    let title = document.createElement('h3');
    title.innerText = 'Title:';
    div.appendChild(title);
    
    let ptitle = document.createElement('p');
    ptitle.innerText = myLibrary[i].title;
    div.appendChild(ptitle);
    
    let author = document.createElement('h3');
    author.innerText = 'Author:';
    div.appendChild(author);

    let authorp = document.createElement('p');
    authorp.innerText = myLibrary[i].author;
    div.appendChild(authorp);

    let pages = document.createElement('h3');
    pages.innerText = `Pages:`;
    div.appendChild(pages);

    let pagesp = document.createElement('p');
    pagesp.innerText = myLibrary[i].pages;
    div.appendChild(pagesp);


    let readText = document.createElement('h3');
    readText.innerText = 'Read:';
    div.appendChild(readText);

    let read = document.createElement('input');
    read.setAttribute('type', 'checkbox');
    read.addEventListener('change', changeReadStatus)
    if(myLibrary[i].read){
      read.checked = true;
    }
    div.appendChild(read);

    let button = document.createElement('button');
    button.innerText = 'Remove';
    button.classList.add('removeBook');
    button.addEventListener('click', removeCard);
    div.appendChild(button)

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




