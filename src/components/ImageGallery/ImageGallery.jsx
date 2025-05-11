import ImageCard from "../ImageCard/ImageCard.jsx";
import styles from "./ImageGallery.module.css";

const imageGallery = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <li key={item.id} className={styles.imageItem}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
};

export default imageGallery;
