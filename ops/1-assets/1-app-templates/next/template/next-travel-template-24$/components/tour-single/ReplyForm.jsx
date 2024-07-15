const ReplyForm = () => {
  return (
    <form className="row y-gap-30 pt-20">
      <div className="col-xl-6">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Text</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-6">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Email</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <textarea required rows={4} defaultValue={""} />
          <label className="lh-1 text-16 text-light-1">
            Write Your Comment
          </label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-auto">
        <button
          type="submit"
          className="button -md -dark-1 bg-blue-1 text-white"
        >
          Post Comment <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default ReplyForm;
