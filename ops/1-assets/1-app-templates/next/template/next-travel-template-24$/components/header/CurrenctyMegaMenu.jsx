import { useState } from "react";

const CurrenctyMegaMenu = ({ textClass }) => {
  const [click, setClick] = useState(false);
  const handleCurrency = () => setClick((prevState) => !prevState);

  const currencyContent = [
    { id: 1, name: "United States dollar", currency: "USD", symbol: "$" },
    { id: 2, name: "Australian dollar", currency: "AUD", symbol: "$" },
    { id: 3, name: "Brazilian real", currency: "BRL", symbol: "R$" },
    { id: 4, name: "Bulgarian lev", currency: "BGN", symbol: "лв." },
    { id: 5, name: "Canadian dollar", currency: "CAD", symbol: "$" },
    { id: 6, name: "Bangladeshi Taka", currency: "BDT", symbol: "৳" },
    { id: 7, name: "Azerbaijan Manat", currency: "AZN", symbol: "₼" },
    { id: 8, name: "Colombia Peso", currency: "COP", symbol: "$" },
    { id: 9, name: "Oman Rial", currency: "OMR", symbol: "﷼" },
    { id: 10, name: "India Rupee", currency: "INR", symbol: "₹" },
    { id: 11, name: "Iran Rial", currency: "IRR", symbol: "﷼" },
    { id: 12, name: "Japan Yen", currency: "JPY", symbol: "£" },
    { id: 13, name: "Jersey Pound", currency: "JEP", symbol: "£" },
    { id: 14, name: "Korea (South) Won", currency: "KRW", symbol: "	₩" },
    { id: 15, name: "Lebanon Pound", currency: "LBP", symbol: "$" },
    { id: 16, name: "Liberia Dollar", currency: "LRD", symbol: "$" },
    { id: 17, name: "Malaysia Ringgit", currency: "MYR", symbol: "$" },
    { id: 18, name: "Mexico Peso", currency: "MXN", symbol: "$" },
    { id: 19, name: "Namibia Dollar", currency: "NAD", symbol: "R$" },
    { id: 20, name: "Nepal Rupee", currency: "NPR", symbol: "Nepal Rupee" },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(currencyContent[0]);

  const handleItemClick = (item) => {
    setSelectedCurrency(item);
    setClick(false);
  };

  return (
    <>
      {/* Start currencty dropdown wrapper */}
      <div className="col-auto">
        <button
          className={`d-flex items-center text-14 ${textClass}`}
          onClick={handleCurrency}
        >
          <span className="js-currencyMenu-mainTitle">
            {selectedCurrency.currency}
          </span>
          <i className="icon-chevron-sm-down text-7 ml-10" />
        </button>
      </div>
      {/* End currencty dropdown wrapper */}

      <div
        className={`currencyMenu js-currencyMenu ${click ? "" : "is-hidden"}`}
      >
        <div className="currencyMenu__bg" onClick={handleCurrency}></div>
        <div className="currencyMenu__content bg-white rounded-4">
          <div className="d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light">
            <div className="text-20 fw-500 lh-15">Select your currency</div>
            {/* End Title */}

            <button className="pointer" onClick={handleCurrency}>
              <i className="icon-close" />
            </button>
            {/* End colse button */}
          </div>
          {/* End flex wrapper */}
          <ul className="modalGrid px-30 py-30 sm:px-15 sm:py-15">
            {currencyContent.map((item) => (
              <li
                className={`modalGrid__item js-item ${
                  selectedCurrency.currency === item.currency ? "active" : ""
                }`}
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                <div className="py-10 px-15 sm:px-5 sm:py-5">
                  <div className="text-15 lh-15 fw-500 text-dark-1">
                    {item.name}
                  </div>
                  <div className="text-14 lh-15 mt-5">
                    <span className="js-title">{item.currency}</span>-{" "}
                    {item.symbol}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CurrenctyMegaMenu;
