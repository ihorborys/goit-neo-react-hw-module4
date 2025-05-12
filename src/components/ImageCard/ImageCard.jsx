import styles from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  const handleClick = () => {
    openModal(image.urls.regular);
  };

  return (
    <div className={styles.imageWrapper} onClick={handleClick}>
      <img
        className={styles.image}
        src={image.urls.small_s3}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
