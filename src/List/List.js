import React from "react";
import "./List.css";
import Book from "./Book/Book";

function List({ books }) {
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
          />
        );
      })}
    </div>
  );
}

export default List;
