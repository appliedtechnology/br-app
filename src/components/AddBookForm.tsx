import { useForm, SubmitHandler } from "react-hook-form"
import { Book } from "../interfaces/book.interface";
import { FC } from 'react';


type Inputs = {
  title: string;
  author: string;
  content: string;
}

type AddBookFormProps = {
  newBookSubmit: (book: Omit<Book, 'id'>) => void
}

const AddBookForm: FC<AddBookFormProps> = ({
  newBookSubmit
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const addFormSubmit: SubmitHandler<Inputs> = (data) => {
    newBookSubmit(data);
  }
  return (
    <div className="border border-gray-400 rounded-md p-4 shadow-sm shadow-gray-700">
      <h2 className="text-2xl mb-8">Add Book</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(addFormSubmit)}>
        <input
          {...register("title", { required: true })}
          type="text"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter book title"
        />
        {errors.title && <span className="text-red-900 my-2 text-sm">Title is required</span>}
        <input
        {...register("author", { required: true })}
          type="text"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter author name"
        />
        {errors.author && <span className="text-red-900 my-2 text-sm">Author is required</span>}
        <textarea
          {...register("content")}
          cols={3}
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter book content"
        ></textarea>
        <button
          type="submit"
          className="mx-8 inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddBookForm