import { useParams, useLocation } from "react-router-dom";
import BookCard from "../components/BookCard";

const BookDetails = () => {
  const { id } = useParams();
  const { state: book } = useLocation();
  return (
    <div className="flex flex-col gap-8" id={id}>
      <BookCard item={book} />
      <section>
        <p>{book.content}</p>
      </section>
    </div>
  )
}

export default BookDetails