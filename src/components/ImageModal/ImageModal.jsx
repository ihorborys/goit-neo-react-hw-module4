import styles from "./ImageModal.module.css";
import Modal from "react-modal";

const ImageModal = ({ modalIsOpen, closeModal, image }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
        contentLabel="Image Modal"
      >
        {image && (
          <img
            className={styles.image}
            src={image}
            alt={image.alt_description}
          />
        )}
      </Modal>
    </div>
  );
};

export default ImageModal;
