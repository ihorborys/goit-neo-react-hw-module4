import { Field, Form, Formik } from "formik";
import styles from "./SearchBar.module.css";
import { MdOutlineImageSearch } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Please, enter search query!");

const SearchBar = ({ search, isDisabled }) => {
  const handleSubmit = (values) => {
    if (values.query.trim().length > 0) search(values.query);
    else notify();
  };
  return (
    <header className={styles.header}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="query"
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={styles.button} type="submit" disabled={isDisabled}>
            <MdOutlineImageSearch className={styles.icon} />
          </button>
        </Form>
      </Formik>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "5px",
            color: "#713200",
          },
        }}
      />
    </header>
  );
};

export default SearchBar;
