import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import { useEffect, useState } from "react";
import { getImages } from "./api/api.js";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const [dataState, setDataState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setErrorMessage("");

        const data = await getImages(searchQuery, page);
        if (data.results.length === 0)
          setErrorMessage("Sorry, can't find anything");

        setDataState((prevDataState) => {
          return page === 1
            ? data.results
            : [...prevDataState, ...data.results];
        });
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchQuery, page]);

  const handleSearch = (searchValue) => {
    setPage(1);
    setSearchQuery(searchValue);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (regularImage) => {
    setSelectedImage(regularImage);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="container">
      <SearchBar search={handleSearch} isDisabled={loading} />
      <ImageGallery data={dataState} openModal={openModal} />
      {loading && <Loader />}
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
      {dataState.length > 0 && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        image={selectedImage}
      />
    </div>
  );
}

export default App;
