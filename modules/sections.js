import {
  booksSection, formSection, contactSection, list, contact, addNew, iconList, iconBook, iconContact
} from './elements.js';

function showForm() {
  booksSection.classList.add('hide');
  formSection.classList.remove('hide');
  contactSection.classList.add('hide');

  list.classList.remove('change-color');
  contact.classList.remove('change-color');
  addNew.classList.add('change-color');

  iconList.classList.remove('change-color');
  iconBook.classList.add('change-color');
  iconContact.classList.remove('change-color');
}

function showContact() {
  booksSection.classList.add('hide');
  formSection.classList.add('hide');
  contactSection.classList.remove('hide');

  list.classList.remove('change-color');
  addNew.classList.remove('change-color');
  contact.classList.add('change-color');

  iconList.classList.remove('change-color');
  iconBook.classList.remove('change-color');
  iconContact.classList.add('change-color');
}

function showBooks() {
  booksSection.classList.remove('hide');
  formSection.classList.add('hide');
  contactSection.classList.add('hide');

  addNew.classList.remove('change-color');
  contact.classList.remove('change-color');
  list.classList.add('change-color');

  iconList.classList.add('change-color');
  iconBook.classList.remove('change-color');
  iconContact.classList.remove('change-color');
}

export { showBooks, showContact, showForm };
