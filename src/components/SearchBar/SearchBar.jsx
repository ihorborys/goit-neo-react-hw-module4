import { Field, Form, Formik } from "formik";
import styles from "./SearchBar.module.css";
import { MdOutlineImageSearch } from "react-icons/md";

const SearchBar = ({ search }) => {
  const handleSubmit = (values) => {
    search(values.query);
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
          <button className={styles.button} type="submit">
            {/*<span className={styles.span}>Search</span>*/}
            <MdOutlineImageSearch className={styles.icon} />
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
