const SearchBox = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      onClick={handleSubmit}
      className="w-230 single-field relative d-flex items-center"
    >
      <input
        className="pl-50 bg-white text-dark-1 h-50 rounded-8"
        type="text"
        placeholder="Search"
        required
      />
      <button type="submit" className="absolute d-flex items-center h-full">
        <i className="icon-search text-20 px-15 text-dark-1" />
      </button>
    </form>
  );
};

export default SearchBox;
