let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    if (read === true) {
      return (`${title} by ${author}, ${pages} pages, already read.`);
    }
    return (`${title} by ${author}, ${pages} pages, not read yet.`);
  };
}

function addBookToLibrary(x){
  myLibrary.push(x);
}

function showLibrary(){
  for(var i = 0; i < myLibrary.length; i++){
    console.log(myLibrary[i].info());
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 395, true);
const springSnow = new Book('Spring Snow', 'Yukio Mishima', 369, true);
const bridesheasRevisited = new Book('Brideshead Revisited', 'Evelyn Waugh', 456, true);

//console.log(theHobbit.info());
addBookToLibrary(theHobbit);
addBookToLibrary(springSnow);
addBookToLibrary(bridesheasRevisited);

showLibrary();

