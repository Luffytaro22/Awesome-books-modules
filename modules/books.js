import { Methods } from './methods.js';  // Books methods

export class Books extends Methods {
  constructor(title, author) {
    super();
    this.title = title;
    this.author = author;
  }
}
