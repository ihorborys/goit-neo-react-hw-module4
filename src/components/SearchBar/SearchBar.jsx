const searchBar = ({ onhandleSubmit, onhandleChange }) => {
  return (
    <header>
      <form onSubmit={onhandleSubmit}>
        <input
          onChange={onhandleChange}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default searchBar;
