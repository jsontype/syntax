import React from 'react';
import Select from 'react-select';

const SingleSelect = ({
  label = '',
  placeholder = '',
  options = [],
  isRequired = false,
  modelValue = null,
  error = '',
  updateModelValue,
}) => {
  const handleChange = (selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.value : null;
    updateModelValue(selectedValue);
  };

  const selectOptions = options.map((option) => ({ value: option, label: option }));

  return (
    <div className="form-group px-3">
      <label className="form-label" htmlFor={label}>
        <strong>{label}</strong> {isRequired && <span className="text-danger">*</span>}:
      </label>
      <Select
        isMulti={false} // Set isMulti to false to make it behave as a single-select
        value={selectOptions.find((option) => option.value === modelValue)}
        options={selectOptions}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <span className="text-danger">{error}</span>
    </div>
  );
};

export default SingleSelect;
