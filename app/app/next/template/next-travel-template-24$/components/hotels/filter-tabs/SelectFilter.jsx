const SelectFilter = () => {
  return (
    <select className="form-select rounded-4 border-light justify-between text-16 fw-500 px-20 h-50 w-140 sm:w-full text-14">
      <option defaultValue>Hotel</option>
      <option value="animation">Animation</option>
      <option value="design">Design</option>
      <option value="illustration">Illustration</option>
      <option value="lifestyle">Lifestyle</option>
      <option value="business">Business</option>
    </select>
  );
};

export default SelectFilter;
