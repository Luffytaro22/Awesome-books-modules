import { form, titleInput, authorInput } from './elements.js';
import Books from './books.js';

/* A function that is called when the user clicks the submit button */
export default function addBook(event) {
  /* Create a new book */
  const book = new Books(titleInput.value, authorInput.value);

  /* If the inputs has no values then form is not submmited */
  if (!titleInput.validity.valueMissing && !authorInput.validity.valueMissing) {
    event.preventDefault();
  } else {
    return;
  }

  /* Save the book in the array and the local storage */
  book.storage();

  /* Resets the form */
  form.reset();

  /* Creates the new book element */
  book.createBook(book);
}
