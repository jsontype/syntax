const HeaderSearch = () => {
  return (
    <div className="single-field relative d-flex items-center xl:d-none mr-20">
      <input
        className="pl-50 border-light text-dark-1 h-50 rounded-8"
        type="text"
        required
        placeholder="Destination, attraction, hotel, etc"
      />
      <button type="submit" className="absolute d-flex items-center h-full">
        <i className="icon-search text-20 px-15 text-dark-1" />
      </button>
    </div>
  );
};

export default HeaderSearch;
