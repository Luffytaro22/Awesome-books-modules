import { Methods } from "./methods";  // Books methods

export class Books extends Methods {
  constructor(title, author) {
    super();
    this.title = title;
    this.author = author;
  }
}
