import { useState } from "react";

export default function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const reset = () => {
    setForm(initialForm);
  };

  return [form, onChange, reset];
}
