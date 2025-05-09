import ImageCard from "../ImageCard/ImageCard.jsx";
import styles from "./ImageGallery.module.css";

const imageGallery = ({ data }) => {
  return (
    <ul className={styles.list}>
      <ImageCard data={data} />
    </ul>
  );
};

export default imageGallery;
