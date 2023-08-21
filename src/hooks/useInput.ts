import React, { useState } from "react";

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const handler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return [value, handler, setValue];
};

export default useInput;
