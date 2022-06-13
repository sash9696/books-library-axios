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

  const getBooks = async () => {
    await axios.get(url).then((result) => setBooks(result.data));
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="app">
      <Nav />
      <div className="app_body">
        <List books={books} />
        <AddBooks />
      </div>
    </div>
  );
}

export default App;
