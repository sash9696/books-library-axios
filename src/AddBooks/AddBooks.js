import React from "react";
import "./AddBooks.css";

function AddBooks() {
  return (
    <div className="addBooks">
      <h2>Add Books</h2>
      <form>
        <label className="addBooks_label">Title:</label>
        <input className="addBooks_input" />
        <label className="addBooks_label">Author:</label>
        <input className="addBooks_input" />
        <label className="addBooks_label">Genre:</label>
        <input className="addBooks_input" />
        <label className="addBooks_label">Summary:</label>
        <input className="addBooks_input" />
        <button type="submit" className="addBooks_button">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddBooks;
