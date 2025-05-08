import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Axios from "axios";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import { useEffect, useState } from "react";
import { getImages } from "./api/api.js";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetching = async () => {
      const data = await getImages();
      console.log(data.results);
      setData(data.results);
    };
    fetching();
  }, []);

  const handleChange = (event) => {
    setQuery(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(query);
  };

  return (
    <>
      <SearchBar onhandleChange={handleChange} onhandleSubmit={handleSubmit} />
      <ImageGallery data={data} />
    </>
  );
}

export default App;
