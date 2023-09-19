import { Book } from "../interfaces/book.interface";

class BooksApi {
  apiBaseUrl = 'http://localhost:3000/books'

  async getBooks() {
    const response = await fetch(this.apiBaseUrl);
    const jsonResp = await response.json();
    return jsonResp.books;
  }

  async createNewBook(book: Omit<Book, 'id'>) {
    const response = await fetch(this.apiBaseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(book)
    });
    const jsonResp = await response.json();
    return jsonResp.book;
  }
}

const booksApi = new BooksApi();

export default booksApi