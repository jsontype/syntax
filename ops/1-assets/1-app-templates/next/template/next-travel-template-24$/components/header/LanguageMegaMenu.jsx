import Image from "next/image";
import { useState } from "react";

const LanguageMegaMenu = ({ textClass }) => {
  const [click, setClick] = useState(false);
  const handleCurrency = () => setClick((prevState) => !prevState);

  const languageContent = [
    { id: 1, language: "English", country: "United States" },
    { id: 2, language: "Türkçe", country: "Turkey" },
    { id: 3, language: "Español", country: "España" },
    { id: 4, language: "Français", country: "France" },
    { id: 5, language: "Italiano", country: "Italia" },
    { id: 6, language: "Dari, Pashto", country: "Afghanistan" },
    { id: 7, language: "Albanian", country: "Albania" },
    { id: 8, language: "Arabic, Berber", country: "	Algeria" },
    { id: 9, language: "Catalan", country: "Andorra" },
    { id: 10, language: "Kongo, Portuguese	", country: "Angola" },
    { id: 11, language: "Spanish", country: "Argentina" },
    { id: 12, language: "Armenian", country: "Armenia" },
    { id: 13, language: "English", country: "Australia" },
    { id: 14, language: "German", country: "Austria" },
    { id: 15, language: "Azerbaijani", country: "Azerbaijan" },
    { id: 16, language: "Bengali", country: "Bangladesh" },
    { id: 17, language: "English", country: "Barbados" },
    { id: 18, language: "Belarusian", country: "Belarus" },
    { id: 19, language: "Dutch, French", country: "Belgium" },
    { id: 20, language: "English", country: "Belize" },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(languageContent[0]);

  const handleItemClick = (item) => {
    setSelectedCurrency(item);
    setClick(false);
  };

  return (
    <>
      {/* Start language currency Selector */}
      <div className="col-auto">
        <button
          className={`d-flex items-center text-14 ${textClass}`}
          onClick={handleCurrency}
        >
          <Image
            width={20}
            height={20}
            src="/img/general/lang.png"
            alt="image"
            className="rounded-full mr-10"
          />
          <span className="js-language-mainTitle">
            {" "}
            {selectedCurrency.country}
          </span>
          <i className="icon-chevron-sm-down text-7 ml-15" />
        </button>
      </div>
      {/* End language currency Selector */}

      <div className={`langMenu js-langMenu ${click ? "" : "is-hidden"}`}>
        <div className="currencyMenu__bg" onClick={handleCurrency}></div>
        <div className="langMenu__content bg-white rounded-4">
          <div className="d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light">
            <div className="text-20 fw-500 lh-15">Select your language</div>
            {/* End title */}
            <button className="pointer" onClick={handleCurrency}>
              <i className="icon-close" />
            </button>
            {/* End colse button */}
          </div>
          {/* Emd flex-wrapper */}
          <ul className="modalGrid px-30 py-30 sm:px-15 sm:py-15">
            {languageContent.map((item) => (
              <li
                className={`modalGrid__item js-item ${
                  selectedCurrency.country === item.country ? "active" : ""
                }`}
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                <div className="py-10 px-15 sm:px-5 sm:py-5">
                  <div className="text-15 lh-15 fw-500 text-dark-1">
                    {item.language}
                  </div>
                  <div className="text-14 lh-15 mt-5 js-title">
                    {item.country}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* End langMenu */}
      </div>
    </>
  );
};

export default LanguageMegaMenu;
