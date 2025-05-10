import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import { useState } from "react";
import { getImages } from "./api/api.js";
import Loader from "./components/Loader/Loader.jsx";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchQuery) => {
    setLoading(true);

    const data = await getImages(searchQuery);
    setData(data.results);

    setLoading(false);
  };

  return (
    <div className="container">
      <SearchBar search={handleSearch} isDisabled={loading} />
      <ImageGallery data={data} />
      {loading && <Loader />}
    </div>
  );
}

export default App;
