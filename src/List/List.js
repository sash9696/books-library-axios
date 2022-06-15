import React from "react";
import "./List.css";
import Book from "./Book/Book";

function List({ books, updateBook, deleteBook }) {
  return (
    <div className="list">
      {books?.map((book, index) => {
        const { author, genre, id, summary, title } = book;

        return (
          <Book
            key={id}
            id={id}
            title={title}
            author={author}
            genre={genre}
            summary={summary}
            updateBook={updateBook}
            deleteBook={deleteBook}
          />
        );
      })}
    </div>
  );
}

export default List;
