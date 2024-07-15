const Transportation = () => {
  return (
    <div className="mt-30">
      <div className="fw-500 mb-20">Transportation</div>
      <div className="overflow-scroll scroll-bar-1">
        <table className="table-5 -border-bottom col-12">
          <thead className="bg-light-2">
            <tr>
              <th>Name</th>
              <th>Content</th>
              <th>Distance</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="col-2">
                <div className="form-input ">
                  <input type="text" required />
                  <label className="lh-1 text-16 text-light-1">
                    Sunny beach
                  </label>
                </div>
              </td>
              <td className="col-6">
                <div className="form-input ">
                  <textarea required rows={5} defaultValue={""} />
                  <label className="lh-1 text-16 text-light-1">Content</label>
                </div>
              </td>
              <td className="col-2">
                <div className="form-input ">
                  <input type="text" required />
                  <label className="lh-1 text-16 text-light-1">
                    Sunny beach
                  </label>
                </div>
              </td>
              <td className="col-2">
                <div className="form-input ">
                  <input type="text" required />
                  <label className="lh-1 text-16 text-light-1">
                    Select Country
                  </label>
                </div>
              </td>
              <td className="col-auto">
                <button className="flex-center bg-light-2 rounded-4 size-35">
                  <i className="icon-trash-2 text-16 text-light-1" />
                </button>
              </td>
            </tr>
            <tr>
              <td className="col-2">
                <div className="form-input ">
                  <input type="text" required />
                  <label className="lh-1 text-16 text-light-1">
                    Sunny beach
                  </label>
                </div>
              </td>
              <td className="col-6">
                <div className="form-input ">
                  <textarea required rows={5} defaultValue={""} />
                  <label className="lh-1 text-16 text-light-1">Content</label>
                </div>
              </td>
              <td className="col-2">
                <div className="form-input ">
                  <input type="text" required />
                  <label className="lh-1 text-16 text-light-1">
                    Sunny beach
                  </label>
                </div>
              </td>
              <td className="col-2">
                <div className="form-input ">
                  <input type="text" required />
                  <label className="lh-1 text-16 text-light-1">
                    Select Country
                  </label>
                </div>
              </td>
              <td className="col-auto">
                <button className="flex-center bg-light-2 rounded-4 size-35">
                  <i className="icon-trash-2 text-16 text-light-1" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-end">
        <button className="button -md -blue-1 bg-blue-1-05 text-blue-1 mt-20">
          Add Item
        </button>
      </div>
    </div>
  );
};

export default Transportation;
