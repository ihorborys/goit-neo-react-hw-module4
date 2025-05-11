import styles from "./ImageCard.module.css";

const ImageCard = ({ item }) => {
  return (
    <div className={styles.imageWrapper}>
      <img
        className={styles.image}
        src={item.urls.small_s3}
        alt={item.alt_description}
      />
    </div>
  );
};

export default ImageCard;
