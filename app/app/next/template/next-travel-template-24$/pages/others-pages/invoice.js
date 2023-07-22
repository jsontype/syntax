import dynamic from "next/dynamic";
import Link from "next/link";
import Seo from "../../components/common/Seo";

const Invoice = () => {
  return (
    <>
      <Seo pageTitle="Invoice" />
      {/* End Page Title */}

      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-10 col-lg-11">
              <div className="d-flex justify-end">
                <Link
                  href="/"
                  className="button -md -blue-1 bg-blue-1-05 text-blue-1 me-3"
                >
                  Back Home
                </Link>
                <button className="button h-50 px-24 -dark-1 bg-blue-1 text-white">
                  Print
                  <i className="icon-bed text-20 ml-10" />
                </button>
              </div>
              <div className="bg-white rounded-4 mt-50">
                <div className="layout-pt-lg layout-pb-lg px-50">
                  <div className="row justify-between">
                    <div className="col-auto">
                      <img src="/img/general/logo-dark.svg" alt="logo icon" />
                    </div>
                    <div className="col-xl-4">
                      <div className="row justify-between items-center">
                        <div className="col-auto">
                          <div className="text-26 fw-600">Invoice #</div>
                        </div>
                        <div className="col-auto">
                          <div className="text-18 fw-500 text-light-1">
                            0043128641
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-between pt-50">
                    <div className="col-auto">
                      <div className="text-15 text-light-1">Invoice date:</div>
                      <div className="text-15 fw-500 lh-15">03/10/2022</div>
                    </div>
                    <div className="col-xl-4">
                      <div className="text-15 text-light-1">Due date:</div>
                      <div className="text-15 fw-500 lh-15">03/10/2022</div>
                    </div>
                  </div>
                  <div className="row justify-between pt-50">
                    <div className="col-auto">
                      <div className="text-20 fw-500">Supplier</div>
                      <div className="text-15 fw-500 mt-20">Jobio LLC</div>
                      <div className="text-15 text-light-1 mt-10">
                        2301 Ravenswood Rd Madison,
                        <br /> WI 53711
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="text-20 fw-500">Customer</div>
                      <div className="text-15 fw-500 mt-20">John Doe</div>
                      <div className="text-15 text-light-1 mt-10">
                        329 Queensberry Street, North Melbourne VIC 3051,
                        Australia.
                      </div>
                    </div>
                  </div>
                  <div className="row pt-50">
                    <div className="col-12">
                      <table className="table col-12">
                        <thead className="bg-blue-1-05 text-blue-1">
                          <tr>
                            <th>Description</th>
                            <th>Price</th>
                            <th>VAT (20%)</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Standard Plan</td>
                            <td>$443.00</td>
                            <td>$921.80</td>
                            <td>$9243</td>
                          </tr>
                          <tr>
                            <td>Extra Plan </td>
                            <td>$413.00</td>
                            <td>$912.80</td>
                            <td>$5943</td>
                          </tr>
                          <tr>
                            <td className="text-18 fw-500">Total Due</td>
                            <td />
                            <td />
                            <td className="text-18 fw-500">$9,750</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="border-top-light py-50">
                  <div className="row x-gap-60 y-gap-10 justify-center">
                    <div className="col-auto">
                      <a href="#" className="text-14">
                        www.gotirp.com
                      </a>
                    </div>
                    <div className="col-auto">
                      <a href="#" className="text-14">
                        invoice@gotrip.com
                      </a>
                    </div>
                    <div className="col-auto">
                      <a href="#" className="text-14">
                        (123) 123-456
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(Invoice), { ssr: false });
