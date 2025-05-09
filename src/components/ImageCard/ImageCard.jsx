import styles from "./ImageCard.module.css";

const ImageCard = ({ data }) => {
  return data.map((item) => (
    <li key={item.id} className={styles.imageItem}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={item.urls.small_s3}
          alt={item.alt_description}
        />
      </div>
    </li>
  ));
};

export default ImageCard;
