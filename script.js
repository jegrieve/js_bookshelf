let myLibrary = [];

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

