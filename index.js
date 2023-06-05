import {Methods} from './modules/methods.js';  // Books methods. 
import {submitButton, list, iconList, addNew, iconBook, contact, iconContact} from './modules/elements.js';
import {addBook} from './modules/addBook.js';
import { showBooks, showContact, showForm } from './modules/sections.js';

const myBooks = new Methods();
myBooks.displayBooks();

submitButton.addEventListener('click', addBook);

list.addEventListener('click', showBooks);
iconList.addEventListener('click', showBooks);

addNew.addEventListener('click', showForm);
iconBook.addEventListener('click', showForm);

contact.addEventListener('click', showContact);
iconContact.addEventListener('click', showContact);
