import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.button} onClick={handleLoadMore}>
        Load more ...
      </button>
    </div>
  );
};

export default LoadMoreBtn;
