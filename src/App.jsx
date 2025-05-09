import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import { useState } from "react";
import { getImages } from "./api/api.js";

function App() {
  const [data, setData] = useState([]);
  // const [query, setQuery] = useState("");

  // useEffect(() => {
  //   const fetching = async () => {
  //     const data = await getImages();
  //     console.log(data.results);
  //     setData(data.results);
  //   };
  //   fetching();
  // }, []);

  // const handleChange = (event) => {
  //   setQuery(event.target.value);
  //   console.log(event.target.value);
  // };
  //
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(query);
  // };

  const handleSearch = async (searchQuery) => {
    const data = await getImages(searchQuery);
    console.log(data.results);
    setData(data.results);
  };

  return (
    <div className="container">
      <SearchBar search={handleSearch} />
      <ImageGallery data={data} />
    </div>
  );
}

export default App;
