import { RingLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <RingLoader className={styles.loader} size={60} />
    </div>
  );
};
export default Loader;
