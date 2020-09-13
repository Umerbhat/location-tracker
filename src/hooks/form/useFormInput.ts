import { useState } from "react";

const useFormInput = (
  initialValue: string
): {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};
export default useFormInput;
