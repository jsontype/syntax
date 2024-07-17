import React from 'react';
import Select from 'react-select';

const MultiSelect = ({
  label = '',
  placeholder = '',
  options = [],
  isRequired = false,
  modelValue = [],
  error = '',
  updateModelValue,
}) => {
  const handleChange = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    updateModelValue(selectedValues);
  };

  const selectOptions = options.map((option) => ({ value: option, label: option }));

  return (
    <div className="form-group px-3">
      <label className="form-label" htmlFor={label}>
        <strong>{label}</strong> {isRequired && <span className="text-danger">*</span>}:
      </label>
      <Select
        isMulti
        value={selectOptions.filter((option) => modelValue.includes(option.value))}
        options={selectOptions}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <span className="text-danger">{error}</span>
    </div>
  );
};

export default MultiSelect;
