import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import { useState } from "react";
import { getImages } from "./api/api.js";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async (searchQuery) => {
    try {
      setLoading(true);
      const data = await getImages(searchQuery);
      setData(data.results);
      setErrorMessage("");
    } catch (error) {
      setData([]);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <SearchBar search={handleSearch} isDisabled={loading} />
      <ImageGallery data={data} />
      {loading && <Loader />}
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
}

export default App;
