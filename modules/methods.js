export class Methods {
  constructor() {
    this.books = [];

    if (localStorage.getItem('library')) {
      /* Reasign the books array to the localStorage library */
      this.books = JSON.parse(localStorage.getItem('library'));
    }
  }

  /* A method to save the info in the local storage */
  storage() {
    this.books.push({ title: `${this.title}`, author: `${this.author}` });
    localStorage.setItem('library', JSON.stringify(this.books));
  }

  /* A method to creat each book element */
  createBook(book) {
    /* Create elements */
    const bookContainer = document.createElement('div');
    const bookDetails = document.createElement('div');
    const pTitle = document.createElement('h3');
    const pAuthor = document.createElement('p');
    const removeButton = document.createElement('button');

    /* Add Classes and properties */
    bookContainer.classList.add('books');
    bookDetails.classList.add('books-details');
    const aut = book.author;
    const tit = book.title;
    removeButton.tabIndex = this.books.findIndex((obj) => obj.title === tit && obj.author === aut);
    removeButton.name = book.title;

    /* Add text */
    pTitle.textContent = book.title;
    pAuthor.textContent = `by ${book.author}`;
    removeButton.textContent = 'Remove';

    /* Append elements */
    bookDetails.appendChild(pTitle);
    bookDetails.appendChild(pAuthor);
    bookContainer.appendChild(bookDetails);
    bookContainer.appendChild(removeButton);
    mainContainer.appendChild(bookContainer);

    /* A remove book arrow function */
    const deleteBook = () => {
      const index = removeButton.tabIndex;
      bookContainer.remove();

      /* Split and join the array */
      this.books = [
        ...this.books.slice(0, index),
        ...this.books.slice(index + 1),
      ];
      localStorage.setItem('library', JSON.stringify(this.books));
      this.displayBooks();
    };

    /* Add a click listener to the remove button */
    removeButton.addEventListener('click', deleteBook);
  }

  /* A method that displays all the books elements */
  displayBooks() {
    mainContainer.innerHTML = '';
    this.books.forEach((book) => {
      this.createBook(book);
    });
  }
}
