import "./App.css";
import Nav from "./Nav/Nav";
import List from "./List/List";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import AddBooks from "./AddBooks/AddBooks";
import { url } from "./api/api";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [summary, setSummary] = useState("");

  const getBooks = async () => {
    await axios.get(url).then((response) => setBooks(response.data));
  };

  useEffect(() => {
    getBooks();
  }, []);

  const updateBook = (id) => {
    axios
      .put(`${url}/${id}`, {
        title: title,
        author: author,
        genre: genre,
        summary: summary,
      })
      .then((response) => console.log(response));

    window.location.reload();
  };

  const deleteBook = (id) => {
    axios.delete(`${url}/${id}`).then((response) => console.log(response));
    window.location.reload();
  };

  return (
    <div className="app">
      <Nav />
      <div className="app_body">
        <List books={books} updateBook={updateBook} deleteBook={deleteBook} />
        <AddBooks
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          genre={genre}
          setGenre={setGenre}
          summary={summary}
          setSummary={setSummary}
        />
      </div>
    </div>
  );
}

export default App;
