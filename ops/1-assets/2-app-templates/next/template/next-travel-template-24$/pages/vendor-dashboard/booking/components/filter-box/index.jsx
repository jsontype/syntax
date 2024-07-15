import DateSearch from "./DateSearch";
import DropdownFilter from "./DropdownFilter";
import SearchBox from "./SearchBox";

const FilterBox = () => {
  return (
    <div className="row x-gap-20 y-gap-20 items-center">
      <div className="col-auto">
        <DateSearch />
      </div>
      {/* End col-auto */}

      <div className="col-auto">
        <DropdownFilter />
      </div>
      {/* End col-auto */}

      <div className="col-auto">
        <SearchBox />
      </div>
      {/* End col-auto */}
    </div>
  );
};

export default FilterBox;
