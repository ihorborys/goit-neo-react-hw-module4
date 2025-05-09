import { Field, Form, Formik } from "formik";

const SearchBar = ({ search }) => {
  const handleSubmit = (values) => {
    search(values.query);
  };
  return (
    <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
      <Form>
        <Field
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
