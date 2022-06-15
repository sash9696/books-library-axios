import axios from "axios";
import React from "react";
import { url } from "../../api/api";
import "./Book.css";

function Book({ id, title, author, genre, summary, updateBook, deleteBook }) {
  return (
    <div className="card">
      <h4 className="card_title">{title} </h4>
      <div className="card_description">
        <p>Author: {author} </p>
        <p>Genre: {genre} </p>
      </div>
      <p className="card_summary">{summary} </p>
      <div className="card_buttons">
        <button onClick={() => updateBook(id)} className="button">
          Edit
        </button>
        <button onClick={() => deleteBook(id)} className="button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Book;
