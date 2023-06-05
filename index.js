import {Methods} from './modules/methods.js';  // Books methods. 
import {submitButton} from './modules/elements.js';
import {addBook} from './modules/addBook.js';

const myBooks = new Methods();
myBooks.displayBooks();

submitButton.addEventListener('click', addBook);
