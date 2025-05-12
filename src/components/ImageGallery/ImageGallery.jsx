import ImageCard from "../ImageCard/ImageCard.jsx";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ data, openModal }) => {
  return (
    <ul className={styles.list}>
      {data.map((image) => (
        <li key={image.id} className={styles.imageItem}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
