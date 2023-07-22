const SearchBox = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      className="single-field relative d-flex items-center py-10"
      onSubmit={handleSubmit}
    >
      <input
        className="pl-50 border-light text-dark-1 h-50 rounded-8"
        type="email"
        placeholder="Search"
      />
      <button className="absolute d-flex items-center h-full">
        <i className="icon-search text-20 px-15 text-dark-1" />
      </button>
    </form>
  );
};

export default SearchBox;
