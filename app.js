const library = document.querySelector('.library');
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    if (read === true) {
      return (`${title} by ${author}, ${pages} pages, already read.`);
    } else{
      return (`${title} by ${author}, ${pages} pages, not read yet.`);
    }
  };
}

function addBookToLibrary(x){
  myLibrary.push(x);
}

function showLibrary(){
  for(let i = 0; i < myLibrary.length; i++){
    console.log(myLibrary[i].info());
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 395, true);
const springSnow = new Book('Spring Snow', 'Yukio Mishima', 369, true);
const bridesheasRevisited = new Book('Brideshead Revisited', 'Evelyn Waugh', 456, true);
const WutheringHeights = new Book('Wuthering Heights', 'Emily Bronte', 1209);

//console.log(theHobbit.info());
addBookToLibrary(theHobbit);
addBookToLibrary(springSnow);
addBookToLibrary(bridesheasRevisited);
addBookToLibrary(WutheringHeights);

showLibrary();


// myLibrary.forEach(book => {
//   document.querySelector('#container').innerHTML +=  `<span class="book">${book.info()}</span></br>`
// });



function createLibrary(){
  for(let i = 0; i < myLibrary.length; i++){
    const content = document.createElement('div');
    content.classList.add('box');
    content.innerHTML =  `<span class="book">${myLibrary[i].info()} <input type="button" value="Remove" onclick="deleteBook(${i})" /></span></br>`;
    library.appendChild(content);
  }
}

createLibrary();

// Form Modal
let form = document.getElementById("addBookForm");

//button that opens the form
let btn = document.getElementById("addBtn");

// Get element the closes the form
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the form
btn.onclick = function(){
  form.style.display = "block";
}

// When user clicks span (x), close the modal
span.onclick = function(){
  form.style.display = "none";
}

// When user clicks anywhere outside of the model, close it
window.onclick = function(event){
  if(event.target == form){
    form.style.display = "none";
  }
}

// Gathering Form Input Data
function getData(form){
  let formData = new FormData(form);
  //addBookToLibrary(Object.fromEntries(formData));

  // for (var pair of formData.entries()) {
  //   console.log(pair[0] + ": " + pair[1]);
  // }

  //console.log(Object.fromEntries(formData));

  let newBook = new Book(document.getElementById("title").value,document.getElementById("author").value, document.getElementById("pages").value, document.getElementById("read").checked);
  addBookToLibrary(newBook);

}

document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();
  getData(e.target);
  library.innerHTML = '';
  createLibrary();
});

function deleteBook(b){
  myLibrary.splice(b,1);
  library.innerHTML = '';
  createLibrary();

}



