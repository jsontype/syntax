import Pagination from "../../common/Pagination";

const BookingTable = () => {
  return (
    <>
      <div className="overflow-scroll scroll-bar-1">
        <table className="table-4 -border-bottom col-12">
          <thead className="bg-light-2">
            <tr>
              <th>
                <div className="d-flex items-center">
                  <div className="form-checkbox ">
                    <input type="checkbox" name="name" />
                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon icon-check" />
                    </div>
                  </div>
                </div>
              </th>
              <th>Name</th>
              <th>Location</th>
              <th>Author</th>
              <th>Status</th>
              <th>Reviews</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* End theade */}
          <tbody>
            <tr>
              <td>
                <div className="d-flex items-center">
                  <div className="form-checkbox ">
                    <input type="checkbox" name="name" />
                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon icon-check" />
                    </div>
                  </div>
                </div>
              </td>

              <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>

              <td>London</td>

              <td>Ali Tufan</td>

              <td>
                <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">
                  Pending
                </span>
              </td>

              <td>
                <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                  4.8
                </div>
              </td>

              <td>04/04/2022</td>

              <td>
                <div className="row x-gap-10 y-gap-10 items-center">
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-eye text-16 text-light-1" />
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-edit text-16 text-light-1" />
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-trash-2 text-16 text-light-1" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            {/* End tr */}

            <tr>
              <td>
                <div className="d-flex items-center">
                  <div className="form-checkbox ">
                    <input type="checkbox" name="name" />
                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon icon-check" />
                    </div>
                  </div>
                </div>
              </td>

              <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
              <td>London</td>
              <td>Ali Tufan</td>

              <td>
                <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                  Confirmed
                </span>
              </td>

              <td>
                <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                  4.8
                </div>
              </td>

              <td>04/04/2022</td>

              <td>
                <div className="row x-gap-10 y-gap-10 items-center">
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-eye text-16 text-light-1" />
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-edit text-16 text-light-1" />
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-trash-2 text-16 text-light-1" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            {/* End tr */}

            <tr>
              <td>
                <div className="d-flex items-center">
                  <div className="form-checkbox ">
                    <input type="checkbox" name="name" />
                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon icon-check" />
                    </div>
                  </div>
                </div>
              </td>

              <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
              <td>London</td>
              <td>Ali Tufan</td>

              <td>
                <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">
                  Pending
                </span>
              </td>

              <td>
                <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                  4.8
                </div>
              </td>

              <td>04/04/2022</td>

              <td>
                <div className="row x-gap-10 y-gap-10 items-center">
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-eye text-16 text-light-1" />
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-edit text-16 text-light-1" />
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-trash-2 text-16 text-light-1" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            {/* End tr */}

            <tr>
              <td>
                <div className="d-flex items-center">
                  <div className="form-checkbox ">
                    <input type="checkbox" name="name" />
                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon icon-check" />
                    </div>
                  </div>
                </div>
              </td>

              <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
              <td>London</td>
              <td>Ali Tufan</td>

              <td>
                <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                  Confirmed
                </span>
              </td>

              <td>
                <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                  4.8
                </div>
              </td>

              <td>04/04/2022</td>

              <td>
                <div className="row x-gap-10 y-gap-10 items-center">
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-eye text-16 text-light-1" />
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-edit text-16 text-light-1" />
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-trash-2 text-16 text-light-1" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            {/* End tr */}

            <tr>
              <td>
                <div className="d-flex items-center">
                  <div className="form-checkbox ">
                    <input type="checkbox" name="name" />
                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon icon-check" />
                    </div>
                  </div>
                </div>
              </td>

              <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
              <td>London</td>
              <td>Ali Tufan</td>

              <td>
                <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                  Confirmed
                </span>
              </td>

              <td>
                <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                  4.8
                </div>
              </td>

              <td>04/04/2022</td>

              <td>
                <div className="row x-gap-10 y-gap-10 items-center">
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-eye text-16 text-light-1" />
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-edit text-16 text-light-1" />
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-trash-2 text-16 text-light-1" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            {/* End tr */}

            <tr>
              <td>
                <div className="d-flex items-center">
                  <div className="form-checkbox ">
                    <input type="checkbox" name="name" />
                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon icon-check" />
                    </div>
                  </div>
                </div>
              </td>

              <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
              <td>London</td>
              <td>Ali Tufan</td>

              <td>
                <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                  Confirmed
                </span>
              </td>

              <td>
                <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                  4.8
                </div>
              </td>

              <td>04/04/2022</td>

              <td>
                <div className="row x-gap-10 y-gap-10 items-center">
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-eye text-16 text-light-1" />
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-edit text-16 text-light-1" />
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-trash-2 text-16 text-light-1" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            {/* End tr */}

            <tr>
              <td>
                <div className="d-flex items-center">
                  <div className="form-checkbox ">
                    <input type="checkbox" name="name" />
                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon icon-check" />
                    </div>
                  </div>
                </div>
              </td>

              <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
              <td>London</td>
              <td>Ali Tufan</td>

              <td>
                <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2">
                  Rejected
                </span>
              </td>

              <td>
                <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                  4.8
                </div>
              </td>

              <td>04/04/2022</td>

              <td>
                <div className="row x-gap-10 y-gap-10 items-center">
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-eye text-16 text-light-1" />
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-edit text-16 text-light-1" />
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-trash-2 text-16 text-light-1" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            {/* End tr */}

            <tr>
              <td>
                <div className="d-flex items-center">
                  <div className="form-checkbox ">
                    <input type="checkbox" name="name" />
                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon icon-check" />
                    </div>
                  </div>
                </div>
              </td>

              <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
              <td>London</td>
              <td>Ali Tufan</td>

              <td>
                <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2">
                  Rejected
                </span>
              </td>

              <td>
                <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                  4.8
                </div>
              </td>

              <td>04/04/2022</td>

              <td>
                <div className="row x-gap-10 y-gap-10 items-center">
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-eye text-16 text-light-1" />
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-edit text-16 text-light-1" />
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-trash-2 text-16 text-light-1" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            {/* End tr */}
          </tbody>
          {/* End tbody */}
        </table>
      </div>
      <Pagination />
    </>
  );
};

export default BookingTable;
