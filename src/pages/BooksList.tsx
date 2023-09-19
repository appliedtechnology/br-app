import booksApi from "../api/booksApi";
import AddBookForm from "../components/AddBookForm";
import BookCard from "../components/BookCard"
import { Book } from "../interfaces/book.interface"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BooksList = () => {
  const navigate = useNavigate();
  const [booksArr, setBooksArr] = useState<Book[]>([]);

  useEffect(() => {
    booksApi.getBooks()
      .then(books => {
        setBooksArr(books);
      })
  }, [])

  const createNewBook = async (book: Omit<Book, 'id'>) => {
    const createdBook = await booksApi.createNewBook(book);
    setBooksArr([...booksArr, createdBook]);
  }

  const goToDetails = (book: Book) => {
    console.log(book)
    navigate(`/books/${book.id}`, {
      state: book
    });
  }

  return (
    <>
      <div>BooksList</div>
      <section className="mb-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
            booksArr.map((bookItem) => {
              return <li onClick={() => {
                goToDetails(bookItem);
              }} key={bookItem.id}>
                <BookCard item={bookItem} />
              </li>
            })
          }
        </ul>
      </section>
      <section className="max-w-sm mx-auto">
        <AddBookForm newBookSubmit={createNewBook} />
      </section>
    </>
  )
}

export default BooksList