const mainContainer = document.querySelector('#books-container');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const submitButton = document.querySelector('#book-submit');
const form = document.querySelector('#form-book');

const pDate = document.querySelector('#date');
const list = document.querySelector('.nav-sections:nth-child(1)');
const addNew = document.querySelector('.nav-sections:nth-child(2)');
const contact = document.querySelector('.nav-sections:nth-child(3)');
const booksSection = document.querySelector('#books-section');
const formSection = document.querySelector('#addBook-section');
const contactSection = document.querySelector('#contact');
const iconList = document.querySelector('#icon-list');
const iconBook = document.querySelector('#icon-book');
const iconContact = document.querySelector('#icon-contact');

export {mainContainer, titleInput, authorInput, submitButton, form, pDate, list, addNew, contact, booksSection, formSection, contactSection, iconList, iconBook, iconContact};
