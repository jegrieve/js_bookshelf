let myLibrary = [];

const addBtn = document.querySelector('#add-btn');
const addForm = document.querySelector('#add-form');
const submitBtn = document.querySelector('#submit-btn');

addBtn.addEventListener("click", function() {
    addForm.hidden = false;
    addBtn.hidden = true;
})

submitBtn.addEventListener("click", addBookToLibrary);
submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
})


function Book(title, author, pages, read) { 
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
      return `<i>${this.title}</i> by ${this.author}, ${this.pages} pages, ${
        this.read
          ? '<span style="color: green">read.</span>'
          : '<span style="color: red">unread.</span>'
      }`; 
    };
    this.toggleRead = function () {
      this.read = !this.read;
    };
  };

  function addBookToLibrary() {
    const title = document.querySelector('#title-input').value;
    const author = document.querySelector('#author-input').value;
    const pages = document.querySelector('#pages-input').value;
    const read = document.querySelector('#read-input').checked;
    addForm.reset();
    addForm.hidden = true;
    addBtn.hidden = false;
    myLibrary.push(new Book(title, author, pages, read));
    updateLibrary();
  }

  function updateLibrary() {
    const bookshelf = document.querySelector('#bookshelf');
    bookshelf.innerHTML = '';
    for (const [index, book] of myLibrary.entries()) { 
      const bookEntry = document.createElement('li'); 
      this.book = book; 
      if (book.read) { 
        bookEntry.classList.add('read');
        bookEntry.innerHTML = `${book.info()} <button onclick="toggleReadStatus(book)">Mark unread</button>`;
      } else { 
        bookEntry.classList.add('unread');
        bookEntry.innerHTML = `${book.info()} <button onclick="toggleReadStatus(book)">Mark read</button>`;
      }
      bookEntry.innerHTML += ` <button onclick="removeBook(${index})">Remove</button>`;
      bookshelf.appendChild(bookEntry);
    }
  }
  
  function toggleReadStatus(book) {
    book.toggleRead();
    updateLibrary();
  }
  
  function removeBook(index) {
    if (index > -1) {
      myLibrary.splice(index, 1);
    }
    updateLibrary();
  }
  


