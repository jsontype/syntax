const HelpSearchBlock = () => {
  return (
    <form className="single-field d-flex items-center justify-end x-gap-10 y-gap-20 pt-40">
      <div className="col-12">
        <input
          className="border-light bg-white h-68"
          type="text"
          placeholder="Cancellation, meeting point, etc."
          required
        />
      </div>

      <div className="absolute mr-4">
        <button
          type="submit"
          className="button -md -dark-1 h-60 bg-blue-1 text-white"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default HelpSearchBlock;
