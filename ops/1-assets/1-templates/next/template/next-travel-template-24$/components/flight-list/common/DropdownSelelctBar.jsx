const DropdownSelelctBar = () => {
  return (
    <>
      <div className="col-auto">
        <div className="dropdown js-dropdown js-amenities-active">
          <div
            className="dropdown__button d-flex items-center text-14 rounded-100 border-light px-15 h-34"
            data-bs-toggle="dropdown"
            data-bs-auto-close="true"
            aria-expanded="false"
            data-bs-offset="0,10"
          >
            <span className="js-dropdown-title">Cabin Type</span>
            <i className="icon icon-chevron-sm-down text-7 ml-10" />
          </div>
          {/* End dropdown__button */}

          <div className="toggle-element -dropdown js-click-dropdown dropdown-menu">
            <div className="text-15 y-gap-15 js-dropdown-list">
              <div>
                <button className="d-block js-dropdown-link">Small</button>
              </div>
              <div>
                <button className="d-block js-dropdown-link">Medium</button>
              </div>
              <div>
                <button className="d-block js-dropdown-link">Large</button>
              </div>
            </div>
          </div>
          {/* End dropdown-menu */}
        </div>
        {/* End dropdown */}
      </div>
      {/* End .col-auto */}

      <div className="col-auto">
        <div className="dropdown js-dropdown js-price-active">
          <div
            className="dropdown__button d-flex items-center text-14 rounded-100 border-light px-15 h-34"
            data-bs-toggle="dropdown"
            data-bs-auto-close="true"
            aria-expanded="false"
            data-bs-offset="0,10"
          >
            <span className="js-dropdown-title">Price</span>
            <i className="icon icon-chevron-sm-down text-7 ml-10" />
          </div>
          {/* End dropdown__button */}

          <div className="toggle-element -dropdown js-click-dropdown dropdown-menu">
            <div className="text-15 y-gap-15 js-dropdown-list">
              <div>
                <a href="#" className="d-block js-dropdown-link">
                  Less than $500
                </a>
              </div>
              <div>
                <a href="#" className="d-block js-dropdown-link">
                  $500 - $1000
                </a>
              </div>
              <div>
                <a href="#" className="d-block js-dropdown-link">
                  $1000 - $2000
                </a>
              </div>
              <div>
                <a href="#" className="d-block js-dropdown-link">
                  $2000+
                </a>
              </div>
            </div>
          </div>
          {/* End dropdown-menu */}
        </div>
        {/* End dropdown */}
      </div>
      {/* End .col-auto */}

      <div className="col-auto">
        <div className="dropdown js-dropdown js-style-active">
          <div
            className="dropdown__button d-flex items-center text-14 rounded-100 border-light px-15 h-34"
            data-bs-toggle="dropdown"
            data-bs-auto-close="true"
            aria-expanded="false"
            data-bs-offset="0,10"
          >
            <span className="js-dropdown-title">Length</span>
            <i className="icon icon-chevron-sm-down text-7 ml-10" />
          </div>
          {/* End dropdown__button */}

          <div className="toggle-element -dropdown js-click-dropdown dropdown-menu">
            <div className="text-15 y-gap-15 js-dropdown-list">
              <div>
                <button className="d-block js-dropdown-link">
                  Less than 16 feet
                </button>
              </div>
              <div>
                <button className="d-block js-dropdown-link">
                  12 - 26 feet
                </button>
              </div>
              <div>
                <button className="d-block js-dropdown-link">
                  26 - 40 feet
                </button>
              </div>
              <div>
                <button className="d-block js-dropdown-link">
                  40 - 65 feet
                </button>
              </div>
            </div>
          </div>
          {/* End dropdown-menu */}
        </div>
        {/* End relative */}
      </div>
      {/* End .col-auto */}

      <div className="col-auto">
        <div className="dropdown js-dropdown js-style-active">
          <div
            className="dropdown__button d-flex items-center text-14 rounded-100 border-light px-15 h-34"
            data-bs-toggle="dropdown"
            data-bs-auto-close="true"
            aria-expanded="false"
            data-bs-offset="0,10"
          >
            <span className="js-dropdown-title">Cruise Style</span>
            <i className="icon icon-chevron-sm-down text-7 ml-10" />
          </div>
          {/* End dropdown__button */}

          <div className="toggle-element -dropdown js-click-dropdown dropdown-menu">
            <div className="text-15 y-gap-15 js-dropdown-list">
              <div>
                <button className="d-block js-dropdown-link">Trawler</button>
              </div>
              <div>
                <button className="d-block js-dropdown-link">Deck boat</button>
              </div>
              <div>
                <button className="d-block js-dropdown-link">Bay boat</button>
              </div>
            </div>
          </div>
          {/* End dropdown-menu */}
        </div>
        {/* End relative */}
      </div>
      {/* End .col-auto */}
    </>
  );
};

export default DropdownSelelctBar;
