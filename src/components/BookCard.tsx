import { Book } from "../interfaces/book.interface"
import { FC } from 'react';

type BookCardProps = {
  item: Book
}

const BookCard: FC<BookCardProps> = ({ item }) => {
  return (
    <article className="cursor-pointer hover:-translate-y-2 duration-200 hover:shadow-md hover:shadow-indigo-800 p-4 dark:bg-gray-900 dark:text-white rounded-md shadow-sm shadow-gray-700 text-center ">
      <h2 className="mb-4 text-lg">{item.title}</h2>
      <h3 className="text-sm text-gray-700 dark:text-gray-300">
        {item.author}
      </h3>
    </article>
  )
}

export default BookCard